const roboto = { fontFamily: '"Roboto_flex:Regular",sans-serif' };
const robotoLabel = { ...roboto, fontWeight: 600, fontVariationSettings: '"wght" 600' as const };
const poppins = { fontFamily: '"Poppins:SemiBold",sans-serif', fontWeight: 600 };

type HierarchyField = {
  label: string;
  value: string;
};

const HIERARCHY_FIELDS: HierarchyField[] = [
  { label: "Organization", value: "Claims" },
  { label: "Division", value: "AGTeam" },
  { label: "Unit", value: "AGClaims:AGGeneralistNLT3" },
  { label: "Owner Name", value: "Vanessa Grebeude" },
  { label: "Application version", value: "01.01.01" },
  { label: "RDR Flag", value: "Yes" },
  { label: "AGvsAG", value: "No" },
];

function displayValue(value: string) {
  return value.trim() ? value : "—";
}

function MetaField({ label, value }: HierarchyField) {
  return (
    <div className="flex items-center py-1">
      <p
        className="text-[14px] leading-normal m-0 w-[200px] shrink-0"
        style={{ ...robotoLabel, color: "rgba(0,29,84,0.55)" }}
      >
        {label}
      </p>
      <p className="text-[14px] leading-normal m-0 text-[#001d54]" style={roboto}>
        {displayValue(value)}
      </p>
    </div>
  );
}

export default function CaseHierarchySection({ embedded = false }: { embedded?: boolean }) {
  return (
    <div className={embedded ? "w-full" : "bg-white rounded-[16px] w-full px-5 pt-4 pb-5"}>
      {!embedded && (
        <p className="text-[#001d54] text-[17.7px] mb-1" style={poppins}>
          Case Hierarchy
        </p>
      )}
      <div className="flex flex-col">
        {HIERARCHY_FIELDS.map((field) => (
          <MetaField key={field.label} {...field} />
        ))}
      </div>
    </div>
  );
}
