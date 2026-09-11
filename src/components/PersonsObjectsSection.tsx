import { useState } from "react";
import TableActionToolbar, { KebabIcon } from "@/components/TableActionIcons";

const roboto = { fontFamily: '"Roboto_flex:Regular",sans-serif' };
const robotoBold = { fontFamily: '"Roboto_Flex:SemiBold",sans-serif', fontWeight: 600, fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 50' as any };
const poppins = { fontFamily: '"Poppins:SemiBold",sans-serif', fontWeight: 600 };

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg width="14" height="7" viewBox="0 0 14.14 6.35" fill="none" className={`transition-transform ${open ? "" : "-rotate-90"}`}>
      <path clipRule="evenodd" fillRule="evenodd" fill="#001D54"
        d="M6.59 6.17L0.21 1.24L0.1 1.14C0.03 1 0 0.86 0 0.72C0 0.24 0.24 0 0.69 0C0.79 0 0.93 0.07 1.17 0.17L7.07 4.48L13.03 0.14C13.21 0.03 13.34 0 13.45 0C13.9 0 14.14 0.24 14.14 0.72C14.14 0.86 14.1 1 14.03 1.14L13.93 1.24L7.55 6.14C7.41 6.28 7.24 6.35 7.07 6.35C6.9 6.35 6.76 6.28 6.59 6.17Z" />
    </svg>
  );
}

// ── Table ─────────────────────────────────────────────────────────────────────
interface ColDef { key: string; label: string }
interface Row { [key: string]: string }

function DataTable({ columns, rows }: { columns: ColDef[]; rows: Row[] }) {
  return (
    <div className="w-full border border-[#d8dce8] rounded-[8px] overflow-hidden">
      {/* Header row */}
      <div className="flex bg-[#f3f4fa] border-b border-[#d8dce8]">
        {columns.map((col, ci) => (
          <div key={col.key} className={`flex-1 min-w-0 flex items-center justify-between px-2 h-[40px] ${ci < columns.length - 1 ? "border-r border-[#d8dce8]" : ""}`}>
            <span className="text-[#001d54] text-[13px] truncate" style={robotoBold}>{col.label}</span>
            <KebabIcon size={14} />
          </div>
        ))}
      </div>
      {/* Data rows */}
      {rows.map((row, ri) => (
        <div key={ri} className={`flex border-b border-[#d8dce8] last:border-0 ${ri % 2 === 0 ? "bg-white" : "bg-[#f3f4fa]"}`}>
          {columns.map((col, ci) => (
            <div key={col.key} className={`flex-1 min-w-0 flex items-center px-2 py-[3.5px] h-[31px] ${ci < columns.length - 1 ? "border-r border-[#d8dce8]" : ""}`}>
              <span className="text-[#001d54] text-[14px] truncate" style={roboto}>{row[col.key]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// ── Table section (Persons or Objects) ───────────────────────────────────────
function TableSection({ title, columns, rows }: { title: string; columns: ColDef[]; rows: Row[] }) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[#001d54] text-[17.7px]" style={{ fontFamily: '"Roboto_flex:Semi-bold",sans-serif', fontWeight: 600 }}>{title}</span>
        <TableActionToolbar />
      </div>
      <DataTable columns={columns} rows={rows} />
    </div>
  );
}

// ── Party block ───────────────────────────────────────────────────────────────
const personsColumns: ColDef[] = [
  { key: "role", label: "Role" },
  { key: "name", label: "Name" },
  { key: "reference", label: "Reference" },
  { key: "bodily", label: "Bodily Injury" },
];
const personsRows: Row[] = [
  { role: "Policyholder", name: "JAQUELINE MAURICE", reference: "123-4567-890", bodily: "-" },
  { role: "Driver", name: "JAQUELINE MAURICE", reference: "913-5567-870", bodily: "-" },
  { role: "Claims intermediary", name: "AG4YOU", reference: "124-6507-800", bodily: "No" },
];

const objectsColumns: ColDef[] = [
  { key: "owner", label: "Owner" },
  { key: "type", label: "Object type" },
  { key: "details", label: "Object details" },
  { key: "damaged", label: "Damaged" },
];
const objectsRows: Row[] = [
  { owner: "JACQUELINE MAURICE", type: "Vehicle", details: "CITROËN C4 · 1EIG6...", damaged: "Yes" },
];

function PartyBlock({ label }: { label: string }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full">
      {/* Party header */}
      <button
        className="flex items-center gap-2 mb-4 cursor-pointer"
        onClick={() => setOpen(o => !o)}
      >
        <ChevronDown open={open} />
        <span className="text-[#001d54] text-[17.7px]" style={poppins}>{label}</span>
      </button>

      {open && (
        <div className="flex flex-col gap-6">
          <TableSection title="Persons" columns={personsColumns} rows={personsRows} />
          <TableSection title="Objects" columns={objectsColumns} rows={objectsRows} />
        </div>
      )}
    </div>
  );
}

// ── Root ──────────────────────────────────────────────────────────────────────
export default function PersonsObjectsSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <div className={embedded ? "w-full" : "bg-white rounded-[16px] w-full px-5 pt-4 pb-5"}>
      {!embedded && (
        <div className="border-b border-[#d8dce8] pb-1 mb-5">
          <p className="text-[#001d54] text-[17.7px]" style={poppins}>{`Persons & Objects`}</p>
        </div>
      )}

      <div className="flex flex-col gap-8">
        <PartyBlock label="Party A" />
        <PartyBlock label="Party B" />
      </div>
    </div>
  );
}
