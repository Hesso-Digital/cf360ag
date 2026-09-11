import { useState } from "react";
import DataTable from "@/components/DataTable";
import type { ColDef, RowData } from "@/components/DataTable";

const roboto = { fontFamily: '"Roboto_flex:Regular",sans-serif' };
const robotoLabel = { ...roboto, fontWeight: 600, fontVariationSettings: '"wght" 600' as const };
const robotoBold = { fontFamily: '"Roboto_flex:Bold",sans-serif', fontWeight: 700 };
const poppins = { fontFamily: '"Poppins:SemiBold",sans-serif', fontWeight: 600 };

const FINANCIALS_TABS = ["Payments", "Deductibles"] as const;
type FinancialsTab = (typeof FINANCIALS_TABS)[number];

function CosmoTab({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative px-4 min-h-[42px] cursor-pointer shrink-0 outline-none border-0 text-[14px] whitespace-nowrap"
      style={{
        ...(selected ? robotoBold : roboto),
        color: "#001d54",
        background: selected ? "#ffffff" : "transparent",
        boxShadow: selected ? "inset 0 -2.5px 0 #3f57e4" : "none",
      }}
    >
      {children}
    </button>
  );
}

function FieldRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col py-[5px]">
      <p className="text-[13px] leading-normal" style={{ ...robotoLabel, color: "rgba(0,29,84,0.55)" }}>
        {label}
      </p>
      <p className="text-[14px] leading-normal text-[#001d54]" style={roboto}>
        {value}
      </p>
    </div>
  );
}

type SummaryLine = {
  label: string;
  value: string;
  emphasize?: boolean;
  warning?: boolean;
};

type PartyTotal = {
  label: string;
  value: string;
  emphasize?: boolean;
};

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="7"
      viewBox="0 0 14.14 6.35"
      fill="none"
      aria-hidden
      className={`transition-transform ${open ? "" : "-rotate-90"}`}
    >
      <path
        clipRule="evenodd"
        fillRule="evenodd"
        fill="#001D54"
        d="M6.59 6.17L0.21 1.24L0.1 1.14C0.03 1 0 0.86 0 0.72C0 0.24 0.24 0 0.69 0C0.79 0 0.93 0.07 1.17 0.17L7.07 4.48L13.03 0.14C13.21 0.03 13.34 0 13.45 0C13.9 0 14.14 0.24 14.14 0.72C14.14 0.86 14.1 1 14.03 1.14L13.93 1.24L7.55 6.14C7.41 6.28 7.24 6.35 7.07 6.35C6.9 6.35 6.76 6.28 6.59 6.17Z"
      />
    </svg>
  );
}

function KeyValueRow({
  label,
  value,
  emphasize,
  warning,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="flex items-center py-1">
      <p
        className="text-[14px] leading-normal m-0 w-[200px] shrink-0"
        style={{ ...robotoLabel, color: warning ? "#d91c29" : "rgba(0,29,84,0.55)" }}
      >
        {label}
      </p>
      <p
        className="text-[14px] leading-normal m-0"
        style={{
          ...(emphasize ? robotoBold : roboto),
          color: warning ? "#d91c29" : "#001d54",
        }}
      >
        {value}
      </p>
    </div>
  );
}

function SummaryStatCard({ title, lines }: { title: string; lines: SummaryLine[] }) {
  return (
    <div className="flex-1 min-w-0">
      <p
        className="text-[15px] leading-normal text-[#001d54] pb-2 mb-1 border-b border-[#cfcfcf]"
        style={poppins}
      >
        {title}
      </p>
      <div className="flex flex-col">
        {lines.map((line) => (
          <KeyValueRow key={line.label} {...line} />
        ))}
      </div>
    </div>
  );
}

function PartyGroup({
  name,
  totals,
  columns,
  rows,
  renderExpandedRow,
}: {
  name: string;
  totals: PartyTotal[];
  columns: ColDef[];
  rows: RowData[];
  renderExpandedRow?: (row: RowData) => React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="flex flex-col gap-2 w-full bg-transparent border-0 p-0 cursor-pointer mb-3 text-left"
      >
        <span className="flex items-center gap-2 min-w-0">
          <ChevronDown open={open} />
          <span className="text-[14px] text-[#001d54]" style={robotoBold}>
            {name}
          </span>
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 pl-6">
          <div className="flex flex-col min-w-0">
            {totals.slice(0, 3).map((total) => (
              <KeyValueRow key={total.label} {...total} />
            ))}
          </div>
          <div className="flex flex-col min-w-0">
            {totals.slice(3).map((total) => (
              <KeyValueRow key={total.label} {...total} />
            ))}
          </div>
        </div>
      </button>
      {open ? (
        <DataTable
          columns={columns}
          rows={rows}
          showToolbar={false}
          emptyMessage="No existing items found"
          renderExpandedRow={rows.length > 0 ? renderExpandedRow : undefined}
        />
      ) : null}
    </div>
  );
}

function ExpandedPayment({ row }: { row: RowData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
      <FieldRow label="Type" value={row.type} />
      <FieldRow label="Combination" value={row.combination} />
      <FieldRow label="Status" value={row.status} />
      <FieldRow label="Recipient" value={row.recipient} />
    </div>
  );
}

