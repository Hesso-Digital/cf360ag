import type { ReactNode } from "react";
import { useCaseLayout } from "@/components/layout/CaseLayoutContext";
import UtilitiesPanel from "@/components/utilities/UtilitiesPanel";
import { UTILITIES_PANEL_WIDTH } from "./layoutConstants";

/**
 * Case body wrapper: nav + summary + work stay as children.
 * Overlay utilities are a right-docked layer that does not shrink the work area.
 */
export default function CaseViewLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 min-h-0 min-w-0 relative" data-name="Case body">
      {children}
      <UtilitiesOverlay />
    </div>
  );
}

/** In-flow utilities: collapsed rail or docked expanded panel. Overlay is rendered by CaseViewLayout. */
export function FlowUtilities({ rail }: { rail: ReactNode }) {
  const { utilitiesMode, onToggleUtilities } = useCaseLayout();
  if (utilitiesMode === "overlay") return null;
  if (utilitiesMode === "docked") {
    return (
      <div
        className="shrink-0 self-stretch relative"
        style={{ width: UTILITIES_PANEL_WIDTH }}
        data-name="Utilities docked"
      >
        <UtilitiesPanel onCollapse={onToggleUtilities} />
      </div>
    );
  }
  return <>{rail}</>;
}

function UtilitiesOverlay() {
  const { utilitiesMode, onToggleUtilities } = useCaseLayout();
  if (utilitiesMode !== "overlay") return null;
  return (
    <div
      className="absolute top-0 right-0 bottom-0 z-30 bg-[#e2e6f3] rounded-tl-[16px] rounded-bl-[16px] shadow-[-6px_0_24px_rgba(0,29,84,0.12)]"
      style={{ width: UTILITIES_PANEL_WIDTH }}
      data-name="Utilities overlay"
    >
      <UtilitiesPanel onCollapse={onToggleUtilities} />
    </div>
  );
}
