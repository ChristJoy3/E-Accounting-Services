"use client";

import { useRef } from "react";
import { testimonials } from "@/lib/site";
import { Arrow, QuoteMark } from "./Icons";

export function Testimonials() {
  const track = useRef<HTMLUListElement>(null);
  const drag = useRef({ active: false, x: 0, left: 0 });

  const step = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("li");
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * ((card?.offsetWidth ?? 320) + gap), behavior: "smooth" });
  };

  // Mouse drag-to-scroll; touch and trackpads already scroll natively.
  const onPointerDown = (e: React.PointerEvent<HTMLUListElement>) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { active: true, x: e.clientX, left: track.current.scrollLeft };
    track.current.setPointerCapture(e.pointerId);
    track.current.classList.add("is-dragging");
  };
  const onPointerMove = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!drag.current.active || !track.current) return;
    track.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const endDrag = (e: React.PointerEvent<HTMLUListElement>) => {
    if (!drag.current.active || !track.current) return;
    drag.current.active = false;
    track.current.releasePointerCapture(e.pointerId);
    track.current.classList.remove("is-dragging");
  };

  return (
    <div className="tcarousel" role="region" aria-roledescription="carousel" aria-label="Client testimonials">
      <ul
        className="tcarousel__track"
        ref={track}
        tabIndex={0}
        aria-label="Testimonials. Use the arrow keys to scroll."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onKeyDown={(e) => {
          if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
          e.preventDefault();
          step(e.key === "ArrowRight" ? 1 : -1);
        }}
      >
        {testimonials.map((t, i) => (
          <li
            key={t.name}
            className="tcard"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${testimonials.length}`}
            data-cursor="view"
          >
            <QuoteMark className="tcard__quote" />
            <blockquote>
              <p>{t.quote}</p>
            </blockquote>
            <p className="tcard__author">
              <span>{t.name}</span>
              {t.title}
            </p>
          </li>
        ))}
      </ul>
      <div className="tcarousel__controls">
        <button type="button" className="round-btn" onClick={() => step(-1)} aria-label="Previous testimonial">
          <Arrow className="flip" />
        </button>
        <button type="button" className="round-btn" onClick={() => step(1)} aria-label="Next testimonial">
          <Arrow />
        </button>
      </div>
    </div>
  );
}
