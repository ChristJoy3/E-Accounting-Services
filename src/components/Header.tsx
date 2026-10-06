"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { Phone } from "./Icons";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`header ${open ? "is-open" : ""}`} data-header>
      <div className="header__bar container">
        <a href="#top" className="logo" aria-label={`${site.name}, back to top`}>
          <Logo priority />
        </a>

        <nav className="header__nav" aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a className="header__phone" href={`tel:+1${site.phone.replace(/-/g, "")}`}>
            <Phone size={18} />
            <span>{site.phone}</span>
          </a>
          <a className="btn btn--accent btn--sm" href="#contact">
            Free Consultation
          </a>
          <button
            type="button"
            className="header__toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className="mobile-nav" hidden={!open}>
        <ul>
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn--accent" href="#contact" onClick={() => setOpen(false)}>
          Free Consultation
        </a>
        <a className="mobile-nav__phone" href={`tel:+1${site.phone.replace(/-/g, "")}`}>
          <Phone size={18} /> {site.phone}
        </a>
      </div>
    </header>
  );
}
