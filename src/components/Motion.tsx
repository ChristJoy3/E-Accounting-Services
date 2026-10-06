"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const MOTION = "(prefers-reduced-motion: no-preference)";
const DESKTOP = `(min-width: 1024px) and ${MOTION}`;
const TABLET_UP = `(min-width: 768px) and ${MOTION}`;
const MOBILE = `(max-width: 767px) and ${MOTION}`;
const FINE_POINTER = `(pointer: fine) and ${MOTION}`;

const $ = <T extends Element = HTMLElement>(sel: string) => document.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string) => gsap.utils.toArray<T>(sel);

// Play an entrance once without killing the trigger. `once: true` kills triggers
// mid-refresh when the page loads already scrolled (scroll restoration, HMR),
// which corrupts ScrollTrigger's internal list ("reading 'end'").
const PLAY_ONCE = "play none none none";

/**
 * All page motion lives here so the sections themselves can stay server
 * components. Elements opt in through classes and data attributes.
 */
export function Motion() {
  const cursor = useRef<HTMLDivElement>(null);
  const fab = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Smooth scroll. Lenis honours prefers-reduced-motion on its own.
    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: -80 } });
    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Loader: hold until fonts are ready (and long enough for the "E" to draw),
    // then fade it out and let the hero intro play.
    let disposed = false;
    let finishLoader = () => {};
    const loaderDone = new Promise<void>((resolve) => (finishLoader = resolve));
    const loader = $("[data-loader]");
    if (!loader || loader.classList.contains("is-done")) {
      finishLoader();
    } else {
      lenis.stop();
      const minShow = matchMedia(MOTION).matches ? 1300 : 0;
      const fontsReady = document.fonts?.ready ?? Promise.resolve();
      Promise.all([
        Promise.race([fontsReady, new Promise((r) => setTimeout(r, 4000))]),
        new Promise((r) => setTimeout(r, Math.max(0, minShow - performance.now()))),
      ]).then(() => {
        loader.classList.add("is-done");
        if (!disposed) lenis.start();
        setTimeout(finishLoader, 250);
      });
    }

    const mm = gsap.matchMedia();

    // Pinned horizontal solutions. Created first so later triggers account
    // for the pin spacing.
    mm.add(DESKTOP, () => {
      const section = $(".solutions");
      const track = $(".solutions__track");
      const viewport = $(".solutions__viewport");
      if (!section || !track || !viewport) return;
      section.classList.add("is-pinned");
      const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".solutions__pin",
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      tl.to(track, { x: () => -distance(), ease: "none" }, 0).fromTo(
        ".solutions__progress span",
        { scaleX: 0 },
        { scaleX: 1, ease: "none" },
        0,
      );
      return () => section.classList.remove("is-pinned");
    });

    mm.add(MOTION, () => {
      // Hero: letters rise and the photo zooms out once the loader clears.
      const intro = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } });
      loaderDone.then(() => intro.play());
      intro
        .fromTo(".hero__zoom", { scale: 1.15 }, { scale: 1, duration: 2.6, ease: "power2.out" }, 0)
        .fromTo(
          ".hero-char",
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.028 },
          0.15,
        )
        .fromTo(
          "[data-hero-fade]",
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
          0.7,
        );
      // Collage drifts at two speeds as the hero scrolls away.
      const heroScrub = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
      gsap.to(".hero__media", { y: -50, ease: "none", scrollTrigger: heroScrub });
      gsap.to(".hero__inset", { y: -120, ease: "none", scrollTrigger: { ...heroScrub } });

      // The original site's "E" words, cycling one after another.
      const words = $$(".eword");
      if (words.length > 1) {
        const cycle = gsap.timeline({ repeat: -1, delay: 1.6 });
        words.forEach((word, i) => {
          const next = words[(i + 1) % words.length];
          cycle
            .to(word, { yPercent: -60, opacity: 0, duration: 0.5, ease: "power2.in" }, "+=1.8")
            .fromTo(
              next,
              { yPercent: 60, opacity: 0 },
              // immediateRender would hide the first word as soon as the loop is built
              { yPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out", immediateRender: false },
            );
        });
      }

      // Brand promise: words fill from faded to full olive ink.
      gsap.fromTo(
        ".promise__text .word",
        { color: "#C4C8B4" },
        {
          color: "#2B3017",
          ease: "none",
          stagger: 0.1,
          scrollTrigger: { trigger: ".promise__text", start: "top 80%", end: "bottom 45%", scrub: true },
        },
      );

      // Shoreline dividers drift slowly; paused while off screen.
      $$<SVGPathElement>("[data-wave]").forEach((path, i) => {
        gsap.to(path, {
          attr: { d: path.dataset.wave ?? "" },
          duration: 7 + (i % 3) * 1.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          scrollTrigger: { trigger: path, toggleActions: "play pause resume pause" },
        });
      });

      // Curtain-wipe image reveal.
      $$("[data-reveal]").forEach((el) => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top 85%", toggleActions: PLAY_ONCE } });
        tl.fromTo(
          el,
          { clipPath: "inset(0 100% 0 0 round 20px)" },
          { clipPath: "inset(0 0% 0 0 round 20px)", duration: 1.3, ease: "power4.inOut" },
        );
        const content = el.querySelector(".photo__inner > *");
        if (content) tl.fromTo(content, { scale: 1.2 }, { scale: 1, duration: 1.6, ease: "power3.out" }, 0);
      });

      $$("[data-parallax]").forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      // Generic fade-ups.
      gsap.set("[data-fade]", { opacity: 0, y: 32 });
      ScrollTrigger.batch("[data-fade]", {
        start: "top 90%",
        onEnter: (els) =>
          gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true }),
      });

      // Testimonial quote marks pop in.
      gsap.fromTo(
        ".tcard__quote",
        { scale: 0.3, rotate: -14, opacity: 0 },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.9,
          ease: "back.out(2)",
          stagger: 0.12,
          scrollTrigger: { trigger: ".tcarousel", start: "top 80%", toggleActions: PLAY_ONCE },
        },
      );
    });

    // Stacked sticky steps: earlier cards settle back as the next one lands.
    mm.add(TABLET_UP, () => {
      const cards = $$(".step__card");
      cards.slice(0, -1).forEach((card, i) => {
        gsap.fromTo(
          card,
          { scale: 1, filter: "brightness(1)" },
          {
            scale: 0.93,
            filter: "brightness(0.9)",
            ease: "none",
            scrollTrigger: { trigger: cards[i + 1], start: "top bottom", end: "top 30%", scrub: true },
          },
        );
      });
    });

    mm.add(MOBILE, () => {
      $$(".step__card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 88%", toggleActions: PLAY_ONCE } },
        );
      });
    });

    // Custom cursor: olive dot that grows into a "View" circle.
    mm.add(FINE_POINTER, () => {
      const el = cursor.current;
      if (!el) return;
      const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
      const move = (e: PointerEvent) => {
        el.classList.add("is-active");
        xTo(e.clientX);
        yTo(e.clientY);
      };
      const over = (e: PointerEvent) => {
        const target = e.target as Element | null;
        el.classList.toggle("is-view", !!target?.closest?.('[data-cursor="view"]'));
      };
      const leave = () => el.classList.remove("is-active");
      window.addEventListener("pointermove", move);
      document.addEventListener("pointerover", over);
      document.documentElement.addEventListener("pointerleave", leave);
      return () => {
        window.removeEventListener("pointermove", move);
        document.removeEventListener("pointerover", over);
        document.documentElement.removeEventListener("pointerleave", leave);
        el.classList.remove("is-active", "is-view");
      };
    });

    // Header and floating CTA state (applies with or without reduced motion).
    const header = $("[data-header]");
    const hero = $(".hero");
    const cta = $(".cta");
    const syncChrome = () => {
      const y = window.scrollY;
      header?.classList.toggle("is-solid", y > 80);
      const pastHero = !!hero && y > hero.offsetHeight * 0.7;
      // Hide once the CTA band (and the contact form below it) comes into view.
      const nearEnd = !!cta && cta.getBoundingClientRect().top < window.innerHeight;
      fab.current?.classList.toggle("is-visible", pastHero && !nearEnd);
    };
    syncChrome();
    window.addEventListener("scroll", syncChrome, { passive: true });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    return () => {
      disposed = true;
      window.removeEventListener("scroll", syncChrome);
      mm.revert();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <a ref={fab} href="#contact" className="fab btn btn--accent">
        Book a free consultation
      </a>
      <div ref={cursor} className="cursor" aria-hidden="true">
        <span className="cursor__dot">
          <span>View</span>
        </span>
      </div>
    </>
  );
}
