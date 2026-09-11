import DataTable, { LinkCell } from "@/components/DataTable";
import type { ColDef, RowData } from "@/components/DataTable";

const roboto = { fontFamily: '"Roboto_flex:Regular",sans-serif' };
const poppins = { fontFamily: '"Poppins:SemiBold",sans-serif', fontWeight: 600 };

const missionsCols: ColDef[] = [
  {
    key: "idCs",
    label: "ID CS",
    render: (v) => (v ? <LinkCell value={v} /> : ""),
  },
  { key: "idInformex", label: "ID Informex" },
  { key: "vehicle", label: "Vehicle" },
  { key: "status", label: "Status" },
  {
    key: "repairShops",
    label: "Repair shop(s)",
    render: (v) => (v ? <LinkCell value={v} /> : ""),
  },
  {
    key: "networkGarage",
    label: "Network garage",
    render: (v) => (v ? <LinkCell value={v} /> : ""),
  },
  { key: "missionDate", label: "Mission Date" },
  { key: "closureDate", label: "Closure Date" },
];

const missionsRows: RowData[] = [
  {
    idCs: "M-424233",
    idInformex: "0",
    vehicle: "1GRNE691 TOYOTA YARIS",
    status: "Ongoing",
    repairShops: ">RADOUBAI",
    networkGarage: ">Garage réseau",
    missionDate: "08/09/2025",
    closureDate: "",
  },
];

function DetailField({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: boolean;
}) {
  return (
    <div className="flex flex-col py-[5px] min-w-0">
      <p className="text-[13px] leading-normal" style={{ ...roboto, color: "rgba(0,29,84,0.55)" }}>
        {label}
      </p>
      {link && value ? (
        <LinkCell value={value} />
      ) : (
        <p className="text-[14px] leading-normal text-[#001d54]" style={roboto}>
          {value}
        </p>
      )}
    </div>
  );
}

function ExpandedMission({ row: _row }: { row: RowData }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
      <DetailField label="Active Expert" value=">AG Insurance EXPERTISE" link />
      <DetailField label="Expertise type" value="TCITYE: TCITYE.4CE convention d'expertise" />
      <DetailField label="Automatic payment" value="TOTPAY: TOTPAY.999995 pas de paiement automatique" />
      <DetailField label="VAT" value="0%" />
      <DetailField label="Deductible" value="0.0" />
      <DetailField label="Mission type" value="TCIMEX: TCIMEX.IImplicite" />
    </div>
  );
}

export default function MissionsSection({ embedded = false }: { embedded?: boolean }) {
  return (
    <div className={embedded ? "w-full" : "bg-white rounded-[16px] w-full px-5 pt-4 pb-5"}>
      {!embedded && (
        <div className="border-b border-[#d8dce8] pb-1 mb-5">
          <p className="text-[#001d54] text-[17.7px]" style={poppins}>
            Missions
          </p>
        </div>
      )}
      <DataTable
        title="Missions"
        columns={missionsCols}
        rows={missionsRows}
        renderExpandedRow={(row) => <ExpandedMission row={row} />}
      />
    </div>
  );
}
