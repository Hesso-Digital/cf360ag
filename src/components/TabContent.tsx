import { useState } from "react";
import DataTable, { LinkCell } from "@/components/DataTable";
import type { ColDef, RowData } from "@/components/DataTable";

const labelClass =
  "font-['Roboto_flex:Regular',sans-serif] text-[14px] not-italic leading-[normal]";
const valueClass =
  "font-['Roboto_flex:Regular',sans-serif] text-[14px] not-italic leading-[normal] text-[#001d54]";
const groupTitleClass =
  "font-['Roboto_flex:Bold',sans-serif] font-bold text-[14px] text-[#001d54] mb-3";

function FieldItem({
  label,
  value,
  valueBlue,
}: {
  label: string;
  value: string;
  valueBlue?: boolean;
}) {
  return (
    <div className="flex flex-col items-start py-[4px] w-full" data-name="Field value items">
      <div className="shrink-0" data-name="label-wrapper">
        <p className={labelClass} style={{ color: "rgba(0,29,84,0.45)" }}>
          {label}
        </p>
      </div>
      <p className={valueClass} style={valueBlue ? { color: "#3f57e4" } : {}}>
        {value}
      </p>
    </div>
  );
}

function GroupTitle({ title }: { title: string }) {
  return (
    <p className={groupTitleClass} style={{ fontVariationSettings: '"wght" 700' }}>
      {title}
    </p>
  );
}

// ── EAF ─────────────────────────────────────────────────────────────────────
export function EAFContent() {
  return (
    <div className="flex gap-6 w-full pb-4 flex-col sm:flex-row">
      {/* Left column */}
      <div className="flex-1 min-w-0 px-5">
        <GroupTitle title="European Accident Notification" />
        <FieldItem label="European accident notification" value="No" />
      </div>
      {/* Right column */}
      <div className="flex-1 min-w-0 px-5">
        <GroupTitle title="Written Declaration" />
        <FieldItem label="Is the written declaration available?" value="Yes" />
      </div>
    </div>
  );
}

// ── FNOL ─────────────────────────────────────────────────────────────────────
export function FNOLContent() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full px-5 pb-4">
      {/* Collapsible section header */}
      <button
        className="flex items-center gap-2 mb-4 cursor-pointer"
        onClick={() => setOpen((o) => !o)}
      >
        {/* Caret */}
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          className={`transition-transform ${open ? "rotate-0" : "-rotate-90"}`}
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="#001D54"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="font-bold text-[#001d54] text-[14px]"
          style={{ fontFamily: '"Roboto_flex:Bold",sans-serif' }}
        >
          Deductibles at opening
        </span>
      </button>
      {open && (
        <p
          className="text-[14px] text-[#001d54]"
          style={{ fontFamily: '"Roboto_flex:Regular",sans-serif' }}
        >
          The system was not able to calculate the deductibles. Please consult
          the contract.
        </p>
      )}
    </div>
  );
}

// ── RDR ──────────────────────────────────────────────────────────────────────

const rdrInRightCols: ColDef[] = [
  { key: "claimStationId", label: "ClaimStation ID" },
  { key: "id", label: "ID" },
  { key: "sendAds", label: "Send ADS" },
  { key: "sendVersion", label: "Send Version" },
  { key: "receiveResponseToAds", label: "Receive Response to ADS" },
];

const rdrInRightRows: RowData[] = [];

const rdrAtFaultCols: ColDef[] = [
  { key: "claimStationId", label: "ClaimStation ID" },
  { key: "id", label: "ID" },
  { key: "receiveAds", label: "Receive ADS" },
  { key: "receiveVersion", label: "Receive Version" },
  { key: "sendResponseToAds", label: "Send Response to ADS" },
];

const rdrAtFaultRows: RowData[] = [
  {
    claimStationId: "Hilario Rosenstengel",
    id: "C-403",
    receiveAds: "306 Vera Park",
    receiveVersion: "Yes",
    sendResponseToAds: "Yes",
  },
  {
    claimStationId: "Peggy Rogers",
    id: "C-2593",
    receiveAds: "1 Rogers Street",
    receiveVersion: "Yes",
    sendResponseToAds: "Yes",
  },
];

export function RDRContent() {
  return (
    <div className="w-full px-5 pb-4 flex flex-col gap-6">
      <DataTable title="RDR in Right" columns={rdrInRightCols} rows={rdrInRightRows} />
      <DataTable title="RDR at Fault" columns={rdrAtFaultCols} rows={rdrAtFaultRows} />
    </div>
  );
}

// ── Prior Losses ──────────────────────────────────────────────────────────────

const priorLossesCols: ColDef[] = [
  {
    key: "taskReference",
    label: "Task Reference",
    render: (v) => v ? <LinkCell value={v} /> : "",
  },
  { key: "claimId",     label: "Claim ID" },
  { key: "dateOfLoss",  label: "Date" },
  { key: "coverages",   label: "Coverages" },
  {
    key: "status",
    label: "Status",
    cellVariant: "fillCell",
  },
];

const priorLossesRows: RowData[] = [
  {
    taskReference: "CF-132143",
    claimId: "898098934",
    dateOfLoss: "May 4, 2021",
    coverages: "--",
    status: "OPEN",
  },
  {
    taskReference: "CF-1324323",
    claimId: "982048939",
    dateOfLoss: "Sep 12, 2021",
    coverages: "--",
    status: "OPEN",
  },
];

export function PriorLossesContent() {
  return (
    <div className="w-full px-5 pb-4">
      <DataTable title="Prior Losses" columns={priorLossesCols} rows={priorLossesRows} />
    </div>
  );
}
