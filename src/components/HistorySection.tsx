import { useState } from "react";
import imgDropdown from "@/imports/Details-1/577d7ae02e48923d0b7ce5b477b3ef07449b1ba4.png";

const ns = { fontFamily: '"Nunito_Sans:Regular",sans-serif', fontVariationSettings: '"YTLC" 500, "wdth" 100' };
const nsBold = { fontFamily: '"Nunito_Sans:Bold",sans-serif', fontVariationSettings: '"YTLC" 500, "wdth" 100' };
const nsSemi = { fontFamily: '"Nunito_Sans:SemiBold",sans-serif', fontVariationSettings: '"YTLC" 500, "wdth" 100' };
const poppins = { fontFamily: '"Poppins:SemiBold",sans-serif', fontWeight: 600 };

// ── Icons ─────────────────────────────────────────────────────────────────────
function UserIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <circle cx="6" cy="3.75" r="2.25" stroke="#9EA4AF" strokeWidth="1.5" />
      <path d="M1.5 10.5C2.25 8.25 4.125 7.5 6 7.5C7.875 7.5 9.75 8.25 10.5 10.5" stroke="#9EA4AF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function CalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <rect x="1.5" y="2.25" width="9" height="8.25" rx="0.75" stroke="#9EA4AF" strokeWidth="1.5" />
      <path d="M1.5 4.5H10.5M3.75 0.75V3M8.25 0.75V3" stroke="#9EA4AF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <rect x="1.5" y="3" width="9" height="6.75" rx="0.75" stroke="#9EA4AF" strokeWidth="1.5" />
      <path d="M1.5 3L6 6.75L10.5 3" stroke="#9EA4AF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <circle cx="5.25" cy="5.25" r="3.75" stroke="#003781" strokeWidth="1.625" />
      <path d="M8.9375 8.9375L11.375 11.375" stroke="#003781" strokeWidth="1.625" strokeLinecap="round" />
    </svg>
  );
}
function StickyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-[1px]">
      <path d="M2.625 0.875H8.75L11.375 3.5V13.125H2.625V0.875Z" stroke="#7A5200" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.375 5.25H9.625M4.375 7.875H9.625M4.375 10.5H7.875" stroke="#7A5200" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function SmallSearchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0">
      <circle cx="5.25" cy="5.25" r="3.75" stroke="#9EA4AF" strokeWidth="1.5" />
      <path d="M8.25 8.25L10.5 10.5" stroke="#9EA4AF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ── Shared pieces ─────────────────────────────────────────────────────────────
function IdPill({ value }: { value: string }) {
  return (
    <span className="bg-[#e0eaf8] px-2 py-px rounded-full text-[#003781] text-[12px] leading-[18px]" style={nsSemi}>
      {value}
    </span>
  );
}

function Meta({ createdBy, createdOn, role }: { createdBy: string; createdOn: string; role: string }) {
  return (
    <div className="flex flex-wrap items-center gap-x-1 gap-y-0.5 pt-1">
      <span className="flex items-center gap-1 text-[#9ea4af] text-[12px] leading-[18px]" style={ns}>
        <UserIcon />Created by: {createdBy}
      </span>
      <span className="text-[#9ea4af] text-[12px] leading-[18px] px-1" style={ns}>·</span>
      <span className="flex items-center gap-1 text-[#9ea4af] text-[12px] leading-[18px]" style={ns}>
        <CalIcon />Created on: {createdOn}
      </span>
      <span className="text-[#9ea4af] text-[12px] leading-[18px] px-1" style={ns}>·</span>
      <span className="flex items-center gap-1 text-[#9ea4af] text-[12px] leading-[18px]" style={ns}>
        <MailIcon />Incoming caller role: {role}
      </span>
    </div>
  );
}

interface EventEntry {
  date: string;
  type: string;
  id: string;
  title: string;
  createdBy: string;
  createdOn: string;
  role: string;
  description: string;
  showEdit?: boolean;
}

