import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import CaseView from "@/imports/CaseView/index";
import DetailsCard from "@/components/DetailsCard";
import HistorySection from "@/components/HistorySection";
import PersonsObjectsSection from "@/components/PersonsObjectsSection";
import CollapsedCase360 from "@/components/CollapsedCase360";
import MissionsSection from "@/components/MissionsSection";
import FinancialsSection from "@/components/FinancialsSection";
import DocumentsSection from "@/components/DocumentsSection";
import CaseLogSection from "@/components/CaseLogSection";
import CaseHierarchySection from "@/components/CaseHierarchySection";
import SummaryNote from "@/components/SummaryNote";
import { CaseLayoutContext } from "@/components/layout/CaseLayoutContext";
import { resolveUtilitiesMode } from "@/components/layout/layoutConstants";

function readViewportWidth() {
  return window.innerWidth;
}

const SUMMARY_TABS = [
  "Overview",
  "History",
  "Persons & Objects",
  "Missions",
  "Financials",
  "Summary",
  "Documents",
  "Case Log",
  "Case Hierarchy",
];

type OverviewTab = "General" | "EAF" | "FNOL" | "RDR" | "Prior Losses";

export default function App() {
  const [activeLeftTab, setActiveLeftTab] = useState("Overview");
  const [activeOverviewTab, setActiveOverviewTab] = useState<OverviewTab>("General");
  const [detailsEl, setDetailsEl] = useState<Element | null>(null);
  const [summaryCollapsed, setSummaryCollapsed] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(readViewportWidth);
  const [utilitiesExpanded, setUtilitiesExpanded] = useState(false);

  const utilitiesMode = resolveUtilitiesMode(utilitiesExpanded, viewportWidth);

  useEffect(() => {
    const onResize = () => setViewportWidth(readViewportWidth());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const el = document.querySelector('[data-name="Details"]');
    setDetailsEl(el);
  }, [summaryCollapsed, utilitiesExpanded, utilitiesMode]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      let el: Element | null = e.target as Element;
      while (el) {
        if (el.tagName === "BUTTON") {
          const text = el.querySelector("p")?.textContent?.trim();
          if (text && SUMMARY_TABS.includes(text)) {
            setActiveLeftTab(text);
            return;
          }
        }
        if (el.getAttribute?.("data-name") === "Opportunities") {
          setActiveLeftTab("Overview");
          return;
        }
        el = el.parentElement;
      }
    };
    document.addEventListener("click", handle);
    return () => document.removeEventListener("click", handle);
  }, []);

  useEffect(() => {
    const root = document.querySelector('[data-name="Case View"]');
    if (!root) return;
    root.setAttribute("data-left-tab", activeLeftTab);

    root.querySelectorAll("button").forEach((btn) => {
      const text = btn.querySelector("p")?.textContent?.trim();
      if (text && SUMMARY_TABS.includes(text)) {
        btn.dataset.selected = String(text === activeLeftTab);
      }
    });

    const overviewDiv = root.querySelector('[data-name="Opportunities"]');
    if (overviewDiv) {
      (overviewDiv as HTMLElement).dataset.selected = String(activeLeftTab === "Overview");
    }
  }, [activeLeftTab, summaryCollapsed]);

  const portalContent = summaryCollapsed ? (
    <CollapsedCase360 />
  ) : activeLeftTab === "Overview" ? (
    <DetailsCard activeTab={activeOverviewTab} onTabChange={setActiveOverviewTab} />
  ) : activeLeftTab === "History" ? (
    <HistorySection />
  ) : activeLeftTab === "Persons & Objects" ? (
    <PersonsObjectsSection />
  ) : activeLeftTab === "Missions" ? (
    <MissionsSection />
  ) : activeLeftTab === "Financials" ? (
    <FinancialsSection />
  ) : activeLeftTab === "Summary" ? (
    <SummaryNote />
  ) : activeLeftTab === "Documents" ? (
    <DocumentsSection />
  ) : activeLeftTab === "Case Log" ? (
    <CaseLogSection />
  ) : activeLeftTab === "Case Hierarchy" ? (
    <CaseHierarchySection />
  ) : (
    <EmptySection title={activeLeftTab} />
  );

  return (
    <CaseLayoutContext.Provider
      value={{
        summaryCollapsed,
        utilitiesExpanded,
        utilitiesMode,
        onCollapseSummary: () => setSummaryCollapsed(true),
        onExpandSummary: () => setSummaryCollapsed(false),
        onToggleUtilities: () => setUtilitiesExpanded((v) => !v),
      }}
    >
      <div className="h-screen w-full overflow-hidden min-w-[1024px] relative">
        <CaseView />

        {detailsEl &&
          createPortal(
            <div className="details-portal w-full">{portalContent}</div>,
            detailsEl
          )}
      </div>
    </CaseLayoutContext.Provider>
  );
}

function EmptySection({ title }: { title: string }) {
  return (
    <div className="bg-white rounded-[16px] p-5">
      <p
        className="text-[#001d54] text-[17.7px] pb-3 mb-3 border-b border-[#cfcfcf]"
        style={{ fontFamily: '"Poppins:SemiBold", sans-serif', fontWeight: 600 }}
      >
        {title}
      </p>
      <p
        className="text-[rgba(0,29,84,0.4)] text-[14px] mt-4"
        style={{ fontFamily: '"Roboto_flex:Regular", sans-serif' }}
      >
        Content coming soon
      </p>
    </div>
  );
}
