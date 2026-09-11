import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";

const roboto = { fontFamily: '"Roboto_flex:Regular", sans-serif' };
const robotoSemi = {
  fontFamily: '"Roboto_flex:Semi-bold", sans-serif',
  fontWeight: 600,
  fontVariationSettings: '"wght" 600' as const,
};

const MEMO_TYPES = ["Memo", "Internal Note", "Phone Interaction", "Email Interaction"] as const;
type MemoType = (typeof MEMO_TYPES)[number];

function CloseX({ className }: { className?: string }) {
  return (
    <svg className={className || "size-[16px]"} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg className="size-[16px] shrink-0 text-[#4c5a67]" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M4 6.2L8 10.2L12 6.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="size-[14px] shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M3.2 8.2L6.4 11.4L12.8 4.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AddMemoModal({ onClose }: { onClose: () => void }) {
  const [memoType, setMemoType] = useState<MemoType>("Memo");
  const [typeOpen, setTypeOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [subjectFocused, setSubjectFocused] = useState(false);
  const typeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    const onPointer = (event: MouseEvent) => {
      if (typeRef.current && !typeRef.current.contains(event.target as Node)) {
        setTypeOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, []);

  const fieldLabel: CSSProperties = {
    ...robotoSemi,
    fontSize: 11,
    letterSpacing: "0.08em",
    color: "#8a94a6",
    textTransform: "uppercase",
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-6"
      data-name="Add memo overlay"
    >
      <button
        type="button"
        aria-label="Dismiss overlay"
        className="absolute inset-0 bg-[rgba(16,24,40,0.45)] border-0 cursor-default"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-memo-title"
        className="relative z-10 w-[min(640px,calc(100vw-48px))] bg-white rounded-[12px] shadow-[0_12px_40px_rgba(0,29,84,0.18)]"
        data-name="Add memo dialog"
      >
        <div className="flex items-center justify-between px-6 pt-5 pb-4">
          <h2 id="add-memo-title" className="m-0 text-[22px] leading-none text-[#1a1a1a]" style={robotoSemi}>
            Add Memo
          </h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="size-8 inline-flex items-center justify-center rounded-[6px] text-[#6b7280] bg-transparent border-0 cursor-pointer hover:bg-[#f3f4f6]"
          >
            <CloseX />
          </button>
        </div>

        <div className="px-6 pb-2 flex flex-col gap-4">
          <div className="flex flex-col gap-[6px]" ref={typeRef}>
            <label style={fieldLabel}>Type</label>
            <div className="relative">
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={typeOpen}
                onClick={() => setTypeOpen((open) => !open)}
                className="w-full h-[42px] px-3 flex items-center justify-between rounded-[6px] bg-white text-[14px] text-[#001d54] cursor-pointer"
                style={{ ...roboto, border: "1px solid #cfd6e0" }}
              >
                <span>{memoType}</span>
                <ChevronDown />
              </button>
              {typeOpen && (
                <ul
                  role="listbox"
                  className="absolute left-0 right-0 top-[calc(100%+4px)] z-20 py-1 m-0 list-none bg-white rounded-[8px] shadow-[0_8px_24px_rgba(0,29,84,0.16)] overflow-hidden"
                >
                  {MEMO_TYPES.map((option) => {
                    const selected = option === memoType;
                    return (
                      <li key={option} role="none">
                        <button
                          type="button"
                          role="option"
                          aria-selected={selected}
                          onClick={() => {
                            setMemoType(option);
                            setTypeOpen(false);
                          }}
                          className="w-full flex items-center gap-2 px-3 py-[10px] text-left text-[14px] border-0 cursor-pointer"
                          style={{
                            ...roboto,
                            background: selected ? "#5b9cff" : "transparent",
                            color: selected ? "#ffffff" : "#001d54",
                          }}
                        >
                          {selected ? <CheckIcon /> : <span className="size-[14px] shrink-0" />}
                          {option}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="memo-subject" style={fieldLabel}>
              Subject *
            </label>
            <input
              id="memo-subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              onFocus={() => setSubjectFocused(true)}
              onBlur={() => setSubjectFocused(false)}
              placeholder="Enter memo subject..."
              className="h-[42px] px-3 rounded-[6px] text-[14px] text-[#001d54] outline-none"
              style={{
                ...roboto,
                border: subjectFocused ? "1.5px solid #3f57e4" : "1px solid #cfd6e0",
              }}
            />
          </div>

          <div className="flex flex-col gap-[6px]">
            <label htmlFor="memo-content" style={fieldLabel}>
              Content
            </label>
            <textarea
              id="memo-content"
              value={content}
              onChange={(event) => setContent(event.target.value)}
              placeholder="Enter memo details..."
              rows={5}
              className="px-3 py-2 rounded-[6px] text-[14px] text-[#001d54] outline-none resize-y min-h-[110px]"
              style={{ ...roboto, border: "1px solid #cfd6e0" }}
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 px-6 py-4 mt-2" style={{ borderTop: "1px solid #e6eaf0" }}>
          <button
            type="button"
            onClick={onClose}
            className="h-[32px] px-2 text-[14px] text-[#001d54] bg-transparent border-0 cursor-pointer"
            style={roboto}
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onClose}
            className="h-[32px] px-4 rounded-[4px] text-[14px] text-[#001d54] bg-[#c5e8b8] border-0 cursor-pointer"
            style={robotoSemi}
          >
            Save
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