const EVENTS: EventEntry[] = [
  {
    date: "28/04/2026",
    type: "Email Interaction",
    id: "I-31004",
    title: "Settlement Proposal Sent",
    createdBy: "Ajit Singh",
    createdOn: "28/04/2026",
    role: "Agent",
    description: "Proposition de règlement à l'amiable envoyée au preneur d'assurance pour approbation.",
    showEdit: true,
  },
  {
    date: "25/04/2026",
    type: "Case Event",
    id: "CF-1403342",
    title: "Reserve Updated",
    createdBy: "Ajit Singh",
    createdOn: "25/04/2026",
    role: "Agent",
    description: "Provision mise à jour de € 12,450 à € 11,800 suite au rapport d'expertise.",
  },
  {
    date: "24/04/2026",
    type: "Document Upload",
    id: "CF-1403342",
    title: "Rapport d'expertise reçu",
    createdBy: "A. Martens",
    createdOn: "24/04/2026",
    role: "Expert",
    description: "Rapport d'expertise complet reçu. Valeur du dommage estimée à € 11,800.",
  },
  {
    date: "22/04/2026",
    type: "Phone Interaction",
    id: "I-30997",
    title: "Incoming Call",
    createdBy: "Dhruv Patyal",
    createdOn: "22/04/2026",
    role: "Client",
    description: "Raison de l'appel : Consultation du sinistre",
    showEdit: true,
  },
  {
    date: "22/04/2026",
    type: "Task Assignment",
    id: "CF-1403342",
    title: "Liability Assessment Assigned",
    createdBy: "Ajit Singh",
    createdOn: "22/04/2026",
    role: "Agent",
    description: "Tâche d'évaluation de la responsabilité assignée à l'équipe juridique.",
    showEdit: true,
  },
];

