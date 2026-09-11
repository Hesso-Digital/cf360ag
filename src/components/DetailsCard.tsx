import { EAFContent, FNOLContent, RDRContent, PriorLossesContent } from "./TabContent";

const TABS = ["General", "EAF", "FNOL", "RDR", "Prior Losses"] as const;
type Tab = (typeof TABS)[number];

export { type Tab };

const roboto = { fontFamily: '"Roboto_flex:Regular",sans-serif' };
const robotoBold = { fontFamily: '"Roboto_flex:Bold",sans-serif', fontWeight: 700 };
const poppins = { fontFamily: '"Poppins:SemiBold",sans-serif', fontWeight: 600 };

function FieldItem({ label, value, blue }: { label: string; value: string; blue?: boolean }) {
  return (
    <div className="flex flex-col items-start py-[5px] w-full">
      <p className="text-[13px] leading-normal mb-0.5" style={{ ...roboto, color: "rgba(0,29,84,0.55)" }}>
        {label}
      </p>
      <p className="text-[14px] leading-normal" style={{ ...roboto, color: blue ? "#3f57e4" : "#001d54" }}>
        {value}
      </p>
    </div>
  );
}

function GeneralContent() {
  return (
    <div className="flex gap-6 w-full pt-4 pb-4 flex-col sm:flex-row">
      <div className="flex-1 min-w-0 px-5 flex flex-col">
        <FieldItem label="Coverage" value="R.C. Auto, Dégâts Matériels Top Omnium" />
        <FieldItem label="Loss cause" value="TCCAUS:TCCAUS.700Collision avec un autre véhicule" />
        <FieldItem label="No of counterparties" value="1" blue />
        <FieldItem label="Country" value="TCPYPL:TCPYPL.BBelgique" />
        <FieldItem label="Loss Place" value=", 9999 Onbekende Lokaliteit" />
        <FieldItem label="Recourse" value="TORECO:TORECO.3Possible" />
        <FieldItem label="Reason of recourse" value="—" />
        <FieldItem label="Injuries" value="No" />
      </div>
      <div className="flex-1 min-w-0 px-5 flex flex-col">
        <FieldItem label="Severity" value="TCGRVT:TCGRVT.1Cas benin" />
        <FieldItem label="Police Report" value="No" />
        <FieldItem label="Cel" value="AG TEAM REGION SUD, 02/6644001" blue />
        <FieldItem label="Owner" value="Grebeude Vanessa, 02/6644908" />
        <FieldItem label="Product Code" value="5001 - Toerisme en zaken of gemengd gebruik" />
        <FieldItem label="Date opened" value="27/08/2026" />
        <FieldItem label="Communication channel" value="TCSUPT:TCSUPT.96E-RDR" />
      </div>
    </div>
  );
}

const TAB_CONTENT: Record<Tab, React.ReactNode> = {
  General: <GeneralContent />,
  EAF: <EAFContent />,
  FNOL: <FNOLContent />,
  RDR: <RDRContent />,
  "Prior Losses": <PriorLossesContent />,
};

export default function DetailsCard({
  activeTab,
  onTabChange,
}: {
  activeTab: Tab;
  onTabChange: (t: Tab) => void;
}) {
  return (
    <div className="bg-white rounded-[16px] w-full p-5">
      {/* Section heading */}
      <p className="text-[17.7px] text-[#001d54] pb-3 mb-4 border-b border-[#e0e4ef]" style={poppins}>
        Overview
      </p>

      {/* Inner bordered card */}
      <div className="border border-[#d8dce8] rounded-[10px] overflow-hidden bg-white">
        {/* Tab bar */}
        <div className="flex items-stretch border-b border-[#d8dce8] bg-[#f3f4fa]">
          {TABS.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className="relative px-4 min-h-[42px] cursor-pointer shrink-0 outline-none border-0 text-[14px] whitespace-nowrap"
                style={{
                  ...(active ? robotoBold : roboto),
                  color: active ? "#001d54" : "#001d54",
                  background: active ? "#ffffff" : "transparent",
                  boxShadow: active ? "inset 0 -2.5px 0 #3f57e4" : "none",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Tab content — no internal scroll, page scrolls */}
        <div className="w-full pt-4">
          {TAB_CONTENT[activeTab]}
        </div>
      </div>
    </div>
  );
}
