import {
  ISO_SHA256,
  ISO_URL,
  MANUAL_URL,
  OMARCHY_URL,
  VERSION_BADGE,
} from "@/lib/features";

export function CtaBand() {
  return (
    <section className="shell cta-band">
      <div className="cta-card">
        <p className="pill" style={{ display: "inline-flex" }}>
          <span className="pill__dot" aria-hidden />
          {VERSION_BADGE}
        </p>

        <h2 className="cta-card__title">
          Leave the overlapping windows. Keep the muscle memory.
        </h2>

        <p className="cta-card__body">
          Arch-based, Hyprland tiling, one Quickshell — omarchy-shell. Super is
          waiting where Cmd and Win used to sit. The official ISO is x86-64 only,
          and Secure Boot and/or TPM must be turned off before you flash. Root
          snapshots roll back the system, not your <code>/home</code>.
        </p>

        <div className="cta-card__actions">
          <a
            href={OMARCHY_URL}
            target="_blank"
            rel="noreferrer"
            className="omarchy-button omarchy-button--primary"
          >
            <span>Get Omarchy</span>
          </a>
          <a href={ISO_URL} className="omarchy-button">
            <span>omarchy-4.0.1.iso</span>
          </a>
          <a
            href={MANUAL_URL}
            target="_blank"
            rel="noreferrer"
            className="omarchy-button"
          >
            <span>Coming from Mac or Windows</span>
          </a>
        </div>

        <p className="cta-card__hash">
          <b>SHA256</b> {ISO_SHA256}
        </p>
      </div>
    </section>
  );
}
