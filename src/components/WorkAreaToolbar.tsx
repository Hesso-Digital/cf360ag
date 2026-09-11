import { useEffect, useRef, useState } from "react";
import AddMemoModal from "@/components/AddMemoModal";

const roboto = { fontFamily: '"Roboto_flex:Regular", sans-serif' };
const robotoSemi = {
  fontFamily: '"Roboto_flex:Semi-bold", sans-serif',
  fontWeight: 600,
  fontVariationSettings: '"wght" 600' as const,
};

const EXTERNAL_LINKS = [
  "AGIS",
  "EDMS",
  "PDF contract",
  "Opening Letter",
  "eRDR",
  "OutboundCall",
  "MisTIC",
] as const;

const PRESET_TAGS = [
  "Fraude",
  "Plainte",
  "Recours",
  "Intoxication",
  "Perte totale",
  "Tempête conventionnelle",
  "Rapport Médical",
  "Contre-expert",
  "Inspection",
  "Proc judic",
] as const;

const INITIAL_TAGS: string[] = ["Perte totale", "Inspection"];

function ExternalLinkIcon() {
  return (
    <svg className="size-[13px] shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M6.2 3.4H3.6A1.1 1.1 0 0 0 2.5 4.5v7.9A1.1 1.1 0 0 0 3.6 13.5h7.9a1.1 1.1 0 0 0 1.1-1.1V9.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M8.8 2.5h4.7V7.2M13.3 2.7L7.6 8.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg className="size-[12px] shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M1.8 1.8h5.4L14.2 8.8l-5.4 5.4L1.8 7.2V1.8Z" fill="currentColor" opacity="0.18" />
      <path
        d="M1.8 1.8h5.4L14.2 8.8l-5.4 5.4L1.8 7.2V1.8Z"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <circle cx="5" cy="5" r="1.15" fill="currentColor" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="size-[10px] shrink-0" viewBox="0 0 10 10" fill="none" aria-hidden>
      <path d="M1.5 1.5l7 7M8.5 1.5l-7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="size-[12px] shrink-0" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="size-[12px] shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3.2 8.2L6.4 11.4L12.8 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TagChip({ label, onRemove }: { label: string; onRemove: (label: string) => void }) {
  return (
    <span
      className="inline-flex items-center gap-[5px] h-[26px] pl-[8px] pr-[6px] rounded-full text-[12.5px] leading-none text-[#003781] whitespace-nowrap bg-[#e0eaf8]"
      style={{ ...roboto, border: "1px solid rgba(58,83,233,0.16)" }}
    >
      <TagIcon />
      {label}
      <button
        type="button"
        aria-label={`Remove ${label}`}
        onClick={() => onRemove(label)}
        className="inline-flex items-center justify-center size-[16px] rounded-full text-[#003781] cursor-pointer bg-transparent border-0 p-0 hover:bg-[rgba(0,55,129,0.12)]"
      >
        <CloseIcon />
      </button>
    </span>
  );
}

export default function WorkAreaToolbar() {
  const [tags, setTags] = useState<string[]>(INITIAL_TAGS);
  const [tagPickerOpen, setTagPickerOpen] = useState(false);
  const [memoOpen, setMemoOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!tagPickerOpen) return;
    const onPointer = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setTagPickerOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setTagPickerOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      window.removeEventListener("keydown", onKey);
    };
  }, [tagPickerOpen]);

  const removeTag = (label: string) => {
    setTags((current) => current.filter((tag) => tag !== label));
  };

  const addTag = (label: string) => {
    setTags((current) => (current.includes(label) ? current : [...current, label]));
  };

  return (
    <div
      className="relative z-20 flex flex-col gap-2 w-full min-w-0 shrink-0 bg-white rounded-[16px] px-4 py-3"
      data-name="Work area toolbar"
    >
      <div className="flex flex-wrap gap-2 min-w-0 bg-[#eef0f8] rounded-[12px] px-2 py-2">
        {EXTERNAL_LINKS.map((label) => (
          <a
            key={label}
            href="#"
            onClick={(event) => event.preventDefault()}
            className="inline-flex items-center gap-[6px] h-[28px] px-[10px] rounded-full bg-white text-[#274478] text-[12.5px] leading-none whitespace-nowrap no-underline"
            style={{
              ...roboto,
              border: "1px solid #93a4c4",
            }}
          >
            <ExternalLinkIcon />
            {label}
          </a>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 min-w-0">
        <div className="flex flex-wrap items-center gap-2 min-w-0 flex-1">
          {tags.slice(0, -1).map((tag) => (
            <TagChip key={tag} label={tag} onRemove={removeTag} />
          ))}
          <div className="inline-flex items-center gap-2 max-w-full">
            {tags.length > 0 && <TagChip label={tags[tags.length - 1]} onRemove={removeTag} />}
            <div className="relative" ref={pickerRef}>
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={tagPickerOpen}
              onClick={() => setTagPickerOpen((open) => !open)}
              className="inline-flex items-center h-[26px] px-[2px] text-[12.5px] leading-none text-[#001d54] whitespace-nowrap cursor-pointer bg-transparent border-0"
              style={roboto}
            >
              + Add tag
            </button>

            {tagPickerOpen && (
              <div
                className="absolute right-0 top-[calc(100%+8px)] z-30 w-[320px] bg-white rounded-[8px] shadow-[0_8px_28px_rgba(0,29,84,0.18)] overflow-hidden"
                data-name="Edit tags"
                style={{ border: "1px solid #d8dee8" }}
              >
                <div className="flex items-center justify-between px-4 h-[44px]" style={{ borderBottom: "1px solid #e6eaf0" }}>
                  <p className="m-0 text-[16px] text-[#1a1a1a]" style={robotoSemi}>
                    Edit tags
                  </p>
                  <button
                    type="button"
                    aria-label="Close tag picker"
                    onClick={() => setTagPickerOpen(false)}
                    className="size-7 inline-flex items-center justify-center text-[#3f57e4] bg-transparent border-0 cursor-pointer"
                  >
                    <svg className="size-[14px]" viewBox="0 0 16 16" fill="none" aria-hidden>
                      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <div className="px-4 py-3">
                  <p className="m-0 mb-2 text-[13px] text-[#4c5a67]" style={roboto}>
                    Tags
                  </p>
                  <ul role="listbox" className="m-0 p-0 list-none max-h-[240px] overflow-auto">
                    {PRESET_TAGS.map((label) => {
                      const selected = tags.includes(label);
                      return (
                        <li key={label} role="none">
                          <button
                            type="button"
                            role="option"
                            aria-selected={selected}
                            disabled={selected}
                            onClick={() => addTag(label)}
                            className="w-full flex items-center gap-2 px-1 py-[6px] text-left text-[13px] border-0"
                            style={{
                              ...roboto,
                              color: selected ? "#8a94a6" : "#1a1a1a",
                              background: "transparent",
                              cursor: selected ? "default" : "pointer",
                            }}
                          >
                            {selected ? <CheckIcon /> : <span className="size-[12px] shrink-0" />}
                            {label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMemoOpen(true)}
          className="inline-flex items-center gap-[6px] h-[30px] px-[12px] rounded-[8px] bg-[#00a651] text-white text-[13px] leading-none whitespace-nowrap cursor-pointer border-0 shrink-0"
          style={roboto}
        >
          <PlusIcon />
          Add memo
        </button>
      </div>

      {memoOpen && <AddMemoModal onClose={() => setMemoOpen(false)} />}
    </div>
  );
}
