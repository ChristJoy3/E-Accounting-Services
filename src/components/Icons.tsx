import type { IconName } from "@/lib/site";

type Props = { className?: string; size?: number };

function Svg({
  className,
  size = 24,
  children,
}: Props & { children: React.ReactNode }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const paths: Record<IconName, React.ReactNode> = {
  storefront: (
    <>
      <path d="M3 9.5 4.5 4h15L21 9.5" />
      <path d="M3 9.5a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
      <path d="M4.5 12v8h15v-8" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  ledger: (
    <>
      <path d="M4 5.5C6.5 4 9.5 4 12 5.5 14.5 4 17.5 4 20 5.5V19c-2.5-1.5-5.5-1.5-8 0-2.5-1.5-5.5-1.5-8 0Z" />
      <path d="M12 5.5V19" />
      <path d="M6.5 9h3M6.5 12h3M14.5 9h3M14.5 12h3" />
    </>
  ),
  exchange: (
    <>
      <path d="M4 8h14" />
      <path d="m15 4.5 3.5 3.5L15 11.5" />
      <path d="M20 16H6" />
      <path d="M9 12.5 5.5 16 9 19.5" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21Z" />
      <path d="m9.5 13.5 5-5" />
      <circle cx="9.75" cy="8.75" r=".9" />
      <circle cx="14.25" cy="13.25" r=".9" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c.6-3.3 3-5.2 6-5.2s5.4 1.9 6 5.2" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6" />
      <path d="M17.5 14.9c1.9.6 3.1 2.3 3.5 5.1" />
    </>
  ),
  report: (
    <>
      <path d="M4 20V4" />
      <path d="M4 20h16" />
      <path d="M8 16v-4M12 16V8M16 16v-6" />
    </>
  ),
  laptop: (
    <>
      <rect x="4.5" y="5" width="15" height="10" rx="1.5" />
      <path d="M2.5 19h19" />
      <circle cx="12" cy="10" r="2" />
      <path d="M12 6.8V8M12 12v1.2M8.8 10H10M14 10h1.2" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.5 8.5-2 5-5 2 2-5Z" />
    </>
  ),
  fileCheck: (
    <>
      <path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5Z" />
      <path d="M14 3v4.5h4.5" />
      <path d="m9 14 2 2 4-4" />
    </>
  ),
};

export function Icon({ name, ...props }: Props & { name: IconName }) {
  return <Svg {...props}>{paths[name]}</Svg>;
}

export const Check = (p: Props) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
);

export const Cross = (p: Props) => (
  <Svg {...p}>
    <path d="m7 7 10 10M17 7 7 17" />
  </Svg>
);

export const Arrow = (p: Props) => (
  <Svg {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Svg>
);

export const Phone = (p: Props) => (
  <Svg {...p}>
    <path d="M5 4h3.5l1.5 4-2 1.5a11 11 0 0 0 6.5 6.5l1.5-2 4 1.5V19a1.5 1.5 0 0 1-1.5 1.5A16.5 16.5 0 0 1 3.5 5.5 1.5 1.5 0 0 1 5 4Z" />
  </Svg>
);

export const Fax = (p: Props) => (
  <Svg {...p}>
    <path d="M7 9V3.5h8l2 2V9" />
    <rect x="3.5" y="9" width="17" height="8.5" rx="1.5" />
    <path d="M7 14.5h10v6H7Z" />
  </Svg>
);

export const Mail = (p: Props) => (
  <Svg {...p}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="m3.5 7 8.5 6.5L20.5 7" />
  </Svg>
);

export const Pin = (p: Props) => (
  <Svg {...p}>
    <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </Svg>
);

export const Facebook = (p: Props) => (
  <Svg {...p}>
    <path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.5L17 11h-3V9a.5.5 0 0 1 .5-.5Z" />
  </Svg>
);

export const Camera = (p: Props) => (
  <Svg {...p}>
    <path d="M4 8.5A1.5 1.5 0 0 1 5.5 7h2l1.5-2h6L16.5 7h2A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5Z" />
    <circle cx="12" cy="13" r="3.3" />
  </Svg>
);

export const Star = ({ className, size = 18 }: Props) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="m12 3 2.7 5.6 6.1.8-4.5 4.2 1.1 6.1L12 16.8l-5.4 2.9 1.1-6.1L3.2 9.4l6.1-.8Z"
    />
  </svg>
);

export const QuoteMark = ({ className }: Props) => (
  <svg className={className} viewBox="0 0 64 48" aria-hidden="true" focusable="false">
    <path
      fill="currentColor"
      d="M0 48V28C0 12.5 7.6 3.2 22.8 0l3 6.3C17.5 9 13.6 14 13.2 21.5H26V48Zm38 0V28c0-15.5 7.6-24.8 22.8-28l3 6.3C55.5 9 51.6 14 51.2 21.5H64V48Z"
    />
  </svg>
);
