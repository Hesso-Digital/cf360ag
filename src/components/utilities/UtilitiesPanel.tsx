import AttachmentRow, { AttachmentKebab } from "./AttachmentRow";
import type { AttachmentItem } from "./AttachmentRow";

const poppins = { fontFamily: '"Poppins:SemiBold", sans-serif', fontWeight: 600 };
const roboto = { fontFamily: '"Roboto_flex:Regular", sans-serif' };
const robotoBold = { fontFamily: '"Roboto_flex:Bold", sans-serif', fontWeight: 700 };

function Count({ value }: { value: string }) {
  return (
    <span
      className="bg-[#e9eef3] h-[18px] min-w-[18px] px-[4.5px] rounded-[9px] text-[12px] text-[#4c5a67] leading-[18px] text-center border border-[rgba(76,90,103,0.1)]"
      style={robotoBold}
    >
      {value}
    </span>
  );
}

function IconBtn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <button
      type="button"
      title={title}
      className="size-8 rounded-[8px] flex items-center justify-center bg-transparent border-0 cursor-pointer shrink-0"
    >
      {children}
    </button>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14.83 14.83" fill="none">
      <path d="M8.1 6.72H14.83V8.1H8.1V14.83H6.69V8.1H0V6.72H6.69V0H8.1V6.72Z" fill="#001D54" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14.83 16.97" fill="none">
      <path
        fill="#001D54"
        d="M5.17 6.2v6.2c0 .38.31.69.69.69s.69-.31.69-.69V6.2c0-.38-.31-.69-.69-.69s-.69.31-.69.69zm3.1 0v6.2c0 .38.31.69.69.69s.69-.31.69-.69V6.2c0-.38-.31-.69-.69-.69s-.69.31-.69.69zM1.38 3.45h12.07v.69H12.07v10.34c0 1.14-.93 2.07-2.07 2.07H4.83c-1.14 0-2.07-.93-2.07-2.07V4.14H1.38V3.45zm2.07.69v10.34c0 .38.31.69.69.69h5.17c.38 0 .69-.31.69-.69V4.14H3.45zM5.52 1.38h3.79c.38 0 .69.31.69.69v.69H4.83V2.07c0-.38.31-.69.69-.69z"
      />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path
        fill="#001D54"
        d="M11.54 1.46a1.5 1.5 0 0 1 2.12 0l.88.88a1.5 1.5 0 0 1 0 2.12L5.7 13.3 2 14l.7-3.7 8.84-8.84ZM12.6 2.52 3.9 11.22l-.28 1.16 1.16-.28 8.7-8.7-.88-.88Z"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M14 3 L15.2 11.8 L24 13 L15.2 14.2 L14 23 L12.8 14.2 L4 13 L12.8 11.8 Z" fill="#3f57e4" fillOpacity="0.3" />
      <circle cx="21" cy="6" r="1.5" fill="#3f57e4" fillOpacity="0.4" />
      <circle cx="6" cy="21" r="1" fill="#3f57e4" fillOpacity="0.3" />
    </svg>
  );
}

function UtilityWidgetCard({
  title,
  count,
  accent,
  icon,
  action,
  showViewAll = true,
  children,
}: {
  title: string;
  count: string;
  accent: string;
  icon: React.ReactNode;
  action: React.ReactNode;
  showViewAll?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-[16px] w-full overflow-hidden">
      <div className="flex items-center justify-between pt-3 px-5">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-[16px] flex items-center justify-center shrink-0" style={{ background: accent }}>
            {icon}
          </div>
          <p className="text-[15px] text-[#001d54] whitespace-nowrap" style={poppins}>
            {title}
          </p>
          <Count value={count} />
        </div>
        {action}
      </div>
      <div className="pt-2.5 px-5">{children}</div>
      {showViewAll && (
        <button
          type="button"
          className="w-full text-center text-[14px] text-[#3f57e4] py-3 bg-transparent border-0 cursor-pointer"
          style={roboto}
        >
          View all
        </button>
      )}
    </div>
  );
}

