/** White document/list bars — Cosmo letter tile glyph. */
export function LetterGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x="6" y="6" width="20" height="3.2" rx="1" fill="white" />
      <rect x="6" y="11.6" width="15" height="3.2" rx="1" fill="white" />
      <rect x="6" y="17.2" width="20" height="3.2" rx="1" fill="white" />
      <rect x="6" y="22.8" width="12" height="3.2" rx="1" fill="white" />
    </svg>
  );
}

/** White chain links — Cosmo link tile glyph. */
export function LinkGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        fill="white"
        d="M29.25 6.76a6 6 0 0 0-8.5 0l1.42 1.42a4 4 0 1 1 5.67 5.67l-5 5a4 4 0 0 1-5.67 0l-1.42-1.45-1.42 1.42 1.42 1.42a6 6 0 0 0 8.5 0l5-5a6 6 0 0 0 0-8.48Z"
      />
      <path
        fill="white"
        d="M4.75 25.24a6 6 0 0 0 8.5 0l-1.42-1.42a4 4 0 1 1-5.67-5.67l5-5a4 4 0 0 1 5.67 0l1.42 1.45 1.42-1.42-1.42-1.42a6 6 0 0 0-8.5 0l-5 5a6 6 0 0 0 0 8.48Z"
      />
    </svg>
  );
}

export function ExternalLinkGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 32 32" fill="none" aria-hidden className="shrink-0">
      <path fill="#3f57e4" d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9v2H6v20h20v-9h2v9a2 2 0 0 1-2 2Z" />
      <path fill="#3f57e4" d="M21 2v2h5.59L18 12.59 19.41 14 28 5.41V11h2V2h-9Z" />
    </svg>
  );
}

export function AttachmentTile({ type }: { type: "document" | "link" }) {
  const isLink = type === "link";
  return (
    <div
      className="size-8 rounded-[8px] flex items-center justify-center shrink-0"
      style={{ background: isLink ? "#4c5a67" : "#3f57e4" }}
      aria-hidden
    >
      {isLink ? <LinkGlyph /> : <LetterGlyph />}
    </div>
  );
}
