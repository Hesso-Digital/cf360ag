const NAVY = "#001D54";

/** Keyboard / spreadsheet grid — Cosmo table toolbar. */
export function KeyboardIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        fill={NAVY}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M4 8v16h24V8z"
      />
      <path
        fill={NAVY}
        d="M10 22H6v-2h4zm8 0h-6v-2h6zm8 0h-6v-2h6zM8 18H6v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zM8 14H6v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2z"
      />
    </svg>
  );
}

/** Magnifying glass — Cosmo table toolbar search glyph. */
export function SearchIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        fill={NAVY}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 27.586 21.448 20.034a11.017 11.017 0 1 0-1.414 1.414L27.586 29zM4 13a9 9 0 1 1 9 9 9.01 9.01 0 0 1-9-9"
      />
    </svg>
  );
}

/** Diagonal expand arrows (NE / SW). */
export function ExpandArrowsIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <path
        fill={NAVY}
        d="M20 2h10v10h-2V5.41L18 15.41 16.59 14 26.59 4H20V2zM2 20v10h10v-2H5.41L16 17.41 14.59 16 4 26.59V20H2z"
      />
    </svg>
  );
}

/** Vertical kebab — three rounded squares. */
export function KebabIcon({ size = 16 }: { size?: number }) {
  const s = 4.2;
  const x = 16 - s / 2;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <rect x={x} y="4.5" width={s} height={s} rx="0.8" fill={NAVY} />
      <rect x={x} y="13.9" width={s} height={s} rx="0.8" fill={NAVY} />
      <rect x={x} y="23.3" width={s} height={s} rx="0.8" fill={NAVY} />
    </svg>
  );
}

function IconButton({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      title={title}
      className="size-[18px] flex items-center justify-center cursor-pointer bg-transparent border-0 p-0 text-[#001d54] hover:opacity-70 transition-opacity"
    >
      {children}
    </button>
  );
}

/** Shared 4-icon table toolbar: search, keyboard, expand, kebab. */
export default function TableActionToolbar() {
  return (
    <div className="flex items-center gap-[10px] shrink-0" data-name="Table action toolbar">
      <IconButton title="Search">
        <SearchIcon />
      </IconButton>
      <IconButton title="Table">
        <KeyboardIcon />
      </IconButton>
      <IconButton title="Expand">
        <ExpandArrowsIcon />
      </IconButton>
      <IconButton title="More">
        <KebabIcon />
      </IconButton>
    </div>
  );
}
