import { createContext, useContext } from "react";
import type { UtilitiesMode } from "./layoutConstants";

export type CaseLayoutValue = {
  summaryCollapsed: boolean;
  utilitiesExpanded: boolean;
  utilitiesMode: UtilitiesMode;
  onCollapseSummary: () => void;
  onExpandSummary: () => void;
  onToggleUtilities: () => void;
};

const fallback: CaseLayoutValue = {
  summaryCollapsed: false,
  utilitiesExpanded: false,
  utilitiesMode: "rail",
  onCollapseSummary: () => {},
  onExpandSummary: () => {},
  onToggleUtilities: () => {},
};

export const CaseLayoutContext = createContext<CaseLayoutValue>(fallback);

export function useCaseLayout() {
  return useContext(CaseLayoutContext);
}

export type { UtilitiesMode };
