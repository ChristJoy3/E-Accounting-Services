import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Camera } from "./Icons";

/**
 * Duotone image slot. Drop a photo at public/images/<file> and it is used
 * automatically (with the olive/cream duotone treatment); until then a clearly
 * marked placeholder is shown.
 */
export function Photo({
  file,
  alt,
  placeholder,
  className = "",
  sizes = "(min-width: 1024px) 50vw, 100vw",
  parallax = false,
  monogram,
  natural = false,
}: {
  file?: string;
  alt: string;
  placeholder: string;
  className?: string;
  sizes?: string;
  parallax?: boolean;
  monogram?: string;
  /** Skip the duotone (used for team portraits). */
  natural?: boolean;
}) {
  const exists =
    !!file && fs.existsSync(path.join(process.cwd(), "public", "images", file));

  return (
    <figure className={`photo ${natural ? "photo--natural" : ""} ${className}`} data-reveal data-cursor="view">
      <div className="photo__inner" data-parallax={parallax ? "" : undefined}>
        {exists ? (
          <Image
            src={`/images/${file}`}
            alt={alt}
            fill
            sizes={sizes}
            loading="lazy"
            className="photo__img"
          />
        ) : (
          <div className="photo__placeholder" role="img" aria-label={`Placeholder: ${alt}`}>
            <span className="blob blob--a" />
            <span className="blob blob--b" />
            {monogram ? (
              <span className="photo__monogram" aria-hidden="true">
                {monogram}
              </span>
            ) : (
              <Camera size={32} />
            )}
            <span className="photo__label">{placeholder}</span>
          </div>
        )}
      </div>
    </figure>
  );
}
