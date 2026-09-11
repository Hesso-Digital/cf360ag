import DataTable, { LinkCell } from "@/components/DataTable";
import type { ColDef, RowData } from "@/components/DataTable";

const poppins = { fontFamily: '"Poppins:SemiBold",sans-serif', fontWeight: 600 };

function DocumentPageIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="shrink-0">
      <path
        d="M4 1.75h5.2L12.25 5v9.25H4V1.75Z"
        stroke="#3f57e4"
        strokeWidth="1.25"
        strokeLinejoin="round"
      />
      <path d="M9.2 1.75V5h3.05" stroke="#3f57e4" strokeWidth="1.25" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentNameCell({ value, row }: { value: string; row: RowData }) {
  return (
    <span className="inline-flex items-center gap-1.5 min-w-0 max-w-full">
      <LinkCell value={value} />
      {row.hasDoc === "true" ? <DocumentPageIcon /> : null}
    </span>
  );
}

const documentCols: ColDef[] = [
  { key: "date", label: "Date" },
  {
    key: "name",
    label: "Name",
    render: (value, row) => <DocumentNameCell value={value} row={row} />,
  },
];

const documentRows: RowData[] = [
  { date: "09/09/2026", name: "Antwoord RVB (IN-7408387)", hasDoc: "true" },
  { date: "09/09/2026", name: "Antwoord RVB (IN-7408387)", hasDoc: "true" },
  { date: "09/09/2026", name: "Antwoord RVB (IN-7408387)", hasDoc: "true" },
  { date: "07/09/2026", name: "Verzending RVB", hasDoc: "false" },
  { date: "02/09/2026", name: "Verzending brief of bericht", hasDoc: "true" },
  { date: "29/08/2026", name: "PW Versie/Foto", hasDoc: "true" },
  { date: "28/08/2026", name: "Aanrijdingsform (IN-7408267)", hasDoc: "true" },
  { date: "28/08/2026", name: "PW View versie", hasDoc: "false" },
];

export default function DocumentsSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <div className={embedded ? "w-full" : "bg-white rounded-[16px] w-full px-5 pt-4 pb-5"}>
      {!embedded && (
        <div className="border-b border-[#d8dce8] pb-1 mb-5">
          <p className="text-[#001d54] text-[17.7px]" style={poppins}>
            Documents
          </p>
        </div>
      )}
      <DataTable title="Documents" columns={documentCols} rows={documentRows} />
    </div>
  );
}
