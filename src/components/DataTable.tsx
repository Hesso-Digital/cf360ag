import { useState } from "react";
import TableActionToolbar, { KebabIcon } from "@/components/TableActionIcons";

// ── Types ─────────────────────────────────────────────────────────────────────

export type ColDef = {
  key: string;
  label: string;
  /** render override — defaults to plain text */
  render?: (value: string, row: RowData) => React.ReactNode;
  /** Pega-style status: gray fill covers the entire cell, not a floating pill */
  cellVariant?: "fillCell";
};

export type RowData = Record<string, string>;

interface DataTableProps {
  title?: string;
  columns: ColDef[];
  rows: RowData[];
  /** When set, a chevron column is added and one row can expand to show extra fields */
  renderExpandedRow?: (row: RowData) => React.ReactNode;
  /** Defaults true. Deductibles groups use a coverage header instead of the table toolbar. */
  showToolbar?: boolean;
  /** Empty-state copy. Defaults to "No items". */
  emptyMessage?: string;
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function SparkleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden>
      <path d="M14 3 L15.2 11.8 L24 13 L15.2 14.2 L14 23 L12.8 14.2 L4 13 L12.8 11.8 Z" fill="#3f57e4" fillOpacity="0.3" />
      <circle cx="21" cy="6" r="1.5" fill="#3f57e4" fillOpacity="0.4" />
      <circle cx="6" cy="21" r="1" fill="#3f57e4" fillOpacity="0.3" />
    </svg>
  );
}

// ── Status badge ──────────────────────────────────────────────────────────────

export function StatusBadge({ value }: { value: string }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-[11px] uppercase tracking-wide border border-[rgba(0,29,84,0.15)] bg-[#f0f2f8] text-[rgba(0,29,84,0.6)]"
      style={{ fontFamily: '"Roboto_flex:Regular",sans-serif', fontWeight: 600, letterSpacing: "0.04em" }}
    >
      {value}
    </span>
  );
}

// ── Link cell ─────────────────────────────────────────────────────────────────

export function LinkCell({ value }: { value: string }) {
  return (
    <span className="text-[#3f57e4] cursor-pointer hover:underline" style={{ fontFamily: '"Roboto_flex:Regular",sans-serif' }}>
      {value}
    </span>
  );
}

const roboto = { fontFamily: '"Roboto_flex:Regular",sans-serif' };
const robotoBold = { fontFamily: '"Roboto_flex:Bold",sans-serif', fontWeight: 700 };

function ExpandChevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      aria-hidden
      className={`transition-transform ${expanded ? "rotate-0" : "-rotate-90"}`}
    >
      <path
        d="M1 1.5L6 6.5L11 1.5"
        stroke="#001D54"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DataCells({ columns, row }: { columns: ColDef[]; row: RowData }) {
  return (
    <>
      {columns.map((col, ci) => {
        const fillCell = col.cellVariant === "fillCell";
        const value = row[col.key] ?? "";
        return (
          <div
            key={col.key}
            className={`flex-1 min-w-0 flex items-center min-h-[32px] text-[14px] text-[#001d54] ${
              fillCell
                ? "justify-center self-stretch bg-[#e9eef3] px-2 py-0"
                : "px-2 py-[6px]"
            } ${ci < columns.length - 1 ? "border-r border-[#d8dce8]" : ""}`}
            style={roboto}
          >
            {fillCell ? (
              <span className="w-full text-center uppercase tracking-[0.04em] text-[13px] font-semibold text-[rgba(0,29,84,0.7)]">
                {col.render ? col.render(value, row) : value}
              </span>
            ) : (
              <span className="truncate">
                {col.render ? col.render(value, row) : value}
              </span>
            )}
          </div>
        );
      })}
    </>
  );
}

// ── Main DataTable ────────────────────────────────────────────────────────────
// Toolbar sits outside the grid (Persons & Objects pattern). Title appears once.

export default function DataTable({
  title,
  columns,
  rows,
  renderExpandedRow,
  showToolbar = true,
  emptyMessage = "No items",
}: DataTableProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const expandable = Boolean(renderExpandedRow);

  function toggleRow(index: number) {
    setExpandedIndex((current) => (current === index ? null : index));
  }

  return (
    <div className="w-full">
      {showToolbar ? (
      <div className="flex items-center justify-between mb-2 gap-3">
        <div className="flex items-center gap-2 min-w-0" style={roboto}>
          {title ? (
            <span className="text-[14px] text-[#001d54] font-semibold truncate" style={robotoBold}>
              {title}:
            </span>
          ) : null}
          <button type="button" className="flex items-center gap-1 text-[13px] text-[#001d54] bg-transparent border-0 p-0 cursor-pointer" style={roboto}>
            Default
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
              <path d="M1 1l4 4 4-4" stroke="#001d54" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span
            className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#e9eef3] text-[11px] text-[rgba(0,29,84,0.7)] border border-[rgba(76,90,103,0.1)] shrink-0"
            style={roboto}
          >
            {rows.length} result{rows.length !== 1 ? "s" : ""}
          </span>
        </div>
        <TableActionToolbar />
      </div>
      ) : null}

      <div className="w-full border border-[#d8dce8] rounded-[8px] overflow-hidden bg-white">
        <div className="flex items-stretch border-b border-[#d8dce8] bg-white">
          {expandable ? (
            <div className="w-[40px] shrink-0 border-r border-[#d8dce8] h-[40px]" aria-hidden />
          ) : null}
          {columns.map((col, ci) => (
            <div
              key={col.key}
              className={`flex-1 min-w-0 flex items-center justify-between gap-1 px-2 h-[40px] ${ci < columns.length - 1 ? "border-r border-[#d8dce8]" : ""}`}
            >
              <span className="text-[13px] text-[#001d54] truncate" style={robotoBold}>
                {col.label}
              </span>
              <span className="opacity-70 shrink-0">
                <KebabIcon size={14} />
              </span>
            </div>
          ))}
        </div>

        {rows.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-8 gap-1.5">
            <SparkleIcon />
            <span className="text-[13px] text-[rgba(0,29,84,0.45)]" style={roboto}>
              {emptyMessage}
            </span>
          </div>
        ) : (
          rows.map((row, ri) => {
            const expanded = expandable && expandedIndex === ri;
            const panelId = `datatable-row-${ri}-details`;
            const isLast = ri === rows.length - 1;
            return (
              <div
                key={ri}
                className={isLast ? "" : "border-b border-[#d8dce8]"}
              >
                <div
                  className={`flex items-stretch ${ri % 2 === 0 ? "bg-[#f3f4fa]" : "bg-white"}`}
                >
                  {expandable ? (
                    <div className="w-[40px] shrink-0 flex items-center justify-center border-r border-[#d8dce8]">
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={panelId}
                        aria-label={expanded ? "Collapse row" : "Expand row"}
                        onClick={() => toggleRow(ri)}
                        className="flex items-center justify-center w-7 h-7 bg-transparent border-0 p-0 cursor-pointer rounded outline-none focus-visible:ring-2 focus-visible:ring-[#3f57e4]"
                      >
                        <ExpandChevron expanded={Boolean(expanded)} />
                      </button>
                    </div>
                  ) : null}
                  <DataCells columns={columns} row={row} />
                </div>
                {expanded && renderExpandedRow ? (
                  <div id={panelId} className="border-t border-[#d8dce8] bg-white px-5 py-3">
                    {renderExpandedRow(row)}
                  </div>
                ) : null}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
