/** Collapsed utilities icon rail wrapper. Figma rail content is passed as children. */
export default function UtilitiesRail({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="self-stretch relative rounded-bl-[16px] rounded-tl-[16px] shrink-0"
      data-name=".Utilities panel (default)"
    >
      {children}
    </div>
  );
}