const paymentCols: ColDef[] = [
  { key: "id", label: "ID" },
  { key: "date", label: "Date" },
  { key: "type", label: "Type" },
  { key: "combination", label: "Combination" },
  { key: "recipient", label: "Recipient" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
  { key: "executor", label: "Executor" },
  { key: "connex", label: "Connex" },
];

const partyARows: RowData[] = [];

const partyCRows: RowData[] = [
  {
    id: "1007706900004",
    date: "02/09/2026",
    type: "A3- TCOPEF: TCOPEF.A3Crédit du Compte RDR Assuré en tort",
    combination:
      "TCROLE: TCROLE.0120 Compagnie assurant AXA BELGIUM – TCTGAR: TCTGAR.201 R.C. Auto",
    recipient: "AXA BELGIUM",
    amount: "300.00€",
    status: "TCESTAO: TCESTAO.1 Etat normal non bloqué pour autorisation",
    executor: "H00",
    connex: "",
  },
];

const partyATotals: PartyTotal[] = [
  { label: "Total reserves", value: "1,771.01€" },
  { label: "Amount paid", value: "0.00€" },
  { label: "To pay", value: "1,771.01€", emphasize: true },
  { label: "Recourse", value: "0.00€" },
  { label: "Recovery", value: "0.00€" },
];

const partyCTotals: PartyTotal[] = [
  { label: "Total reserves", value: "1,715.02€" },
  { label: "Amount paid", value: "300.00€" },
  { label: "To pay", value: "1,415.02€", emphasize: true },
  { label: "Recourse", value: "0.00€" },
  { label: "Recovery", value: "0.00€" },
];

function PaymentsContent() {
  return (
    <div className="w-full px-5 pb-4 flex flex-col gap-5">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        <SummaryStatCard
          title="Financial summary"
          lines={[
            { label: "Reserve", value: "3,486.03€" },
            { label: "Payments", value: "300.00€" },
            { label: "Balance (to pay)", value: "3,186.03€", emphasize: true },
          ]}
        />
        <SummaryStatCard
          title="Recourse ongoing"
          lines={[
            { label: "Recourse expected", value: "0.00€" },
            { label: "Recovery", value: "0.00€" },
            { label: "Balance (to recover)", value: "0.00€", warning: true },
          ]}
        />
      </div>

      <p className="text-[14px] text-[#001d54]" style={robotoBold}>
        View Per Party
      </p>

      <PartyGroup
        name="TCPARS'.TCPARS.A Partie AG Insurance - CONSEPELIEBATUR"
        totals={partyATotals}
        columns={paymentCols}
        rows={partyARows}
      />
      <PartyGroup
        name="TCPARS'.TCPARS.C Partie C - Laurie Vane"
        totals={partyCTotals}
        columns={paymentCols}
        rows={partyCRows}
        renderExpandedRow={(row) => <ExpandedPayment row={row} />}
      />
    </div>
  );
}

const deductibleCols: ColDef[] = [
  { key: "type", label: "Deductible Type" },
  { key: "amount", label: "Amount" },
  { key: "systemEvaluated", label: "System Evaluated" },
  { key: "applied", label: "Applied" },
];

const rcAutoRows: RowData[] = [
  {
    type: "T0MACF:T0MACF.00000Y Jeune conducteur",
    amount: "--",
    systemEvaluated: "No",
    applied: "--",
  },
  {
    type: "T0MACF:T0MACF.00000S Systèmes d'assistance à la conduite",
    amount: "--",
    systemEvaluated: "No",
    applied: "--",
  },
];

const topOmniumRows: RowData[] = [
  {
    type: "T0MACF:T0MACF.00000F Flexi",
    amount: "--",
    systemEvaluated: "No",
    applied: "--",
  },
  {
    type: "T0MACF:T0MACF.00000Y Jeune conducteur",
    amount: "--",
    systemEvaluated: "No",
    applied: "--",
  },
  {
    type: "T0MACF:T0MACF.00000N Garage hors réseau",
    amount: "--",
    systemEvaluated: "No",
    applied: "--",
  },
  {
    type: "T0MACF:T0MACF.00000S Systèmes d'assistance à la conduite",
    amount: "--",
    systemEvaluated: "No",
    applied: "--",
  },
];

function CoverageGroup({
  coverage,
  total,
  rows,
}: {
  coverage: string;
  total: string;
  rows: RowData[];
}) {
  return (
    <div className="w-full">
      <div className="px-5 mb-3">
        <FieldRow label="Coverage" value={coverage} />
        <FieldRow label="Total" value={total} />
      </div>
      <div className="px-5">
        <DataTable columns={deductibleCols} rows={rows} showToolbar={false} />
      </div>
    </div>
  );
}

function DeductiblesContent() {
  return (
    <div className="w-full flex flex-col gap-6 pb-4">
      <CoverageGroup
        coverage="TCTGAR:TCTGAR.201 R.C. Auto"
        total="€0"
        rows={rcAutoRows}
      />
      <CoverageGroup
        coverage="TCTGAR:TCTGAR.230 Dégâts Matériels Top Omnium"
        total="€0"
        rows={topOmniumRows}
      />
    </div>
  );
}

export function FinancialsPanel() {
  const [active, setActive] = useState<FinancialsTab>("Payments");
  return (
    <div className="border border-[#d8dce8] rounded-[10px] overflow-hidden bg-white h-auto">
      <div className="flex items-stretch bg-[#f3f4fa] border-b border-[#d8dce8]">
        {FINANCIALS_TABS.map((tab) => (
          <CosmoTab key={tab} selected={tab === active} onClick={() => setActive(tab)}>
            {tab}
          </CosmoTab>
        ))}
      </div>
      <div className="w-full pt-4">
        {active === "Payments" ? <PaymentsContent /> : <DeductiblesContent />}
      </div>
    </div>
  );
}

export default function FinancialsSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <div className={embedded ? "w-full" : "bg-white rounded-[16px] w-full px-5 pt-4 pb-5"}>
      {!embedded && (
        <div className="border-b border-[#d8dce8] pb-1 mb-5">
          <p className="text-[#001d54] text-[17.7px]" style={poppins}>
            Financials
          </p>
        </div>
      )}
      <FinancialsPanel />
    </div>
  );
}
