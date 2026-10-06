"use client";

import { useId, useState } from "react";
import { faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="faq">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${id}-q${i}`;
        const panelId = `${id}-a${i}`;
        return (
          <div className={`faq__item ${isOpen ? "is-open" : ""}`} key={item.q} data-fade>
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={btnId} className="faq__panel">
              <div>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
