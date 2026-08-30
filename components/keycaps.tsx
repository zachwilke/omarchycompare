import { Fragment } from "react";
import { cn } from "@/lib/utils";

/**
 * Renders a binding string like "Super + Ctrl + A · Super + Home" as keycaps.
 * " + " joins keys inside one chord; " · " separates alternate chords.
 */
export function Keycaps({
  keys,
  className,
}: {
  keys: string;
  className?: string;
}) {
  const chords = keys.split(" · ");

  return (
    <span className={cn("keycaps", className)}>
      {chords.map((chord, chordIndex) => (
        <Fragment key={chord}>
          {chordIndex > 0 && (
            <span className="keycaps__sep" aria-hidden>
              ·
            </span>
          )}
          {chord.split(" + ").map((key, keyIndex) => (
            <Fragment key={`${chord}-${key}`}>
              {keyIndex > 0 && (
                <span className="keycaps__plus" aria-hidden>
                  +
                </span>
              )}
              <kbd className="keycap">{key}</kbd>
            </Fragment>
          ))}
        </Fragment>
      ))}
    </span>
  );
}
