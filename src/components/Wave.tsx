// Shoreline divider. Each pair of paths shares the same command structure so GSAP
// can morph between them (see Motion.tsx, [data-wave]).
const shapes = [
  [
    "M0,64 C240,112 480,16 720,48 C960,80 1200,112 1440,56 L1440,128 L0,128 Z",
    "M0,48 C240,20 480,96 720,72 C960,48 1200,28 1440,76 L1440,128 L0,128 Z",
  ],
  [
    "M0,80 C300,40 520,104 800,72 C1060,42 1260,60 1440,88 L1440,128 L0,128 Z",
    "M0,68 C300,92 520,52 800,84 C1060,108 1260,72 1440,60 L1440,128 L0,128 Z",
  ],
  [
    "M0,40 C200,80 420,96 680,70 C940,44 1180,30 1440,64 L1440,128 L0,128 Z",
    "M0,60 C200,36 420,48 680,82 C940,104 1180,90 1440,48 L1440,128 L0,128 Z",
  ],
] as const;

export function Wave({
  from,
  to,
  variant = 0,
  className = "",
}: {
  from: string;
  to: string;
  variant?: 0 | 1 | 2;
  className?: string;
}) {
  const [d, d2] = shapes[variant];
  return (
    <div className={`wave ${className}`} style={{ background: from }} aria-hidden="true">
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" focusable="false">
        <path d={d} data-wave={d2} style={{ fill: to }} />
      </svg>
    </div>
  );
}
