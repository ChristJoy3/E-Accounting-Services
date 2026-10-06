import Image from "next/image";
import { site } from "@/lib/site";

// The supplied logo (public/logo.jpg) has its sage background baked in, so it
// sits in a rounded badge that reads cleanly on both light and dark sections.
export function Logo({ priority = false }: { priority?: boolean }) {
  return (
    <span className="logo__badge">
      <Image
        src="/logo.jpg"
        alt={site.name}
        width={298}
        height={88}
        priority={priority}
        className="logo__img"
      />
    </span>
  );
}
