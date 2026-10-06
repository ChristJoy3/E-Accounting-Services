import { site } from "@/lib/site";

/**
 * First-load screen built from the logo's "E" emblem (see app/icon.svg).
 * Rendered on the server so it covers the page from the first paint; Motion.tsx
 * adds `is-done` once fonts are ready, and CSS hides it on its own if JS fails.
 */
export function Loader() {
  return (
    <div className="loader" data-loader aria-hidden="true">
      <svg className="loader__mark" viewBox="0 0 80 80" focusable="false">
        <defs>
          <radialGradient id="loader-sphere" cx="38%" cy="32%" r="70%">
            <stop offset="0" stopColor="#C4CB7E" />
            <stop offset=".55" stopColor="#8D954A" />
            <stop offset="1" stopColor="#4F5527" />
          </radialGradient>
        </defs>
        <circle className="loader__track" cx="40" cy="40" r="36" />
        <circle className="loader__arc" cx="40" cy="40" r="36" pathLength={1} />
        <g className="loader__emblem">
          <circle cx="40" cy="40" r="26" fill="url(#loader-sphere)" />
          <g
            className="loader__e"
            transform="translate(40 40) scale(.867) translate(-32 -32)"
            fill="none"
            stroke="#fff"
          >
            <path d="M43 18.6 A17 17 0 1 0 43 45.4" strokeWidth={7.5} pathLength={1} />
            <path d="M19 32 H37" strokeWidth={5} strokeLinecap="round" pathLength={1} />
            <path d="M44.6 13 V23.5" strokeWidth={3.6} pathLength={1} />
            <path d="M44.6 40.5 V51" strokeWidth={3.6} pathLength={1} />
          </g>
        </g>
      </svg>
      <p className="loader__name">{site.name}</p>
    </div>
  );
}