function PersonRow({
  initials,
  name,
  role,
  last,
  statusDot,
}: {
  initials: string;
  name: string;
  role: string;
  last?: boolean;
  statusDot?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2 py-2 ${last ? "" : "border-b border-[#d8dce8]"}`}>
      <div className="relative size-8 shrink-0">
        <div className="size-8 rounded-full bg-[#687db1] text-white text-[14px] flex items-center justify-center" style={roboto}>
          {initials}
        </div>
        {statusDot && (
          <span className="absolute right-0 bottom-0 size-2 rounded-full bg-[#20aa50] border-2 border-white" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[14px] text-[#3f57e4] truncate" style={roboto}>
          {name}
        </p>
        <p className="text-[12px] text-[rgba(0,29,84,0.7)] truncate" style={roboto}>
          {role}
        </p>
      </div>
      <IconBtn title="Remove">
        <TrashIcon />
      </IconBtn>
    </div>
  );
}

const ATTACHMENTS: AttachmentItem[] = [
  { name: "Expertise report", meta: "PDF • Grebeude Vanessa", type: "document" },
  { name: "Settlement proposal", meta: "PDF • Ajit Singh", type: "document" },
  { name: "Police statement", meta: "Link • AG TEAM REGION SUD", type: "link" },
];

const FOLLOWERS = [
  { initials: "GV", name: "Grebeude Vanessa", role: "Owner" },
  { initials: "PR", name: "Peggy Rogers", role: "Manager" },
  { initials: "AS", name: "Ajit Singh", role: "Claims handler" },
];

const STAKEHOLDERS = [
  { initials: "JM", name: "Jaqueline Maurice", role: "Customer • Policyholder", statusDot: true },
  { initials: "AM", name: "A. Martens", role: "Expert • Receptionist" },
  { initials: "AG", name: "AG4YOU", role: "Intermediary • Engineer" },
];

export default function UtilitiesPanel({ onCollapse }: { onCollapse: () => void }) {
  return (
    <div className="w-full h-full relative rounded-bl-[16px] rounded-tl-[16px]" data-name="Utilities panel expanded">
      <div className="flex flex-col gap-4 p-5 h-full overflow-y-auto">
        <div className="flex items-center gap-2.5 h-6 pr-2">
          <p className="flex-1 text-[17.7px] text-[#001d54]" style={poppins}>
            Utilities
          </p>
          <button
            type="button"
            onClick={onCollapse}
            title="Collapse utilities"
            className="size-6 bg-white rounded-[8px] flex items-center justify-center cursor-pointer border-0 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
          >
            <svg width="5" height="9" viewBox="0 0 4.69 8.46" fill="none">
              <path clipRule="evenodd" fillRule="evenodd" fill="#3F57E4" d="M0 8.46V0L4.68975 4.13775L0 8.45925V8.46Z" />
            </svg>
          </button>
        </div>

        <UtilityWidgetCard
          title="Attachments"
          count="4"
          accent="#0060a8"
          icon={
            <svg width="14" height="14" viewBox="0 0 12.72 14.14" fill="none">
              <path
                fill="white"
                d="M11.9 6.93c.1 0 .17.03.24.1.07.07.1.14.1.24 0 .1-.03.17-.1.24L6.65 13c-.79.76-1.72 1.14-2.76 1.14S2.0 13.76 1.14 13C.38 12.24 0 11.34 0 10.28c0-1.03.38-1.97 1.14-2.76L7.9.83C8.45.28 9.1 0 9.9 0c.79 0 1.45.28 2 .83.55.52.83 1.17.83 1.96 0 .79-.28 1.45-.83 2L5.66 11c-.34.34-.76.52-1.24.52-.45 0-.9-.17-1.28-.52-.34-.34-.52-.76-.52-1.24 0-.48.17-.9.52-1.24L9.14 2.55c.07-.07.17-.1.28-.1.1 0 .17.03.24.1.07.07.1.14.1.24 0 .1-.03.21-.1.28L3.66 9c-.21.21-.31.45-.31.76 0 .31.1.55.31.76.21.21.45.31.76.31.28 0 .52-.1.72-.31L11.41 4.31c.41-.41.62-.93.62-1.52 0-.59-.21-1.07-.62-1.48C11 0.9 10.48.69 9.9.69c-.59 0-1.07.21-1.48.62L1.66 8.03C1.04 8.62.72 9.34.72 10.28c0 .9.31 1.62.93 2.21.62.62 1.38.93 2.24.93.93 0 1.66-.31 2.24-.93l5.52-5.45c.07-.07.14-.1.24-.1z"
              />
            </svg>
          }
          action={
            <IconBtn title="More">
              <AttachmentKebab />
            </IconBtn>
          }
        >
          {ATTACHMENTS.map((item, i) => (
            <AttachmentRow key={item.name} {...item} last={i === ATTACHMENTS.length - 1} />
          ))}
        </UtilityWidgetCard>

        <UtilityWidgetCard
          title="Followers"
          count="3"
          accent="#00a495"
          icon={
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
              <circle cx="6" cy="4" r="2.4" fill="white" />
              <path d="M1.5 12c.8-3 2.7-4.2 4.5-4.2S10.7 9 11.5 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              <circle cx="11.5" cy="4.2" r="1.8" fill="white" />
              <path d="M11 8.2c1.6.2 3.1 1.2 3.8 3.8" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          }
          action={
            <IconBtn title="Add follower">
              <PlusIcon />
            </IconBtn>
          }
        >
          {FOLLOWERS.map((person, i) => (
            <PersonRow key={person.name} {...person} last={i === FOLLOWERS.length - 1} />
          ))}
        </UtilityWidgetCard>

        <UtilityWidgetCard
          title="Stakeholders"
          count="3"
          accent="#e8a317"
          icon={
            <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
              <circle cx="8" cy="4" r="2.5" fill="white" />
              <path d="M2 12c.9-3.2 3.2-4.5 6-4.5S13.1 8.8 14 12" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          }
          action={
            <IconBtn title="Add stakeholder">
              <PlusIcon />
            </IconBtn>
          }
        >
          {STAKEHOLDERS.map((person, i) => (
            <PersonRow key={person.name} {...person} last={i === STAKEHOLDERS.length - 1} />
          ))}
        </UtilityWidgetCard>

        <UtilityWidgetCard
          title="Tags"
          count="0"
          accent="#2e7d32"
          showViewAll={false}
          icon={
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                fill="white"
                d="M13.8 8.4 8.4 13.8a1.2 1.2 0 0 1-1.7 0L1.5 8.6V2.8C1.5 2.1 2.1 1.5 2.8 1.5h5.8l5.2 5.2a1.2 1.2 0 0 1 0 1.7ZM4.4 4.6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
              />
            </svg>
          }
          action={
            <IconBtn title="Edit tags">
              <PencilIcon />
            </IconBtn>
          }
        >
          <div className="flex flex-col items-center justify-center py-6 gap-1">
            <SparkleIcon />
            <span className="text-[13px] text-[rgba(0,29,84,0.45)]" style={roboto}>
              No items
            </span>
          </div>
        </UtilityWidgetCard>
      </div>
    </div>
  );
}
