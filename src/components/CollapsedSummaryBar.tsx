import { useEffect, useId, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import svgPaths from "@/imports/CaseView/svg-z90n69mqgb";

const poppins = { fontFamily: '"Poppins:SemiBold", sans-serif', fontWeight: 600 };
const roboto = { fontFamily: '"Roboto_flex:Regular", sans-serif' };
const robotoSemi = { fontFamily: '"Roboto_flex:Semi-bold", sans-serif', fontWeight: 600, fontVariationSettings: '"wght" 600' as const };
const menuItemFont = {
  fontFamily: '"Roboto_flex:Regular", sans-serif',
  fontWeight: 400,
  fontVariationSettings: '"wght" 400' as const,
};

const CLAIM_ACTIONS = [
  "Resolve Case",
  "Transfer Claim",
  "Transfer Claim and Manage Skills",
  "Create New Claim Unit",
  "Reopen Claim File",
  "Close Claim File",
  "Open Providis Claim",
] as const;

const SUMMARY_FIELDS = [
  { label: "Work Status", value: "OPEN" },
  { label: "Priority Flag", value: "Yes", blue: true },
  { label: "ClaimID", value: "0000389534323/03", blue: true },
  { label: "Contract N", value: "--" },
  { label: "Policy Holder", value: "--" },
  { label: "Risk Involved", value: "--" },
];

function CaseIcon() {
  return (
    <div className="bg-[#7fb3f5] relative rounded-[8px] shadow-[-4px_4px_8px_0px_rgba(0,0,0,0.2)] shrink-0 size-[32px] overflow-hidden">
      <div
        className="flex items-center justify-center size-full"
        style={{
          backgroundImage:
            "linear-gradient(42.77deg, rgba(0, 8, 23, 0.8) 32%, rgba(0, 29, 84, 0) 92%)",
        }}
      >
        <svg className="size-[18px]" fill="none" viewBox="0 0 18 16.56">
          <path clipRule="evenodd" d={svgPaths.p104a0f00} fill="white" fillRule="evenodd" />
          <path d={svgPaths.p1b1fdd80} fill="white" />
        </svg>
      </div>
    </div>
  );
}

function Field({ label, value, blue }: { label: string; value: string; blue?: boolean }) {
  return (
    <div className="flex flex-col gap-[4px] items-start shrink-0">
      <p className="text-[14px] leading-normal text-[#001d54] whitespace-nowrap" style={robotoSemi}>
        {label}
      </p>
      <p
        className="text-[14px] leading-normal whitespace-nowrap"
        style={{ ...roboto, color: blue ? "#3a53e9" : "#001d54" }}
      >
        {value}
      </p>
    </div>
  );
}

function placeClaimMenu(button: HTMLButtonElement, menu: HTMLElement): CSSProperties {
  const buttonRect = button.getBoundingClientRect();
  const width = menu.offsetWidth;
  const top = buttonRect.bottom + 4;
  let rightEdge = buttonRect.right;
  if (rightEdge - width < 8) rightEdge = width + 8;
  if (rightEdge > window.innerWidth - 8) rightEdge = window.innerWidth - 8;
  return {
    position: "fixed",
    top,
    right: window.innerWidth - rightEdge,
    zIndex: 60,
  };
}

export default function CollapsedSummaryBar({ onExpand }: { onExpand: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const [menuStyle, setMenuStyle] = useState<CSSProperties>({
    position: "fixed",
    top: 0,
    right: 8,
    zIndex: 60,
    visibility: "hidden",
  });

  useLayoutEffect(() => {
    if (!menuOpen) return;
    const button = buttonRef.current;
    const menu = menuRef.current;
    if (!button || !menu) return;
    const place = () => {
      if (!buttonRef.current || !menuRef.current) return;
      setMenuStyle(placeClaimMenu(buttonRef.current, menuRef.current));
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (menuRootRef.current?.contains(target) || menuRef.current?.contains(target)) return;
      setMenuOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <div
      className="relative z-20 w-full h-[64px] bg-white rounded-bl-[16px] shrink-0 overflow-visible"
      data-name="Collapsed summary bar"
    >
      <div className="flex items-center h-full pl-4 pr-[15px] gap-4 min-w-0">
        <div className="flex items-center gap-[10px] shrink-0 w-[280px] min-w-[240px] pr-4 self-stretch">
          <div className="flex items-center gap-[10px] min-w-0 h-full border-r border-[rgba(0,29,84,0.7)] pr-4 w-full">
            <CaseIcon />
            <div className="flex flex-col items-start min-w-0">
              <p className="text-[19px] leading-normal text-[#001d54] whitespace-nowrap" style={poppins}>
                Claim File
              </p>
              <p className="text-[12px] leading-normal text-[#001d54] whitespace-nowrap" style={roboto}>
                Contact • CF-1403562
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6 flex-1 min-w-0 overflow-x-auto py-[4px]">
          {SUMMARY_FIELDS.map((field) => (
            <Field key={field.label} {...field} />
          ))}
        </div>

        <div ref={menuRootRef} className="relative flex items-center shrink-0">
          <button
            type="button"
            className="size-8 rounded-[8px] flex items-center justify-center cursor-pointer bg-transparent border-0"
            title="Edit"
          >
            <svg className="size-[18px]" fill="none" viewBox="0 0 13.4139 13.4145">
              <path clipRule="evenodd" d={svgPaths.p2b203300} fill="#001D54" fillRule="evenodd" />
            </svg>
          </button>
          <button
            ref={buttonRef}
            type="button"
            className="size-8 rounded-[8px] flex items-center justify-center cursor-pointer border-0 bg-transparent outline-none focus-visible:outline-none"
            title="More actions"
            aria-label="More actions"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="size-[18px]" fill="none" viewBox="0 0 2.82825 13.4488">
              <path clipRule="evenodd" d={svgPaths.p27ad6300} fill="#001D54" fillRule="evenodd" />
            </svg>
          </button>
          {menuOpen &&
            createPortal(
              <div
                ref={menuRef}
                id={menuId}
                role="menu"
                aria-label="Claim actions"
                style={menuStyle}
                className="flex w-max flex-col items-stretch bg-white p-0 rounded-[4px] shadow-[0px_2px_24px_rgba(5,5,5,0.3)]"
              >
                {CLAIM_ACTIONS.map((label) => (
                  <button
                    key={label}
                    type="button"
                    role="menuitem"
                    className="box-border h-[31px] w-full cursor-pointer whitespace-nowrap border-0 bg-transparent pt-[7px] pr-[10px] pb-[8px] pl-[8px] text-left text-[16px] leading-[16px] text-[#001d54] hover:bg-[#eef1f8] focus-visible:bg-[#eef1f8] focus-visible:outline-none"
                    style={menuItemFont}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </button>
                ))}
              </div>,
              document.body,
            )}
        </div>
      </div>

      <button
        type="button"
        onClick={onExpand}
        className="absolute z-30 left-[20px] top-[52px] size-6 bg-white rounded-[8px] flex items-center justify-center cursor-pointer border-0 shadow-[0_0_12.5px_rgba(0,0,0,0.25)]"
        title="Expand panel"
      >
        <svg width="8.46" height="4.69" viewBox="0 0 8.46 4.68975" fill="none">
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            fill="#3F57E4"
            d="M0 0H8.46L4.32225 4.68975L0.00075 0H0Z"
          />
        </svg>
      </button>
    </div>
  );
}
