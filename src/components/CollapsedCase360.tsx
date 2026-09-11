import { useState } from "react";
import HistorySection from "./HistorySection";
import PersonsObjectsSection from "./PersonsObjectsSection";
import MissionsSection from "./MissionsSection";
import FinancialsSection from "./FinancialsSection";
import DocumentsSection from "./DocumentsSection";
import CaseLogSection from "./CaseLogSection";
import CaseHierarchySection from "./CaseHierarchySection";
import SummaryNote from "./SummaryNote";
import { EAFContent, FNOLContent, RDRContent, PriorLossesContent } from "./TabContent";

const poppins = { fontFamily: '"Poppins:SemiBold",sans-serif', fontWeight: 600 };
const roboto = { fontFamily: '"Roboto_flex:Regular",sans-serif' };
const robotoLabel = { ...roboto, fontWeight: 600, fontVariationSettings: '"wght" 600' as const };
const robotoBold = { fontFamily: '"Roboto_flex:Bold",sans-serif', fontWeight: 700 };

const CASE360_TABS = [
  "Overview",
  "History",
  "Persons & Objects",
  "Missions",
  "Financials",
  "Summary",
  "Documents",
  "Case Log",
  "Case Hierarchy",
] as const;
type Case360Tab = (typeof CASE360_TABS)[number];

const TAB_LABEL: Record<Case360Tab, string> = {
  Overview: "Overview",
  History: "History",
  "Persons & Objects": "Persons & Objects",
  Missions: "Missions",
  Financials: "Financials",
  Summary: "Summary",
  Documents: "Documents",
  "Case Log": "Case log",
  "Case Hierarchy": "Case Hierarchy",
};

const OVERVIEW_TABS = ["General", "EAF", "FNOL", "RDR", "Prior Losses"] as const;
type OverviewTab = (typeof OVERVIEW_TABS)[number];

function FieldRow({ label, value, blue }: { label: string; value: string; blue?: boolean }) {
  return (
    <div className="flex flex-col py-[5px]">
      <p className="text-[13px] leading-normal" style={{ ...robotoLabel, color: "rgba(0,29,84,0.55)" }}>{label}</p>
      <p className="text-[14px] leading-normal" style={{ ...roboto, color: blue ? "#3f57e4" : "#001d54" }}>{value}</p>
    </div>
  );
}

function GeneralContent() {
  return (
    <div className="flex gap-6 pb-4 flex-col sm:flex-row w-full">
      <div className="flex-1 min-w-0 px-5 flex flex-col">
        <FieldRow label="Coverage" value="R.C. Auto, Dégâts Matériels Top Omnium" />
        <FieldRow label="Loss cause" value="TCCAUS:TCCAUS.700Collision avec un autre véhicule" />
        <FieldRow label="No of counterparties" value="1" blue />
        <FieldRow label="Country" value="TCPYPL:TCPYPL.BBelgique" />
        <FieldRow label="Loss Place" value=", 9999 Onbekende Lokaliteit" />
        <FieldRow label="Recourse" value="TORECO:TORECO.3Possible" />
        <FieldRow label="Reason of recourse" value="—" />
        <FieldRow label="Injuries" value="No" />
      </div>
      <div className="flex-1 min-w-0 px-5 flex flex-col">
        <FieldRow label="Severity" value="TCGRVT:TCGRVT.1Cas benin" />
        <FieldRow label="Police Report" value="No" />
        <FieldRow label="Cel" value="AG TEAM REGION SUD, 02/6644001" blue />
        <FieldRow label="Owner" value="Grebeude Vanessa, 02/6644908" />
        <FieldRow label="Product Code" value="5001 - Toerisme en zaken of gemengd gebruik" />
        <FieldRow label="Date opened" value="27/08/2026" />
        <FieldRow label="Communication channel" value="TCSUPT:TCSUPT.96E-RDR" />
      </div>
    </div>
  );
}

const OVERVIEW_CONTENT: Record<OverviewTab, React.ReactNode> = {
  General: <GeneralContent />,
  EAF: <EAFContent />,
  FNOL: <FNOLContent />,
  RDR: <RDRContent />,
  "Prior Losses": <PriorLossesContent />,
};

function CosmoTab({
  selected,
  onClick,
  children,
  roundedStart,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
  roundedStart?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative px-4 min-h-[42px] cursor-pointer shrink-0 outline-none border-0 text-[14px] whitespace-nowrap ${roundedStart && selected ? "rounded-tl-[16px]" : ""}`}
      style={{
        ...(selected ? robotoBold : roboto),
        color: selected ? "#001d54" : "#001d54",
        background: selected ? "#ffffff" : "transparent",
        boxShadow: selected ? "inset 0 -2.5px 0 #3f57e4" : "none",
      }}
    >
      {children}
    </button>
  );
}

function OverviewPanel() {
  const [active, setActive] = useState<OverviewTab>("General");
  return (
    <div className="border border-[#d8dce8] rounded-[10px] overflow-hidden bg-white h-auto">
      <div className="flex items-stretch bg-[#f3f4fa] border-b border-[#d8dce8]">
        {OVERVIEW_TABS.map((tab) => (
          <CosmoTab key={tab} selected={tab === active} onClick={() => setActive(tab)}>
            {tab}
          </CosmoTab>
        ))}
      </div>
      <div className="w-full pt-4">{OVERVIEW_CONTENT[active]}</div>
    </div>
  );
}

function EmptyTab({ title }: { title: string }) {
  return (
    <div>
      <p className="text-[17.7px] text-[#001d54] pb-3 mb-3 border-b border-[#cfcfcf]" style={poppins}>
        {title}
      </p>
      <p className="text-[rgba(0,29,84,0.4)] text-[14px] mt-2" style={roboto}>
        {title} content coming soon
      </p>
    </div>
  );
}

export default function CollapsedCase360() {
  const [activeTab, setActiveTab] = useState<Case360Tab>("Overview");

  function renderContent() {
    if (activeTab === "Overview") return <OverviewPanel />;
    if (activeTab === "History") return <HistorySection embedded />;
    if (activeTab === "Persons & Objects") return <PersonsObjectsSection embedded />;
    if (activeTab === "Missions") return <MissionsSection embedded />;
    if (activeTab === "Financials") return <FinancialsSection embedded />;
    if (activeTab === "Summary") return <SummaryNote embedded />;
    if (activeTab === "Documents") return <DocumentsSection embedded />;
    if (activeTab === "Case Log") return <CaseLogSection embedded />;
    if (activeTab === "Case Hierarchy") return <CaseHierarchySection embedded />;
    return <EmptyTab title={TAB_LABEL[activeTab]} />;
  }

  return (
    <div className="bg-white rounded-[16px] w-full overflow-hidden">
      <div className="flex items-stretch overflow-x-auto bg-[#f3f4fa] rounded-t-[16px]" data-name="Horizontal tabs">
        {CASE360_TABS.map((tab, i) => (
          <CosmoTab
            key={tab}
            selected={tab === activeTab}
            onClick={() => setActiveTab(tab)}
            roundedStart={i === 0}
          >
            {TAB_LABEL[tab]}
          </CosmoTab>
        ))}
      </div>

      <div className={activeTab === "Case Hierarchy" ? "px-5 pt-2 pb-4" : "px-5 pt-4 pb-5"}>
        {renderContent()}
      </div>
    </div>
  );
}
