import { useState } from "react";

const roboto = { fontFamily: '"Roboto_flex:Regular",sans-serif' };

export default function SummaryNote({ embedded = false }: { embedded?: boolean }) {
  const [note, setNote] = useState("");
  const empty = note.trim().length === 0;

  function handlePost() {
    if (empty) return;
    setNote("");
  }

  return (
    <div className={embedded ? "w-full" : "bg-white rounded-[16px] w-full px-5 pt-4 pb-5"}>
      <div className="relative w-full border border-[#d8dce8] rounded-[8px] bg-white">
        <label className="sr-only" htmlFor="summary-note">
          Note
        </label>
        <textarea
          id="summary-note"
          aria-label="Note"
          placeholder="Write your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={4}
          className="w-full min-h-[88px] resize-none border-0 bg-transparent px-3 pt-3 pb-11 text-[14px] text-[#001d54] leading-normal outline-none placeholder:text-[rgba(0,29,84,0.4)]"
          style={roboto}
        />
        <button
          type="button"
          onClick={handlePost}
          disabled={empty}
          className="absolute bottom-2 right-2 px-4 py-[5px] rounded-full bg-white border border-[#d8dce8] text-[14px] text-[#001d54] cursor-pointer disabled:opacity-40 disabled:cursor-default"
          style={roboto}
        >
          Post
        </button>
      </div>
    </div>
  );
}
