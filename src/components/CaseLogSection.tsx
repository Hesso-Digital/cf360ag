import DataTable, { LinkCell } from "@/components/DataTable";
import type { ColDef, RowData } from "@/components/DataTable";

const poppins = { fontFamily: '"Poppins:SemiBold",sans-serif', fontWeight: 600 };

const caseLogCols: ColDef[] = [
  { key: "time", label: "Time" },
  { key: "performedBy", label: "Performed by" },
  { key: "category", label: "Category" },
  {
    key: "relatedTo",
    label: "Related to",
    render: (value) => (value ? <LinkCell value={value} /> : ""),
  },
  { key: "description", label: "Description" },
];

const caseLogRows: RowData[] = [
  {
    time: "09/09/2026 03:03",
    performedBy: "System",
    category: "Logs",
    relatedTo: "CF-2753314",
    description:
      "Child case TOEVOEN TOEVOEN.ACTS09 Réponse RDI, IN-7408387 has been manually instantiated",
  },
  {
    time: "09/09/2026 03:03",
    performedBy: "System",
    category: "Incoming Document",
    relatedTo: "IN-7408387",
    description: 'Assigned to Vanessa Grebeude to "Complete task"',
  },
  {
    time: "09/09/2026 03:03",
    performedBy: "System",
    category: "Incoming Document",
    relatedTo: "IN-7408387",
    description: "Case moved from Create to Execute.",
  },
  {
    time: "09/09/2026 03:03",
    performedBy: "System",
    category: "Incoming Document",
    relatedTo: "IN-7408387",
    description: "Item created.",
  },
  {
    time: "08/09/2026 11:15",
    performedBy: "System",
    category: "Logs",
    relatedTo: "CF-2753314",
    description: "Executing SLA action CallActivity.",
  },
  {
    time: "08/09/2026 11:15",
    performedBy: "System",
    category: "Logs",
    relatedTo: "CF-2753314",
    description: 'Late time reached for Assignment to "Complete task".',
  },
  {
    time: "07/09/2026 11:15",
    performedBy: "System",
    category: "Logs",
    relatedTo: "CF-2753314",
    description: "Executing SLA action CallActivity.",
  },
  {
    time: "07/09/2026 11:15",
    performedBy: "System",
    category: "Logs",
    relatedTo: "CF-2753314",
    description: 'Late time reached for Assignment to "Complete task".',
  },
  {
    time: "06/09/2026 11:15",
    performedBy: "System",
    category: "Logs",
    relatedTo: "CF-2753314",
    description: "Executing SLA action CallActivity.",
  },
  {
    time: "06/09/2026 11:15",
    performedBy: "System",
    category: "Logs",
    relatedTo: "CF-2753314",
    description: 'Late time reached for Assignment to "Complete task".',
  },
  {
    time: "05/09/2026 11:15",
    performedBy: "System",
    category: "Logs",
    relatedTo: "CF-2753314",
    description: "Executing SLA action CallActivity.",
  },
  {
    time: "05/09/2026 11:15",
    performedBy: "System",
    category: "Logs",
    relatedTo: "CF-2753314",
    description: 'Late time reached for Assignment to "Complete task".',
  },
  {
    time: "05/09/2026 11:14",
    performedBy: "System",
    category: "Assignment",
    relatedTo: "TODO-4723471",
    description: "Executing SLA action CallActivity.",
  },
];

export default function CaseLogSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <div className={embedded ? "w-full" : "bg-white rounded-[16px] w-full px-5 pt-4 pb-5"}>
      {!embedded && (
        <div className="border-b border-[#d8dce8] pb-1 mb-5">
          <p className="text-[#001d54] text-[17.7px]" style={poppins}>
            Case Log
          </p>
        </div>
      )}
      <DataTable columns={caseLogCols} rows={caseLogRows} />
    </div>
  );
}
