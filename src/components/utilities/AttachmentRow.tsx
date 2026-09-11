import { AttachmentTile, ExternalLinkGlyph } from "@/components/icons/AttachmentIcons";

const roboto = { fontFamily: '"Roboto_flex:Regular", sans-serif' };

export type AttachmentType = "document" | "link";

export type AttachmentItem = {
  name: string;
  meta: string;
  type: AttachmentType;
};

export function AttachmentKebab() {
  return (
    <svg width="3" height="14" viewBox="0 0 2.83 13.45" fill="none">
      <path
        fill="#001D54"
        fillRule="evenodd"
        d="M2.41 2.41C2.14 2.69 1.79 2.83 1.41 2.83C1.03 2.83 0.69 2.69 0.41 2.41C0.14 2.14 0 1.79 0 1.41C0 1.03 0.14 0.69 0.41 0.41C0.69 0.14 1.03 0 1.41 0C1.79 0 2.14 0.14 2.41 0.41C2.69 0.69 2.83 1.03 2.83 1.41C2.83 1.79 2.69 2.14 2.41 2.41ZM2.41 7.72C2.14 8 1.79 8.14 1.41 8.14C1.03 8.14 0.69 8 0.41 7.72C0.14 7.45 0 7.1 0 6.72C0 6.35 0.14 6 0.41 5.72C0.69 5.45 1.03 5.31 1.41 5.31C1.79 5.31 2.14 5.45 2.41 5.72C2.69 6 2.83 6.35 2.83 6.72C2.83 7.1 2.69 7.45 2.41 7.72ZM2.41 13.03C2.14 13.31 1.79 13.45 1.41 13.45C1.03 13.45 0.69 13.31 0.41 13.03C0.14 12.76 0 12.41 0 12.03C0 11.66 0.14 11.31 0.41 11.03C0.69 10.76 1.03 10.62 1.41 10.62C1.79 10.62 2.14 10.76 2.41 11.03C2.69 11.31 2.83 11.66 2.83 12.03C2.83 12.41 2.69 12.76 2.41 13.03Z"
      />
    </svg>
  );
}

export default function AttachmentRow({ name, meta, type, last }: AttachmentItem & { last?: boolean }) {
  return (
    <div className={`flex items-center gap-2 py-2 ${last ? "" : "border-b border-[#d8dce8]"}`}>
      <AttachmentTile type={type} />
      <div className="flex-1 min-w-0">
        <p className="text-[14px] text-[#3f57e4] truncate flex items-center gap-1" style={roboto}>
          <span className="truncate">{name}</span>
          {type === "link" && <ExternalLinkGlyph />}
        </p>
        <p className="text-[12px] text-[rgba(0,29,84,0.7)] truncate" style={roboto}>
          {meta}
        </p>
      </div>
      <button
        type="button"
        title="More"
        className="size-8 rounded-[8px] flex items-center justify-center bg-transparent border-0 cursor-pointer shrink-0"
      >
        <AttachmentKebab />
      </button>
    </div>
  );
}