function EventCard({ event }: { event: EventEntry }) {
  return (
    <div className="flex gap-3 w-full min-w-0">
      {/* Date badge */}
      <div className="shrink-0 pt-[3px]">
        <div className="bg-[#003781] text-white text-[12px] leading-[18px] tracking-[0.36px] px-3 py-1 rounded-[8px] w-[100px] text-center whitespace-nowrap" style={nsSemi}>
          {event.date}
        </div>
      </div>

      {/* Card */}
      <div className="flex-1 min-w-0 border border-[#edeef1] rounded-[6px] bg-white overflow-hidden">
        {/* Header */}
        <div className="px-4 py-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[#9ea4af] text-[12px] leading-[18px]" style={ns}>{event.type}</span>
            <IdPill value={event.id} />
          </div>
          <p className="text-[#1a1d24] text-[14px] leading-[21px] mt-1" style={nsBold}>{event.title}</p>
          <Meta createdBy={event.createdBy} createdOn={event.createdOn} role={event.role} />
        </div>
        {/* Footer */}
        <div className="bg-[#f7f8fa] border-t border-[#edeef1] px-4 py-2 flex items-start justify-between gap-3">
          <p className="text-[#5c6270] text-[12px] leading-[18px] flex-1 min-w-0" style={ns}>{event.description}</p>
          {event.showEdit && (
            <button className="text-[#003781] text-[12px] leading-[12px] shrink-0 font-semibold" style={nsSemi}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HistorySection({ embedded = false }: { embedded?: boolean }) {
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div className={embedded ? "w-full" : "bg-white rounded-[16px] w-full px-5 pt-4 pb-5"}>
      {!embedded && (
        <div className="border-b border-[#cfcfcf] pb-1 mb-4">
          <p className="text-[#001d54] text-[17.7px] whitespace-nowrap" style={poppins}>History</p>
        </div>
      )}

      {/* Inner card */}
      <div className="border border-[#edeef1] rounded-[6px] overflow-hidden w-full">

        {/* Sticky note */}
        <div className="px-4 pt-4">
          <div className="bg-[#fef3d8] border-l-[3px] border-[#d97706] rounded-[4px] flex items-start gap-3 px-4 py-3 w-fit max-w-full">
            <StickyIcon />
            <div className="min-w-0">
              <p className="text-[#7a5200] text-[12px] leading-[18px] font-bold" style={nsBold}>Sticky Note</p>
              <p className="text-[#5c6270] text-[12px] leading-[18px]" style={ns}>This is a sample message.</p>
            </div>
          </div>
        </div>

        {/* Filter toolbar */}
        <div className="mt-4 border-t border-b border-[#edeef1] bg-[#f7f8fa] flex items-center justify-between px-4 py-2">
          <button
            className="flex items-center gap-2 text-[#003781] text-[12px]"
            style={nsSemi}
            onClick={() => setFilterOpen(o => !o)}
          >
            <SearchIcon />Filter
          </button>
          <div className="flex items-center gap-2">
            <div className="bg-white border border-[#edeef1] rounded-[4px] h-[28px] px-3 flex items-center">
              <span className="text-[#5c6270] text-[12px]" style={nsSemi}>↻ Refresh</span>
            </div>
            <span className="text-[#9ea4af] text-[12px]" style={ns}>15 results out of 15</span>
          </div>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="bg-[#e8eef6] border-b border-[#edeef1] px-4 py-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
            {/* Order */}
            <div className="flex flex-col gap-1">
              <p className="text-[#9ea4af] text-[11px] uppercase tracking-[0.88px] leading-[16.5px]" style={nsSemi}>Order</p>
              <div className="bg-[#f7f8fa] border border-[#edeef1] rounded-full h-[28px] flex overflow-hidden">
                <div className="bg-[#003781] text-white text-[12px] px-3 flex items-center" style={nsSemi}>Newest</div>
                <div className="text-[#5c6270] text-[12px] px-3 flex items-center" style={ns}>Oldest</div>
              </div>
            </div>
            {/* Event type */}
            <div className="flex flex-col gap-1">
              <p className="text-[#9ea4af] text-[11px] uppercase tracking-[0.88px] leading-[16.5px]" style={nsSemi}>Event type</p>
              <div className="bg-white border border-[#edeef1] rounded-[4px] h-[28px] flex items-center px-2 relative">
                <img src={imgDropdown} alt="" className="absolute left-0 top-1/4 h-1/2 w-[4%]" />
              </div>
            </div>
            {/* Date range */}
            <div className="flex flex-col gap-1">
              <p className="text-[#9ea4af] text-[11px] uppercase tracking-[0.88px] leading-[16.5px]" style={nsSemi}>Date range</p>
              <div className="flex items-center gap-1.5">
                <div className="bg-white border border-[#edeef1] rounded-[4px] h-[28px] flex-1 min-w-0" />
                <span className="text-[#9ca3af] text-[12px]" style={ns}>–</span>
                <div className="bg-white border border-[#edeef1] rounded-[4px] h-[28px] flex-1 min-w-0" />
              </div>
            </div>
            {/* Keyword */}
            <div className="flex flex-col gap-1">
              <p className="text-[#9ea4af] text-[11px] uppercase tracking-[0.88px] leading-[16.5px]" style={nsSemi}>Keyword</p>
              <div className="relative">
                <div className="absolute left-2 top-1/2 -translate-y-1/2"><SmallSearchIcon /></div>
                <div className="bg-white border border-[#edeef1] rounded-[4px] h-[28px] pl-6 pr-2 flex items-center">
                  <span className="text-[#9ea4af] text-[12px]" style={ns}>Search…</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Timeline entries */}
        <div className="p-4 flex flex-col gap-6">
          {EVENTS.map((ev, i) => (
            <EventCard key={i} event={ev} />
          ))}
        </div>

        {/* Pagination */}
        <div className="border-t border-[#edeef1] flex items-center justify-center gap-1 px-4 py-3">
          {[{ label: "‹ Prev", active: false, disabled: true }, { label: "1", active: true }, { label: "2", active: false }, { label: "3", active: false }, { label: "Next ›", active: false, disabled: false }].map((btn, i) => (
            <button
              key={i}
              className={`h-[28px] min-w-[28px] px-2 rounded-[4px] text-[12px] border ${btn.active ? "bg-[#004b9a] border-[#004b9a] text-white" : "bg-white border-[#edeef1] text-[#5c6270]"} ${btn.disabled ? "opacity-40" : ""}`}
              style={btn.active ? nsSemi : ns}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Result count */}
        <div className="border-t border-[#edeef1] flex items-center justify-center px-4 py-2">
          <span className="text-[#9ea4af] text-[12px]" style={ns}>Showing 1–5 of 15 results</span>
        </div>
      </div>
    </div>
  );
}
