import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { Header } from "@/components/Header";
import { Flourish } from "@/components/Flourish";
import { Arrow, Check, Cross, Facebook, Fax, Icon, Mail, Phone, Pin } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { Motion } from "@/components/Motion";
import { Photo } from "@/components/Photo";
import { Testimonials } from "@/components/Testimonials";
import { Wave } from "@/components/Wave";
import {
  affiliations,
  billingTags,
  comparison,
  eWords,
  heroTrust,
  nav,
  photoCredits,
  site,
  solutions,
  steps,
  presidentQuote,
  team,
} from "@/lib/site";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("");
const pad = (n: number) => String(n).padStart(2, "0");
const tel = (n: string) => `tel:+1${n.replace(/-/g, "")}`;
const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.province} ${site.address.postal}`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address.street}, ${site.address.city}, PE ${site.address.postal}`,
)}&z=16&output=embed`;

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">— {children}</p>;
}

export default function Home() {
  const headline = "PEI tax filing made easy.";

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* HERO: echoes the original site's banners (the "E" words, sage
            flourish, black-and-white photography with olive accents). */}
        <section className="hero" id="top" aria-labelledby="hero-title">
          <Flourish />
          <div className="container hero__grid">
            <div className="hero__content">
              <p className="eyebrow" data-hero-fade>
                Charlottetown, PEI • Since {site.since}
              </p>
              <p className="hero__ewords" data-hero-fade>
                <span className="sr-only">{eWords.join(", ")}.</span>
                {eWords.map((w, i) => (
                  <span className={`eword ${i === 0 ? "is-first" : ""}`} key={w} aria-hidden="true">
                    <b>E</b>
                    {w.slice(1)}
                  </span>
                ))}
              </p>
              <h1 id="hero-title" className="hero__title">
                <span className="sr-only">{headline}</span>
                <span aria-hidden="true">
                  {headline.split(" ").map((word, w) => (
                    <span className="hero-word" key={w}>
                      {[...word].map((ch, c) => (
                        <span className="hero-char" key={c}>
                          {ch}
                        </span>
                      ))}
                    </span>
                  ))}
                </span>
              </h1>
              <p className="hero__sub" data-hero-fade>
                Bookkeeping, accounting, payroll, and tax for individuals, families, and businesses,
                however simple or complicated your books are.
              </p>
              <div className="hero__ctas" data-hero-fade>
                <a className="btn btn--accent btn--lg" href="#contact">
                  Book a free consultation <Arrow size={20} />
                </a>
                <a className="btn btn--outline btn--lg" href="#solutions">
                  See what we do
                </a>
              </div>
              <ul className="hero__trust" data-hero-fade>
                {heroTrust.map((t) => (
                  <li key={t}>
                    <span className="tick">
                      <Check size={16} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hero__visual">
              <div className="hero__media" data-cursor="view">
                <div className="hero__zoom">
                  <Image
                    src="/images/hero-desk.jpg"
                    alt="Hands writing notes with a pen at a desk"
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="hero__img"
                  />
                </div>
              </div>
              <div className="hero__inset" data-cursor="view">
                <Image
                  src="/images/hero-calculator.jpg"
                  alt="A calculator, pens and pencil on a desk"
                  fill
                  sizes="(min-width: 1024px) 18vw, 40vw"
                  className="hero__img"
                />
              </div>
              <figure className="hero__quote" data-hero-fade>
                <blockquote>
                  <p>&ldquo;{presidentQuote.quote}&rdquo;</p>
                </blockquote>
                <figcaption>
                  {presidentQuote.name}, {presidentQuote.title}
                </figcaption>
              </figure>
            </div>
          </div>
          <Wave from="transparent" to="var(--paper)" className="wave--hero" />
        </section>

        {/* BRAND PROMISE */}
        <section className="promise section" aria-label="Our promise">
          <div className="container promise__grid">
            <p className="promise__text">
              {"We worry about your numbers.".split(" ").map((w, i) => (
                <span className="word" key={`a${i}`}>
                  {w}{" "}
                </span>
              ))}
              <em>
                {"Because to us, you're not just another number.".split(" ").map((w, i) => (
                  <span className="word" key={`b${i}`}>
                    {w}{" "}
                  </span>
                ))}
              </em>
            </p>
            <div className="promise__aside">
              <Photo
                file="business-owner.jpg"
                alt="A small-business owner at work"
                placeholder="[Photo: small-business owner at work]"
                className="photo--tall"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
              <p className="lead" data-fade>
                We pride ourselves on removing the stress of managing your books, getting the work
                done on time, accurately, and with the attention to detail you deserve.
              </p>
            </div>
          </div>
        </section>

        <Wave from="var(--paper)" to="var(--sage)" variant={1} />

        {/* WORKING WITH YOU */}
        <section className="working section bg-sage" id="working-with-you" aria-labelledby="working-title">
          <div className="container split">
            <Photo
              file="advisor-meeting.jpg"
              alt="An advisor meeting with a client"
              placeholder="[Photo: advisor meeting a client]"
              className="photo--split"
              parallax
            />
            <div className="split__text">
              <Eyebrow>Working with you</Eyebrow>
              <h2 id="working-title" className="display" data-fade>
                More time. Less stress. Greater peace of mind.
              </h2>
              <p className="lead" data-fade>
                No two clients are the same, but everyone wants the same three things.
              </p>
              <p data-fade>
                Many clients come to us frustrated with their old bookkeeping arrangement: struggling
                to find someone competent and reliable, a revolving door of part-time staff to
                retrain, costly mistakes to fix, and little timely feedback.
              </p>
              <p data-fade>
                We&rsquo;re not just pushing paper, but working to identify problems before they
                happen. We take the time to discuss new issues as they arise, helping you find the best
                solutions for your business.
              </p>
            </div>
          </div>

          <div className="container compare" data-fade>
            <div className="compare__col compare__col--before">
              <h3>Before</h3>
              <ul>
                {comparison.before.map((t) => (
                  <li key={t}>
                    <Cross size={18} /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="compare__col compare__col--after">
              <h3>With E Accounting</h3>
              <ul>
                {comparison.after.map((t) => (
                  <li key={t}>
                    <Check size={18} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Wave from="var(--sage)" to="var(--ink)" variant={2} />

        {/* SOLUTIONS */}
        <section className="solutions bg-ink" id="solutions" aria-labelledby="solutions-title">
          <div className="solutions__pin">
            <div className="container solutions__head">
              <div>
                <p className="eyebrow eyebrow--light">— Solutions</p>
                <h2 id="solutions-title" className="display">
                  So, what exactly do you do?
                </h2>
              </div>
              <p className="solutions__intro">
                As much or as little as you need.
                <span className="solutions__hint" aria-hidden="true">
                  Scroll <Arrow size={16} />
                </span>
              </p>
            </div>
            <div className="solutions__viewport">
              <ol className="solutions__track">
                {solutions.map((s, i) => (
                  <li className="scard" key={s.title} data-cursor="view">
                    <span className="scard__num">{pad(i + 1)}</span>
                    <span className="scard__icon">
                      <Icon name={s.icon} size={40} />
                    </span>
                    <h3>{s.title}</h3>
                  </li>
                ))}
              </ol>
            </div>
            <div className="container">
              <div className="solutions__progress" aria-hidden="true">
                <span />
              </div>
            </div>
          </div>
        </section>

        <Wave from="var(--ink)" to="var(--paper)" variant={0} />

        {/* HOW IT WORKS */}
        <section className="how section" aria-labelledby="how-title">
          <div className="container how__grid">
            <div className="how__intro">
              <Eyebrow>How it works</Eyebrow>
              <h2 id="how-title" className="display" data-fade>
                Four simple steps.
              </h2>
              <Photo
                file="charlottetown-street.jpg"
                alt="A Charlottetown streetscape"
                placeholder="[Photo: Charlottetown streetscape]"
                className="photo--wide"
                sizes="(min-width: 1024px) 35vw, 100vw"
              />
            </div>
            <ol className="steps">
              {steps.map((s, i) => (
                <li className="step" key={s.title} style={{ "--i": i } as React.CSSProperties}>
                  <article className="step__card">
                    <span className="step__num">{pad(i + 1)}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <Wave from="var(--paper)" to="var(--cream)" variant={1} />

        {/* FLEXIBLE BILLING */}
        <section className="billing section bg-cream" aria-labelledby="billing-title">
          <span className="blob blob--billing" aria-hidden="true" />
          <div className="container billing__inner">
            <Eyebrow>Flexible billing</Eyebrow>
            <h2 id="billing-title" className="display" data-fade>
              Billing that respects your cash flow.
            </h2>
            <p className="lead" data-fade>
              We bill monthly in arrears, on an hourly or fixed-fee basis, with flexible terms to help
              you manage your cash flow.
            </p>
            <ul className="pills" data-fade>
              {billingTags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <Wave from="var(--cream)" to="var(--paper)" variant={2} />

        {/* THE RIGHT PEOPLE */}
        <section className="team section" id="team" aria-labelledby="team-title">
          <div className="container">
            <Eyebrow>The right people</Eyebrow>
            <h2 id="team-title" className="display" data-fade>
              The right person, part of your team.
            </h2>
            <ul className="team__grid">
              {team.map((m) => (
                <li className="member" key={m.name} data-fade>
                  <Photo
                    file={m.photo}
                    alt={`Photo of ${m.name}`}
                    placeholder={`[Photo: ${m.name}]`}
                    monogram={initials(m.name)}
                    natural
                    className="member__photo"
                    sizes="(min-width: 900px) 20vw, 100vw"
                  />
                  <div className="member__info">
                    <h3>{m.name}</h3>
                    <p className="member__role">{m.role}</p>
                    <p className="member__bio">{m.bio}</p>
                    <a className="member__email" href={`mailto:${m.email}`}>
                      <Mail size={18} /> {m.email}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="affiliations" data-fade>
              <h3 className="affiliations__title">Proud members of</h3>
              <ul className="affiliations__list">
                {affiliations.map((a) => (
                  <li key={a.name}>
                    <a href={a.url} target="_blank" rel="noopener noreferrer">
                      <Image src={a.logo} alt={`${a.name} (opens in a new tab)`} width={a.width} height={a.height} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Wave from="var(--paper)" to="var(--sage)" variant={0} />

        {/* TESTIMONIALS */}
        <section className="testimonials section bg-sage" aria-labelledby="testimonials-title">
          <div className="container">
            <Eyebrow>Testimonials</Eyebrow>
            <h2 id="testimonials-title" className="display" data-fade>
              In our clients&rsquo; words.
            </h2>
          </div>
          <div className="container container--bleed">
            <Testimonials />
          </div>
        </section>

        <Wave from="var(--sage)" to="var(--paper)" variant={1} />

        {/* FAQ */}
        <section className="faq-section section" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <div>
              <Eyebrow>FAQ</Eyebrow>
              <h2 id="faq-title" className="display" data-fade>
                Questions, answered.
              </h2>
              <p className="lead" data-fade>
                Something else on your mind? Call us at{" "}
                <a href={tel(site.phone)}>{site.phone}</a>.
              </p>
            </div>
            <Faq />
          </div>
        </section>

        <Wave from="var(--paper)" to="var(--accent)" variant={2} />

        {/* CTA BAND */}
        <section className="cta bg-accent" aria-labelledby="cta-title">
          <span className="blob blob--cta" aria-hidden="true" />
          <div className="container cta__inner">
            <h2 id="cta-title" className="display" data-fade>
              Let us get working for you.
            </h2>
            <p className="lead" data-fade>
              Talk to us about this year&rsquo;s tax deadline.
            </p>
            <a className="btn btn--light btn--lg" href="#contact" data-fade>
              Book a free consultation <Arrow size={20} />
            </a>
          </div>
        </section>

        <Wave from="var(--accent)" to="var(--ink)" variant={0} />

        {/* CONTACT */}
        <section className="contact section bg-ink" id="contact" aria-labelledby="contact-title">
          <div className="container contact__grid">
            <div className="contact__info">
              <p className="eyebrow eyebrow--light">— Contact</p>
              <h2 id="contact-title" className="display">
                Get in touch.
              </h2>
              <p className="lead">Consultations are free.</p>
              <p className="contact__intro">
                Should your business have a bookkeeping, accounting, payables, or tax emergency, then E
                Accounting Services will be there for you. Even if you are not sure exactly what you
                might need, just give us a call or complete the form and we can arrange a personal
                face-to-face or phone consultation to narrow it down.
              </p>
              <address>
                <ul className="contact__list">
                  <li>
                    <Pin size={22} />
                    <span>{fullAddress}</span>
                  </li>
                  <li>
                    <Phone size={22} />
                    <span>
                      Phone: <a href={tel(site.phone)}>{site.phone}</a>
                    </span>
                  </li>
                  <li>
                    <Fax size={22} />
                    <span>Fax: {site.fax}</span>
                  </li>
                  <li>
                    <Mail size={22} />
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </li>
                </ul>
              </address>
              <p className="contact__careers">
                Interested in joining the E Accounting team? Email your resume and covering letter to{" "}
                <a href={`mailto:${site.careersEmail}`}>{site.careersEmail}</a>.
              </p>
              <a className="contact__fb" href={site.facebook} target="_blank" rel="noopener noreferrer">
                <span className="contact__fb-icon">
                  <Facebook size={22} />
                </span>
                <span>
                  For tips and more, follow us on Facebook
                  <small>{site.facebookLabel}</small>
                </span>
              </a>
            </div>
            <div className="contact__form card">
              <h3 className="display-sm">Send us a message</h3>
              <ContactForm />
            </div>
          </div>
          <div className="container">
            <div className="map">
              <iframe
                src={mapSrc}
                title={`Map showing ${fullAddress}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <p className="logo">
              <Logo />
            </p>
            <p className="footer__tagline">{site.tagline}</p>
            <p>
              Bookkeeping, accounting, payroll, and tax for individuals, families, and businesses.
              Charlottetown, PEI, since {site.since}.
            </p>
          </div>
          <nav aria-label="Solutions">
            <h2 className="footer__h">Solutions</h2>
            <ul>
              {solutions.map((s) => (
                <li key={s.short}>
                  <a href="#solutions">{s.short}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2 className="footer__h">Company</h2>
            <ul>
              {nav
                .filter((n) => n.href !== "#solutions")
                .map((n) => (
                  <li key={n.href}>
                    <a href={n.href}>{n.label}</a>
                  </li>
                ))}
            </ul>
          </nav>
          <div>
            <h2 className="footer__h">Contact</h2>
            <ul className="footer__contact">
              <li>{fullAddress}</li>
              <li>
                Phone: <a href={tel(site.phone)}>{site.phone}</a>
              </li>
              <li>Fax: {site.fax}</li>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
            <a
              className="round-btn round-btn--light"
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="E Accounting Services on Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
        <div className="container footer__bottom">
          <p>
            © {site.since}–{new Date().getFullYear()} {site.name}, Charlottetown, PEI.
          </p>
          <p className="footer__credits">
            {photoCredits.map((c) => (
              <span key={c.url}>
                {c.label}:{" "}
                <a href={c.url} target="_blank" rel="noopener noreferrer">
                  {c.author}
                </a>
                ,{" "}
                <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer">
                  {c.license}
                </a>
                .
              </span>
            ))}
          </p>
        </div>
      </footer>

      <Motion />
    </>
  );
}
