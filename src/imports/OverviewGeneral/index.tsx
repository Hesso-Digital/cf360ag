import svgPaths from "./svg-rgkaw1hpg";
import { imgBorder, imgBorder1, imgPhoto } from "./svg-w1t3u";
import imgPhoto1 from "./3873ccd5774a2ca118be30ec2cad9924cc88971c.png";
import imgPhoto2 from "./ff2edc5068f56c3684593aee58a792af6f4a20b6.png";
import imgPhoto3 from "./1a3518f3081b333f8ef2235e803eefd73ea4b69d.png";
import imgPhoto4 from "./8514c6650de5944b08ba1083fd16a00b48f8993e.png";
import imgImage54 from "./abb3a16b2067ed28346e297fba6b9d23fec8beb5.png";
type CounterBadgeProps = {
  className?: string;
  count?: string;
  type?: "Standard";
};

function CounterBadge({ className, count = "4", type = "Standard" }: CounterBadgeProps) {
  return (
    <div className={className || "bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px]"}>
      <div aria-hidden className="absolute border border-[rgba(76,90,103,0.1)] border-solid inset-0 pointer-events-none rounded-[9px]" />
      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4.5px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c5a67] text-[12px] text-center whitespace-nowrap">
            <p className="leading-[18px]">{count}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
type SummaryCollpaseToggleButtonProps = {
  className?: string;
  state?: "Left";
};

function SummaryCollpaseToggleButton({ className, state = "Left" }: SummaryCollpaseToggleButtonProps) {
  return (
    <div className={className || "bg-white relative rounded-[8px] size-[24px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Icon">
        <div className="absolute inset-[32%_40.46%_32.75%_40%]" data-name="Color">
          <svg className="absolute block inset-0 size-full" fill="none" height="8.46" preserveAspectRatio="none" viewBox="0 0 4.68975 8.46" width="4.68975">
            <path clipRule="evenodd" d={svgPaths.p1a204280} fill="#3F57E4" fillRule="evenodd" id="Color" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function CaretDown({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[25px]"} data-name="caret-down">
      <div className="absolute inset-[32%_9.46%_32.75%_12%]" data-name="Color">
        <svg className="absolute block inset-0 size-full" fill="none" height="8.8125" preserveAspectRatio="none" viewBox="0 0 19.6359 8.8125" width="19.6359">
          <path clipRule="evenodd" d={svgPaths.p2d929e00} fill="#001D54" fillRule="evenodd" id="Color" />
        </svg>
      </div>
    </div>
  );
}
type CaseLifecycleShapeProps = {
  className?: string;
  type?: "Final stage end" | "Completed" | "Current";
};

function CaseLifecycleShape({ className, type = "Current" }: CaseLifecycleShapeProps) {
  const isCompleted = type === "Completed";
  const isFinalStageEnd = type === "Final stage end";
  return (
    <div className={className || `h-[42px] relative w-[20px] ${isFinalStageEnd ? "bg-white rounded-tr-[8px]" : isCompleted ? "" : "bg-white"}`}>
      {["Completed", "Final stage end"].includes(type) && <div className={`absolute top-0 ${isFinalStageEnd ? "h-[32px] right-0 w-[16px]" : "h-[41px] left-0 w-[17px]"}`} data-name="Mask" />}
      {["Current", "Completed"].includes(type) && (
        <div className="absolute h-[42px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[20px_42px] right-[8px] top-0 w-[12px]" style={isCompleted ? { maskImage: `url("${imgBorder1}")` } : { maskImage: `url("${imgBorder}")` }} data-name="Border">
          <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 12 42" width="12">
            <g id="Border">
              <mask fill="white" id={isCompleted ? "path-1-inside-1_0_1617" : "path-1-inside-1_0_1567"}>
                <path clipRule="evenodd" d="M0 0L12 21L0 42" fillRule="evenodd" />
              </mask>
              <path clipRule="evenodd" d="M0 0L12 21L0 42" fill={isCompleted ? "#F6FEF6" : "#3A53E9"} fillRule="evenodd" />
              <path d={svgPaths.p1478cf00} fill="#CFCFCF" mask={isCompleted ? "url(#path-1-inside-1_0_1617)" : "url(#path-1-inside-1_0_1567)"} />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
type VerticalTabsProps = {
  className?: string;
  label?: string;
  showCounter?: boolean;
  tabType?: "Null" | "Hover" | "Selected" | "Unselected";
};

function VerticalTabs({ className, label = "Opportunities", showCounter = true, tabType = "Unselected" }: VerticalTabsProps) {
  if (tabType === "Hover") {
    return (
      <div className={className || "bg-[rgba(0,0,0,0.05)] min-w-[350px] relative rounded-br-[8px] rounded-tr-[8px]"} data-name="Tab type=Hover">
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] pr-[12px] relative size-full">
            <div className="content-stretch flex items-center relative shrink-0 w-[338px]" data-name="Content">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Label">
                <div className="bg-[rgba(58,83,233,0.05)] h-[30px] relative shrink-0 w-[4px]" data-name="Selected indicator" />
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[14px]">
                  <p className="leading-[normal]">{label}</p>
                </div>
              </div>
              {showCounter && (
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Counter">
                  <CounterBadge className="bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px] shrink-0" count="6" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (tabType === "Selected") {
    return (
      <div className={className || "bg-[rgba(58,83,233,0.1)] min-w-[350px] relative rounded-br-[8px] rounded-tr-[8px] w-[350px]"} data-name="Tab type=Selected">
        <div className="flex flex-row items-center min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-w-[inherit] pr-[12px] relative size-full">
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
              <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Label">
                <div className="bg-[#3f57e4] h-[30px] relative shrink-0 w-[4px]" data-name="Selected indicator" />
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_Flex:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px not-italic relative text-[#3f57e4] text-[14px]" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
                  <p className="leading-[normal]">{label}</p>
                </div>
              </div>
              {showCounter && (
                <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Counter">
                  <CounterBadge className="bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px] shrink-0" count="6" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (tabType === "Null") {
    return <div className={className || "bg-white h-[28px] min-w-[350px] relative rounded-[8px] w-[350px]"} data-name="Tab type=Null" />;
  }
  return (
    <button className={className || "bg-white cursor-pointer min-h-[30px] min-w-[350px] relative rounded-[8px]"} data-name="Tab type=Unselected">
      <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pl-[16px] pr-[12px] py-[6px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[14px] text-left">
            <p className="leading-[normal]">{label}</p>
          </div>
          {showCounter && (
            <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-name="Container">
              <CounterBadge className="bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px] shrink-0" count="6" />
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
type AvatarsProps = {
  className?: string;
  avatarType?: "Amy" | "Aya" | "Fred" | "Initials" | "Ted";
  large?: "False";
};

function Avatars({ className, avatarType = "Initials", large = "False" }: AvatarsProps) {
  const isFalseAndInitials = large === "False" && avatarType === "Initials";
  const isFalseAndIsAmyOrAyaOrFredOrTed = large === "False" && ["Amy", "Aya", "Fred", "Ted"].includes(avatarType);
  const isFalseAndTed = large === "False" && avatarType === "Ted";
  return (
    <div className={className || `relative size-[32px] ${isFalseAndIsAmyOrAyaOrFredOrTed ? "" : "bg-[#687db1] rounded-[16px]"}`}>
      {isFalseAndIsAmyOrAyaOrFredOrTed && (
        <>
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <g id="Background" />
          </svg>
          <div className={`absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat ${isFalseAndTed ? "mask-size-[32px_32px]" : "mask-size-[100%_100%]"}`} style={{ maskImage: `url("${imgPhoto}")` }} data-name="Photo">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute left-0 max-w-none size-full top-0" src={isFalseAndTed ? imgPhoto4 : large === "False" && avatarType === "Fred" ? imgPhoto3 : large === "False" && avatarType === "Aya" ? imgPhoto2 : imgPhoto1} />
            </div>
          </div>
          <div className={`absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat ${isFalseAndTed ? "mask-size-[32px_32px]" : "mask-size-[100%_100%]"}`} style={{ maskImage: `url("${imgPhoto}")` }} data-name="Inset">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <circle cx="16" cy="16" id="Inset" r="15.5" stroke="#001D54" strokeOpacity="0.1" />
            </svg>
          </div>
        </>
      )}
      {isFalseAndInitials && (
        <>
          <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
          <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center rounded-[32px]" style={{ backgroundImage: "linear-gradient(-1.6699581857140515deg, rgba(10, 31, 87, 0) 0.17019%, rgb(10, 31, 87) 103.23%)" }} data-name="Container">
            <div className="[word-break:break-word] aspect-[40/40] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white uppercase w-full">
              <p className="leading-[normal]">PR</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
type SummaryPanelActionsProps = {
  className?: string;
  avatarSlot?: React.ReactNode | null;
  buttonSlot?: React.ReactNode | null;
  state?: "Promoted actions & Collaborators";
};

function SummaryPanelActions({ className, avatarSlot = null, buttonSlot = null, state = "Promoted actions & Collaborators" }: SummaryPanelActionsProps) {
  return (
    <div className={className || "relative w-[353px]"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="bg-white h-[44px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-col items-start pb-[8px] px-[20px] relative size-full">
            <div className="content-stretch cursor-pointer flex gap-[8px] items-center overflow-clip relative shrink-0" data-name="Button slot">
              {buttonSlot || (
                <>
                  <div className="bg-white h-[32px] max-h-[32px] relative rounded-[8px] shrink-0" data-name="Button">
                    <div aria-hidden className="absolute border border-[#166ec5] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center justify-center max-h-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center max-h-[inherit] px-[16px] relative size-full">
                        <div className="relative shrink-0" data-name="Container">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#166ec5] text-[14px] whitespace-nowrap">
                              <p className="leading-[normal]">Add work</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white h-[32px] max-h-[32px] relative rounded-[8px] shrink-0" data-name="Button">
                    <div aria-hidden className="absolute border border-[#166ec5] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center justify-center max-h-[inherit] size-full">
                      <div className="content-stretch flex items-center justify-center max-h-[inherit] px-[16px] relative size-full">
                        <div className="relative shrink-0" data-name="Container">
                          <div className="content-stretch flex items-start relative size-full">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#166ec5] text-[14px] whitespace-nowrap">
                              <p className="leading-[normal]">Add work</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="bg-white relative shrink-0 w-full" data-name="Collaborators">
          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[20px] relative size-full">
              <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-w-px py-[12px] relative" data-name="Container">
                <div aria-hidden className="absolute border-[#cfcfcf] border-solid border-t inset-0 pointer-events-none" />
                <div className="content-stretch flex items-center relative shrink-0" data-name="Avatar slot">
                  {avatarSlot || (
                    <>
                      <Avatars avatarType="Fred" className="mr-[-4px] relative shrink-0 size-[32px]" />
                      <Avatars avatarType="Aya" className="mr-[-4px] relative shrink-0 size-[32px]" />
                      <Avatars avatarType="Amy" className="mr-[-4px] relative shrink-0 size-[32px]" />
                      <Avatars avatarType="Ted" className="relative shrink-0 size-[32px]" />
                    </>
                  )}
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Collaborator overflow">
                  <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
                    <div className="bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px] shrink-0" data-name="Counter badge">
                      <div aria-hidden className="absolute border border-[rgba(76,90,103,0.1)] border-solid inset-0 pointer-events-none rounded-[9px]" />
                      <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4.5px] relative size-full">
                          <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c5a67] text-[12px] text-center whitespace-nowrap">
                            <p className="leading-[18px]">4</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">
                    <p className="leading-[normal]">collaborators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type SummaryPanelIconTileProps = {
  className?: string;
  type?: "Case";
};

function SummaryPanelIconTile({ className, type = "Case" }: SummaryPanelIconTileProps) {
  return (
    <div className={className || "bg-[#7fb3f5] relative rounded-[8px] shadow-[-4px_4px_8px_0px_rgba(0,0,0,0.2)] size-[32px]"}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[4px] py-[10px] relative size-full">
          <div className="content-stretch flex items-center justify-center overflow-clip px-[4px] py-[10px] relative rounded-[8px] shrink-0 size-[32px]" style={{ backgroundImage: "linear-gradient(42.76882736632039deg, rgba(0, 8, 23, 0.8) 32.001%, rgba(0, 29, 84, 0) 92.248%)" }} data-name="Gradiant">
            <div className="relative shrink-0 size-[18px]" data-name="Icon component">
              <div className="absolute inset-0" data-name="Icon: ---">
                <div className="absolute inset-[8%_0_0_0]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" height="16.56" preserveAspectRatio="none" viewBox="0 0 18 16.56" width="18">
                    <g id="Vector">
                      <path clipRule="evenodd" d={svgPaths.p104a0f00} fill="white" fillRule="evenodd" />
                      <path d={svgPaths.p1b1fdd80} fill="white" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeaderName() {
  return (
    <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0" data-name="Header name">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#081e5b] text-[17.7px] whitespace-nowrap">
        <p className="leading-[normal]">AGClaimsC11n</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
      <div className="h-[31px] relative shrink-0 w-[70px]" data-name="image 54">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage54} />
      </div>
      <HeaderName />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex items-center left-0 pl-[16px] top-0" data-name="Header">
      <Content />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-start justify-end right-[16px] top-[8px]" data-name="Container">
      <div className="bg-[rgba(0,29,84,0)] cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Buttons">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
          <div className="absolute inset-0" data-name="Icon">
            <div className="absolute inset-[0_1.92%_1.92%_0]" data-name="Color">
              <svg className="absolute block inset-0 size-full" fill="none" height="17.6552" preserveAspectRatio="none" viewBox="0 0 17.6546 17.6552" width="17.6546">
                <path clipRule="evenodd" d={svgPaths.p27e4680} fill="#001D54" fillRule="evenodd" id="Color" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Avatars className="bg-[#687db1] relative rounded-[16px] shrink-0 size-[32px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-center justify-center relative rounded-bl-[16px] rounded-tl-[16px] shrink-0" data-name="Container">
        <div aria-hidden className="absolute border-[#939393] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[16px] rounded-tl-[16px]" />
        <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon button">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
            <div className="absolute inset-0" data-name="Icon: ---">
              <div className="absolute inset-[16%_9.46%_17.33%_12%]" data-name="Color">
                <svg className="absolute block inset-0 size-full" fill="none" height="11.9998" preserveAspectRatio="none" viewBox="0 0 14.1373 11.9998" width="14.1373">
                  <path clipRule="evenodd" d={svgPaths.p35b60580} fill="#001D54" fillRule="evenodd" id="Color" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
        <div aria-hidden className="absolute border border-[#939393] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[8px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[rgba(0,29,84,0.7)] w-[421px]">
              <p className="leading-[normal]">{` `}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
          <div className="absolute inset-0" data-name="Icon: ---">
            <div className="absolute inset-[4%_5.58%_5.58%_4%]" data-name="Color">
              <svg className="absolute block inset-0 size-full" fill="none" height="16.2759" preserveAspectRatio="none" viewBox="0 0 16.2754 16.2759" width="16.2754">
                <path clipRule="evenodd" d={svgPaths.p3f38c200} fill="#001D54" fillRule="evenodd" id="Color" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="content-stretch flex flex-col h-full items-start justify-center px-[5px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0" data-name="Container">
        <div aria-hidden className="absolute border-[#939393] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[16px] rounded-tr-[16px]" />
        <Container4 />
      </div>
    </div>
  );
}

function AppHeader() {
  return (
    <div className="absolute bg-white h-[48px] left-0 right-0 top-0" data-name=".App header">
      <Header />
      <Container />
      <div className="absolute bg-white left-[28.33%] right-[30%] rounded-[16px] top-[8px]" data-name="Search input - Enhanced">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center relative size-full">
            <Container1 />
            <Container2 />
            <Container3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e2e6f3] relative rounded-[100px] shrink-0" data-name="Notifications">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[11px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div className="absolute inset-[4%_9.62%_5.78%_8%]" data-name="Color">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.2405" preserveAspectRatio="none" viewBox="0 0 14.8281 16.2405" width="14.8281">
                  <path clipRule="evenodd" d={svgPaths.p22224880} fill="#001D54" fillRule="evenodd" id="Color" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e2e6f3] relative rounded-[100px] shrink-0" data-name="Recents">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[11px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div className="absolute inset-[0_1.91%_1.91%_0]" data-name="Color">
                <svg className="absolute block inset-0 size-full" fill="none" height="17.6558" preserveAspectRatio="none" viewBox="0 0 17.6558 17.6558" width="17.6558">
                  <path clipRule="evenodd" d={svgPaths.p18940e00} fill="#001D54" fillRule="evenodd" id="Color" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e2e6f3] relative rounded-[100px] shrink-0" data-name="Expand/Collapse">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[12px] py-[9px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Expand toggle">
              <div className="absolute bg-[#a3abd5] left-0 rounded-[8px] size-[24px] top-0" data-name="Background" />
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="arrow-micro-right">
                <div className="absolute inset-[32%_40.46%_32.75%_40%]" data-name="Color">
                  <svg className="absolute block inset-0 size-full" fill="none" height="8.46" preserveAspectRatio="none" viewBox="0 0 4.68975 8.46" width="4.68975">
                    <path clipRule="evenodd" d={svgPaths.p9e7300} fill="#001D54" fillRule="evenodd" id="Color" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterContainer() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-end left-0 overflow-clip px-px w-[64px]" data-name="Footer container">
      <Container5 />
    </div>
  );
}

function NavItem() {
  return (
    <div className="bg-[rgba(0,31,95,0.1)] content-stretch flex items-center p-[11px] relative rounded-[100px] shrink-0" data-name="Nav item">
      <div aria-hidden className="absolute border border-[#001d54] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[8%_1.92%_5.6%_0]" data-name="Color">
          <svg className="absolute block inset-0 size-full" fill="none" height="15.552" preserveAspectRatio="none" viewBox="0 0 17.6552 15.552" width="17.6552">
            <path clipRule="evenodd" d={svgPaths.p8ea9180} fill="#001D54" fillRule="evenodd" id="Color" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-center left-0 overflow-clip px-[12px] top-[8px]" data-name="Container">
      <div className="bg-[#f5f5fc] relative rounded-[100px] shrink-0" data-name="Create">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[11px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div className="absolute inset-[8%_9.63%_9.63%_8%]" data-name="Color">
                <svg className="absolute block inset-0 size-full" fill="none" height="14.8271" preserveAspectRatio="none" viewBox="0 0 14.8271 14.8271" width="14.8271">
                  <path d={svgPaths.p1adec200} fill="#001D54" id="Color" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[100px] shrink-0 w-[40px]" data-name="Home">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <NavItem />
          </div>
        </div>
      </div>
      <div className="bg-[#e2e6f3] relative rounded-[100px] shrink-0" data-name="My work">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[11px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div className="absolute inset-[0_13.31%_1.91%_16%]" data-name="Color">
                <svg className="absolute block inset-0 size-full" fill="none" height="17.6563" preserveAspectRatio="none" viewBox="0 0 12.7243 17.6563" width="12.7243">
                  <path clipRule="evenodd" d={svgPaths.p3ddec880} fill="#001D54" fillRule="evenodd" id="Color" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e2e6f3] relative rounded-[100px] shrink-0" data-name="Explore Data">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[11px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div className="absolute inset-[0_3.64%_3.82%_0]" data-name="Color">
                <svg className="absolute block inset-0 size-full" fill="none" height="17.3115" preserveAspectRatio="none" viewBox="0 0 17.3445 17.3115" width="17.3445">
                  <path clipRule="evenodd" d={svgPaths.p32b19b00} fill="#001D54" fillRule="evenodd" id="Color" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#e2e6f3] relative rounded-[100px] shrink-0" data-name="Dashboard">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[11px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div className="absolute inset-[12%_0_11.83%_0]" data-name="Color">
                <svg className="absolute block inset-0 size-full" fill="none" height="13.71" preserveAspectRatio="none" viewBox="0 0 18 13.71" width="18">
                  <path clipRule="evenodd" d={svgPaths.p1db4cf00} fill="#001D54" fillRule="evenodd" id="Color" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[16px] shrink-0" data-name="Records manager">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center p-[11px] relative size-full">
            <div className="relative shrink-0 size-[18px]" data-name="Icon">
              <div className="absolute inset-[4%_9.62%_5.58%_8%]" data-name="Color">
                <svg className="absolute block inset-0 size-full" fill="none" height="16.2759" preserveAspectRatio="none" viewBox="0 0 14.8275 16.2759" width="14.8275">
                  <path clipRule="evenodd" d={svgPaths.p35a87680} fill="#001D54" fillRule="evenodd" id="Color" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Null" />
      <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Null" />
      <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Null" />
      <div className="relative rounded-[16px] shrink-0 size-[40px]" data-name="Null" />
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="Icon">
      <SummaryPanelIconTile className="bg-[#7fb3f5] relative rounded-[8px] shadow-[-4px_4px_8px_0px_rgba(0,0,0,0.2)] shrink-0 size-[32px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[213px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[19.9px] whitespace-nowrap">
        <p className="leading-[normal]">Claim File</p>
      </div>
      <div className="min-h-[17px] relative shrink-0" data-name="Breadcrumbs">
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="[word-break:break-word] content-stretch flex font-['Roboto_flex:Regular',sans-serif] gap-[4px] items-center justify-center leading-[0] min-h-[inherit] not-italic py-px relative size-full text-[#001d54] text-[12px] whitespace-nowrap">
            <div className="flex flex-col justify-center relative shrink-0">
              <p className="leading-[normal]">Contact</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0">
              <p className="leading-[normal]">•</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0">
              <p className="leading-[normal]">CF-1403562</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch cursor-pointer flex items-start pt-[8px] relative shrink-0" data-name="Container">
      <div className="bg-[rgba(0,29,84,0)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon button: pencil">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
          <div className="absolute inset-0" data-name="Icon: ---">
            <div className="absolute inset-[12%_13.48%_13.47%_12%]" data-name="More">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.4145" preserveAspectRatio="none" viewBox="0 0 13.4139 13.4145" width="13.4139">
                <path clipRule="evenodd" d={svgPaths.p2b203300} fill="#001D54" fillRule="evenodd" id="Color" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(0,29,84,0)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon button: more">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
          <div className="absolute inset-0" data-name="Icon: ---">
            <div className="absolute inset-[12%_40.29%_13.28%_44%]" data-name="More">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.4488" preserveAspectRatio="none" viewBox="0 0 2.82825 13.4488" width="2.82825">
                <path clipRule="evenodd" d={svgPaths.p27ad6300} fill="#001D54" fillRule="evenodd" id="Color" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start px-[20px] relative size-full">
        <div className="flex-[1_0_0] min-w-px relative" data-name="Header">
          <div className="content-stretch flex flex-col items-start py-[4px] relative size-full">
            <Container10 />
          </div>
        </div>
        <Container12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex font-['Roboto_flex:Regular',sans-serif] gap-[4px] items-end overflow-clip relative shrink-0 w-[212px] whitespace-nowrap" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3f57e4]">
        <p className="leading-[normal]">--/ --</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#001d54]">
        <p className="leading-[normal]">--</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex font-['Roboto_flex:Regular',sans-serif] gap-[4px] items-end overflow-clip relative shrink-0 w-[212px] whitespace-nowrap" data-name="Container">
      <div className="flex flex-col justify-center relative shrink-0 text-[#3f57e4]">
        <p className="leading-[normal]">-- /, / --</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#001d54]">
        <p className="leading-[normal]">1year ago</p>
      </div>
    </div>
  );
}

function ListItems() {
  return (
    <div className="content-stretch flex flex-col gap-[3.5px] items-start relative shrink-0 w-full" data-name="List items">
      <div className="max-w-[790px] relative shrink-0 w-full" data-name="Items - 1">
        <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
            <p className="leading-[normal]">Work Status</p>
          </div>
          <p className="font-['Roboto_flex:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#001d54] w-[212px]">OPEN</p>
        </div>
      </div>
      <div className="max-w-[790px] relative shrink-0 w-full" data-name="Items - 2">
        <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
            <p className="leading-[normal]">Priority Flag</p>
          </div>
          <p className="font-['Roboto_flex:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#3f57e4] w-[212px]">Yes</p>
        </div>
      </div>
      <div className="max-w-[790px] relative shrink-0 w-full" data-name="Items - 3">
        <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
            <p className="leading-[normal]">ClaimID</p>
          </div>
          <p className="font-['Roboto_flex:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#3f57e4] w-[212px]">0000389534323/03</p>
        </div>
      </div>
      <div className="max-w-[790px] relative shrink-0 w-full" data-name="Items - 4">
        <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
            <p className="leading-[normal]">Contract N</p>
          </div>
          <p className="font-['Roboto_flex:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#001d54] w-[212px]">--</p>
        </div>
      </div>
      <div className="max-w-[790px] relative shrink-0 w-full" data-name="Items - 5">
        <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
            <p className="leading-[normal]">Policy Holder</p>
          </div>
          <p className="font-['Roboto_flex:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#001d54] w-[212px]">--</p>
        </div>
      </div>
      <div className="max-w-[790px] relative shrink-0 w-full" data-name="Items - 7">
        <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
            <p className="leading-[normal]">Risk Involved</p>
          </div>
          <p className="font-['Roboto_flex:Regular',sans-serif] leading-[normal] relative shrink-0 text-[#001d54] w-[212px]">--</p>
        </div>
      </div>
      <div className="max-w-[790px] relative shrink-0 w-full" data-name="Items - 6">
        <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start leading-[0] max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
            <p className="leading-[normal]">Data of Loss/Barema</p>
          </div>
          <Container13 />
        </div>
      </div>
      <div className="max-w-[790px] relative shrink-0 w-full" data-name="Items - 8">
        <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start leading-[0] max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
          <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
            <p className="leading-[normal]">Responsibility/Agent</p>
          </div>
          <Container14 />
        </div>
      </div>
    </div>
  );
}

function Data() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Data">
      <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] relative size-full">
        <ListItems />
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex items-start py-[20px] relative shrink-0 w-full" data-name="Content">
      <Data />
    </div>
  );
}

function FieldGroupItem() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".Field group item">
      <Content1 />
    </div>
  );
}

function FieldValueList() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Field value list">
      <FieldGroupItem />
    </div>
  );
}

function SelectedIndicator() {
  return <div className="bg-[#3f57e4] h-[30px] relative shrink-0 w-[4px]" data-name="Selected indicator" />;
}

function Label() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="Label">
      <SelectedIndicator />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_Flex:Bold',sans-serif] font-bold justify-center leading-[0] min-w-px not-italic relative text-[#3f57e4] text-[14px]" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
        <p className="leading-[normal]">Overview</p>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="Content">
      <Label />
    </div>
  );
}

function VerticalTabs1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative rounded-bl-[20px] rounded-br-[20px] w-full" data-name="Vertical tabs">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[20px] relative size-full">
          <div className="bg-[rgba(58,83,233,0.1)] min-w-[350px] relative rounded-br-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Opportunities">
            <div className="flex flex-row items-center min-w-[inherit] size-full">
              <div className="content-stretch flex items-center min-w-[inherit] pr-[12px] relative size-full">
                <Content2 />
              </div>
            </div>
          </div>
          <button className="bg-white cursor-pointer min-h-[30px] min-w-[350px] relative rounded-[8px] shrink-0 w-full" data-name=".Vertical tabs">
            <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pl-[16px] pr-[12px] py-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[14px] text-left">
                  <p className="leading-[normal]">History</p>
                </div>
              </div>
            </div>
          </button>
          <button className="bg-white cursor-pointer min-h-[30px] min-w-[350px] relative rounded-[8px] shrink-0 w-full" data-name=".Vertical tabs">
            <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pl-[16px] pr-[12px] py-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[14px] text-left">
                  <p className="leading-[normal]">{`Persons & Objects`}</p>
                </div>
              </div>
            </div>
          </button>
          <button className="bg-white cursor-pointer min-h-[30px] min-w-[350px] relative rounded-[8px] shrink-0 w-full" data-name=".Vertical tabs">
            <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pl-[16px] pr-[12px] py-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[14px] text-left">
                  <p className="leading-[normal]">Missions</p>
                </div>
              </div>
            </div>
          </button>
          <button className="bg-white cursor-pointer min-h-[30px] min-w-[350px] relative rounded-[8px] shrink-0 w-full" data-name=".Vertical tabs">
            <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pl-[16px] pr-[12px] py-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[14px] text-left">
                  <p className="leading-[normal]">Financials</p>
                </div>
              </div>
            </div>
          </button>
          <button className="bg-white cursor-pointer min-h-[30px] min-w-[350px] relative rounded-[8px] shrink-0 w-full" data-name=".Vertical tabs">
            <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pl-[16px] pr-[12px] py-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[14px] text-left">
                  <p className="leading-[normal]">Documents</p>
                </div>
              </div>
            </div>
          </button>
          <button className="bg-white cursor-pointer min-h-[30px] min-w-[350px] relative rounded-[8px] shrink-0 w-full" data-name=".Vertical tabs">
            <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pl-[16px] pr-[12px] py-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[14px] text-left">
                  <p className="leading-[normal]">Case Log</p>
                </div>
              </div>
            </div>
          </button>
          <button className="bg-white cursor-pointer min-h-[30px] min-w-[350px] relative rounded-[8px] shrink-0 w-full" data-name=".Vertical tabs">
            <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
              <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pl-[16px] pr-[12px] py-[6px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[14px] text-left">
                  <p className="leading-[normal]">Case Hierarchy</p>
                </div>
              </div>
            </div>
          </button>
          <VerticalTabs className="bg-white h-[28px] min-w-[350px] relative rounded-[8px] shrink-0 w-full" tabType="Null" />
          <VerticalTabs className="bg-white h-[28px] min-w-[350px] relative rounded-[8px] shrink-0 w-full" tabType="Null" />
        </div>
      </div>
    </div>
  );
}

function SummaryInfo() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-[400px]" data-name="Summary info">
      <FieldValueList />
      <div className="bg-[#e2e6f3] h-px relative shrink-0 w-full" data-name="Separator">
        <div className="-translate-y-1/2 absolute bg-[#cfcfcf] h-px left-0 right-0 top-1/2" data-name="Background" />
      </div>
      <VerticalTabs1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[400px]" data-name="Container">
      <div className="bg-white relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name=".Summary panel header">
        <div className="content-stretch flex flex-col gap-[10px] items-start pt-[10px] relative size-full">
          <Container9 />
          <SummaryPanelActions className="relative shrink-0 w-full" />
        </div>
      </div>
      <SummaryInfo />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Container">
      <Container8 />
      <div className="absolute bg-white drop-shadow-[0px_0px_12.5px_rgba(0,0,0,0.25)] left-[388px] rounded-[8px] size-[24px] top-[20px]" data-name="Collapse toggle">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Icon">
          <div className="absolute inset-[32%_40.46%_32.75%_40%]" data-name="Color">
            <svg className="absolute block inset-0 size-full" fill="none" height="8.46" preserveAspectRatio="none" viewBox="0 0 4.68975 8.46" width="4.68975">
              <path clipRule="evenodd" d={svgPaths.p1a204280} fill="#3F57E4" fillRule="evenodd" id="Color" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryPanelContainer() {
  return (
    <div className="h-full relative shrink-0" data-name="Summary panel container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center py-[16px] relative size-full">
          <div className="bg-white h-full relative rounded-[16px] shrink-0 w-[400px]" data-name=".Summary panel">
            <div className="content-stretch flex items-start relative size-full">
              <Container7 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[32px] relative shrink-0 w-[18px]" data-name="Container">
      <div className="absolute left-[0.17px] size-[18px] top-[7px]" data-name="Icon">
        <div className="absolute inset-[16%_4.07%_19.06%_8%]" data-name="Check">
          <svg className="absolute block inset-0 size-full" fill="none" height="11.6893" preserveAspectRatio="none" viewBox="0 0 15.8276 11.6893" width="15.8276">
            <path clipRule="evenodd" d={svgPaths.p13660800} fill="#20AA50" fillRule="evenodd" id="Check" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0" data-name="Container">
      <Container17 />
      <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[32px] not-italic overflow-hidden relative shrink-0 text-[#156f35] text-[14px] text-center text-ellipsis whitespace-nowrap">Completed</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] relative size-full">
          <Container16 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#3a53e9] content-stretch flex h-full items-center justify-center px-[8px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
        <p className="leading-[32px]">Doing</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-full items-center justify-center pl-[8px] relative shrink-0 w-[67px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-center text-ellipsis whitespace-nowrap">
        <p className="leading-[32px] overflow-hidden text-ellipsis">Pending</p>
      </div>
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[160.004px]" data-name="Header">
      <CaretDown className="relative shrink-0 size-[18px]" />
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[17.7px] whitespace-nowrap">Assignments</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="Card header">
      <div className="content-stretch flex flex-col items-start px-[20px] relative size-full">
        <Header1 />
      </div>
    </div>
  );
}

function ItemLabel() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
      <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 1] Assignment name</p>
    </div>
  );
}

function ContentLeft() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] relative size-full">
          <ItemLabel />
        </div>
      </div>
    </div>
  );
}

function Metadata() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
      <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
      <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
    </div>
  );
}

function ContentRight() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
      <Metadata />
      <div className="bg-[#3f57e4] h-[24px] relative rounded-[8px] shrink-0" data-name="Button(Compact): Go">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Go</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
      <ContentLeft />
      <ContentRight />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#d4f7d5] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#156f35] text-[12px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">resolved-completed</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentLeft1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0" data-name="Content (left)">
      <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3f57e4] text-[14px] whitespace-nowrap">[Tier 2] Case name</p>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] whitespace-nowrap">
        <p className="leading-[normal]">CASE ID-12345</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <div className="relative shrink-0" data-name="Status badge">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container22 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Case() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Case">
      <div className="bg-[rgba(0,29,84,0)] cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Buttons">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
          <div className="absolute inset-0" data-name="Icon: ---">
            <div className="absolute inset-[32%_9.46%_32.75%_12%]" data-name="Color">
              <svg className="absolute block inset-0 size-full" fill="none" height="6.345" preserveAspectRatio="none" viewBox="0 0 14.1379 6.345" width="14.1379">
                <path clipRule="evenodd" d={svgPaths.p1a8b1d00} fill="#001D54" fillRule="evenodd" id="Color" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ContentLeft1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
      <Case />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#e9eef3] h-[16px] max-h-[16px] relative rounded-[8px] shrink-0" data-name="Container">
      <div className="content-stretch flex items-start max-h-[inherit] overflow-clip px-[4px] relative rounded-[inherit] size-full">
        <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] max-h-[16px] not-italic relative shrink-0 text-[#4c5a67] text-[12px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">In progress</p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentLeft2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0" data-name="Content (left)">
      <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3f57e4] text-[14px] whitespace-nowrap">[Tier 3] Case name</p>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] whitespace-nowrap">
        <p className="leading-[normal]">CASE ID-12345</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <div className="h-[16px] max-h-[16px] relative shrink-0" data-name="Status badge">
        <div className="flex flex-col items-center justify-center max-h-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center max-h-[inherit] relative size-full">
            <Container24 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Case1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Case">
      <div className="bg-[rgba(0,29,84,0)] cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Buttons">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
          <div className="absolute inset-0" data-name="Icon: ---">
            <div className="absolute inset-[32%_9.46%_32.75%_12%]" data-name="Color">
              <svg className="absolute block inset-0 size-full" fill="none" height="6.345" preserveAspectRatio="none" viewBox="0 0 14.1379 6.345" width="14.1379">
                <path clipRule="evenodd" d={svgPaths.p1a8b1d00} fill="#001D54" fillRule="evenodd" id="Color" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ContentLeft2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
      <Case1 />
    </div>
  );
}

function ItemLabel1() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
      <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 3] Assignment name</p>
    </div>
  );
}

function ContentLeft3() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4px] relative size-full">
          <ItemLabel1 />
        </div>
      </div>
    </div>
  );
}

function Metadata1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
      <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
      <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
    </div>
  );
}

function ContentRight1() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
      <Metadata1 />
      <div className="bg-[#3f57e4] h-[24px] relative rounded-[8px] shrink-0" data-name="Button(Compact): Go">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Go</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
      <ContentLeft3 />
      <ContentRight1 />
    </div>
  );
}

function ItemLabel2() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
      <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 3] Assignment name</p>
    </div>
  );
}

function ContentLeft4() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4px] relative size-full">
          <ItemLabel2 />
        </div>
      </div>
    </div>
  );
}

function Metadata2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
      <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
      <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
    </div>
  );
}

function ContentRight2() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
      <Metadata2 />
      <div className="bg-[#3f57e4] h-[24px] relative rounded-[8px] shrink-0" data-name="Button(Compact): Go">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Go</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
      <ContentLeft4 />
      <ContentRight2 />
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#d4f7d5] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#156f35] text-[12px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Resolved-completed</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function ContentLeft5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] relative shrink-0" data-name="Content (left)">
      <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3f57e4] text-[14px] whitespace-nowrap">[Tier 3] Case name</p>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] whitespace-nowrap">
        <p className="leading-[normal]">CASE ID-12345</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <div className="relative shrink-0" data-name="Status badge">
        <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container28 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Case2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Case">
      <div className="bg-[rgba(0,29,84,0)] cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Buttons">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
          <div className="absolute inset-0" data-name="Icon: ---">
            <div className="absolute inset-[32%_9.46%_32.75%_12%]" data-name="Color">
              <svg className="absolute block inset-0 size-full" fill="none" height="6.345" preserveAspectRatio="none" viewBox="0 0 14.1379 6.345" width="14.1379">
                <path clipRule="evenodd" d={svgPaths.p1a8b1d00} fill="#001D54" fillRule="evenodd" id="Color" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ContentLeft5 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
      <Case2 />
    </div>
  );
}

function ItemLabel3() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
      <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 3] Assignment name</p>
    </div>
  );
}

function ContentLeft6() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4px] relative size-full">
          <ItemLabel3 />
        </div>
      </div>
    </div>
  );
}

function Metadata3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
      <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
      <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
    </div>
  );
}

function ContentRight3() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
      <Metadata3 />
      <div className="bg-[#3f57e4] h-[24px] relative rounded-[8px] shrink-0" data-name="Button(Compact): Go">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Go</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
      <ContentLeft6 />
      <ContentRight3 />
    </div>
  );
}

function ItemLabel4() {
  return (
    <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
      <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 3] Assignment name</p>
    </div>
  );
}

function ContentLeft7() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[4px] relative size-full">
          <ItemLabel4 />
        </div>
      </div>
    </div>
  );
}

function Metadata4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
      <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
      <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
        <p className="leading-[normal]">•</p>
      </div>
      <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
    </div>
  );
}

function ContentRight4() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
      <Metadata4 />
      <div className="bg-[#3f57e4] h-[24px] relative rounded-[8px] shrink-0" data-name="Button(Compact): Go">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
              <p className="leading-[normal]">Go</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
      <ContentLeft7 />
      <ContentRight4 />
    </div>
  );
}

function List() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="List">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <div className="relative rounded-tr-[8px] shrink-0 w-full" data-name="Case">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center px-[20px] py-[8px] relative size-full">
              <Container20 />
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center px-[20px] py-[8px] relative size-full">
              <Container21 />
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[17px] pr-[16px] py-[8px] relative size-full">
              <Container23 />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[62px] pr-[16px] py-[8px] relative size-full">
              <Container25 />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[62px] pr-[16px] py-[8px] relative size-full">
              <Container26 />
            </div>
          </div>
        </div>
        <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[17px] pr-[16px] py-[8px] relative size-full">
              <Container27 />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center pl-[62px] pr-[16px] py-[8px] relative size-full">
              <Container29 />
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex items-center pl-[62px] pr-[16px] py-[8px] relative size-full">
              <Container30 />
            </div>
          </div>
          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function HierarchicalTable() {
  return (
    <div className="relative shrink-0 w-full" data-name="Hierarchical table">
      <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
        <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name=".Hierarchical assignments list">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start relative size-full">
              <List />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pt-[20px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card container">
      <CardHeader />
      <HierarchicalTable />
    </div>
  );
}

function SubheaderContainer() {
  return (
    <div className="content-stretch flex items-center pb-[4px] relative shrink-0 w-full" data-name="Subheader container">
      <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[17.7px] whitespace-nowrap">Overview</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#3f57e4] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:Bold',sans-serif] font-bold justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[#3f57e4] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
        <p className="leading-[30px]">General</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="bg-white relative shrink-0" data-name="Summary">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container34 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Details">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">EAF</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Pulse">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">FNOL</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 244, 250) 0%, rgb(243, 244, 250) 100%), linear-gradient(90deg, rgb(226, 230, 243) 0%, rgb(226, 230, 243) 100%)" }} data-name="List">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">RDR</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Utilities">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">Prior Losses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Container">
      <Container33 />
    </div>
  );
}

function FieldValueItems() {
  return (
    <div className="content-stretch flex gap-[16px] h-[24px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Coverage</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">R.C. Auto, Dégâts Matériels Top Omnium</p>
    </div>
  );
}

function FieldValueItems1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Loss cause</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">TCCAUS:TCCAUS.700Collision avec un autre véhicule</p>
    </div>
  );
}

function FieldValueItems2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">No of counterparties</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">TCCAUS:TCCAUS.700Collision avec un autre véhicule</p>
    </div>
  );
}

function FieldValueItems3() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Country</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">TCPYPL:TCPYPL.BBelgique</p>
    </div>
  );
}

function FieldValueItems4() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Loss Place</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative self-stretch text-[#001d54]">, 9999 Onbekende Lokaliteit</p>
    </div>
  );
}

function FieldValueItems5() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Recourse</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">TORECO:TORECO.3Possible</p>
    </div>
  );
}

function FieldValueItems6() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Reason of recourse</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">TORECO:TORECO.3Possible</p>
    </div>
  );
}

function FieldValueItems7() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Injuries</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">No</p>
    </div>
  );
}

function DataTemplates() {
  return (
    <div className="relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Data templates">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic px-[20px] relative size-full text-[14px]">
        <FieldValueItems />
        <FieldValueItems1 />
        <FieldValueItems2 />
        <FieldValueItems3 />
        <FieldValueItems4 />
        <FieldValueItems5 />
        <FieldValueItems6 />
        <FieldValueItems7 />
      </div>
    </div>
  );
}

function FieldValueItems8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[24px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Severity</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">TCGRVT:TCGRVT.1Cas benin</p>
    </div>
  );
}

function FieldValueItems9() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Police Report</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">No</p>
    </div>
  );
}

function FieldValueItems10() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Cel</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#3f57e4]">AG TEAM REGION SUD, 02/6644001</p>
    </div>
  );
}

function FieldValueItems11() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Owner</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">Grebeude Vanessa, 02/6644908</p>
    </div>
  );
}

function FieldValueItems12() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Product Code</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative self-stretch text-[#001d54]">5001 - Toerisme en zaken of gemengd gebruik</p>
    </div>
  );
}

function FieldValueItems13() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Date opened</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">27/08/2026</p>
    </div>
  );
}

function FieldValueItems14() {
  return (
    <div className="content-stretch flex gap-[16px] items-start py-[4px] relative shrink-0 w-full" data-name="Field value items">
      <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
        <p className="leading-[normal]">Communication channel</p>
      </div>
      <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">TCSUPT:TCSUPT.96E-RDR</p>
    </div>
  );
}

function DataTemplates1() {
  return (
    <div className="relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Data templates">
      <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic pb-[16px] px-[20px] relative size-full text-[14px]">
        <FieldValueItems8 />
        <FieldValueItems9 />
        <FieldValueItems10 />
        <FieldValueItems11 />
        <FieldValueItems12 />
        <FieldValueItems13 />
        <FieldValueItems14 />
      </div>
    </div>
  );
}

function DataTemplatesDetached() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0 w-full" data-name="Data templates - detached">
      <DataTemplates />
      <DataTemplates1 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div aria-hidden className="absolute border border-[#cfcfcf] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 244, 250) 0%, rgb(243, 244, 250) 100%), linear-gradient(90deg, rgb(226, 230, 243) 0%, rgb(226, 230, 243) 100%)" }} data-name="Horizontal tabs">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Container32 />
          </div>
        </div>
        <div aria-hidden className="absolute border-0 border-[#cfd5e2] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      </div>
      <DataTemplatesDetached />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[16px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card">
      <Container31 />
    </div>
  );
}

function Details() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Details">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[16px] px-[20px] relative size-full">
        <SubheaderContainer />
        <Card />
      </div>
    </div>
  );
}

function WorkArea() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="Work area">
      <div className="relative rounded-[8px] shrink-0 w-full" data-name="Assignments">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Life cycle">
            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-center justify-between relative size-full">
                <div className="flex-[1_0_0] min-w-px relative" data-name="Stage 1">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center relative size-full">
                      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
                        <div className="bg-[#f6fef6] flex-[1_0_0] h-full min-w-px relative" data-name="Container">
                          <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex items-center justify-center relative size-full">
                              <Container15 />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-[#3a53e9] h-[42px] relative shrink-0 w-[20px]" data-name="Shape">
                        <div className="absolute h-[41px] left-0 top-0 w-[17px]" data-name="Mask" />
                        <div className="absolute h-[42px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[20px_42px] right-[8px] top-0 w-[12px]" style={{ maskImage: `url("${imgBorder1}")` }} data-name="Border">
                          <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 12 42" width="12">
                            <g id="Border">
                              <mask fill="white" id="path-1-inside-1_0_1617">
                                <path clipRule="evenodd" d="M0 0L12 21L0 42" fillRule="evenodd" />
                              </mask>
                              <path clipRule="evenodd" d="M0 0L12 21L0 42" fill="#F6FEF6" fillRule="evenodd" />
                              <path d={svgPaths.p1478cf00} fill="#CFCFCF" mask="url(#path-1-inside-1_0_1617)" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-w-px relative" data-name="Stage 2">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center relative size-full">
                      <div className="bg-[#3a53e9] flex-[1_0_0] h-[42px] min-w-px relative" data-name=".Stage content">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <Container18 />
                          </div>
                        </div>
                      </div>
                      <CaseLifecycleShape className="bg-white h-[42px] relative shrink-0 w-[20px]" />
                    </div>
                  </div>
                </div>
                <div className="flex-[1_0_0] min-w-px relative" data-name="Stage 3">
                  <div className="flex flex-row items-center justify-center size-full">
                    <div className="content-stretch flex items-center justify-center relative size-full">
                      <div className="bg-white flex-[1_0_0] h-[42px] min-w-px relative" data-name="Container">
                        <div className="flex flex-row items-center justify-center size-full">
                          <div className="content-stretch flex items-center justify-center relative size-full">
                            <Container19 />
                          </div>
                        </div>
                      </div>
                      <div className="bg-white h-[42px] relative rounded-tr-[8px] shrink-0 w-[20px]" data-name="Shape">
                        <div className="absolute h-[32px] right-0 top-0 w-[16px]" data-name="Mask" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none rounded-tl-[16px] rounded-tr-[16px]" />
          </div>
          <CardContainer />
        </div>
      </div>
      <Details />
    </div>
  );
}

function ExpandToggle() {
  return (
    <div className="content-stretch flex items-end pr-[8px] relative shrink-0" data-name="Expand toggle">
      <SummaryCollpaseToggleButton className="bg-white relative rounded-[8px] shrink-0 size-[24px]" />
    </div>
  );
}

function IconBackground() {
  return (
    <div className="bg-[#3c877e] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[24px]" data-name="Icon background">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[8%_13.31%_13.46%_16%]" data-name="Color">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.1379" preserveAspectRatio="none" viewBox="0 0 12.7243 14.1379" width="12.7243">
            <path clipRule="evenodd" d={svgPaths.p195441f0} fill="white" fillRule="evenodd" id="Color" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Attachments() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Attachments">
      <IconBackground />
      <CounterBadge className="bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px] shrink-0" />
    </div>
  );
}

function IconBackground1() {
  return (
    <div className="bg-[#274478] content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[24px]" data-name="Icon background">
      <div className="relative shrink-0 size-[18px]" data-name="Icon">
        <div className="absolute inset-[8%_7.68%_13.45%_4%]" data-name="Color">
          <svg className="absolute block inset-0 size-full" fill="none" height="14.1384" preserveAspectRatio="none" viewBox="0 0 15.8974 14.1384" width="15.8974">
            <path clipRule="evenodd" d={svgPaths.p7285300} fill="white" fillRule="evenodd" id="Color" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Followers() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0" data-name="Followers">
      <IconBackground1 />
      <div className="bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px] shrink-0 w-[31px]" data-name="Counter">
        <div aria-hidden className="absolute border border-[rgba(76,90,103,0.1)] border-solid inset-0 pointer-events-none rounded-[9px]" />
        <div className="flex flex-col items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-center justify-center min-w-[inherit] px-[4.5px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4c5a67] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[18px]">99+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThumbnailsContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-center overflow-clip px-[4px] py-[8px] relative rounded-[8px] shrink-0" data-name="Thumbnails container">
      <Attachments />
      <Followers />
    </div>
  );
}

function UtilitiesPanel() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-end p-[20px] relative rounded-bl-[16px] rounded-tl-[16px] shrink-0" data-name="Utilities panel">
      <ExpandToggle />
      <ThumbnailsContainer />
    </div>
  );
}

function GenAiCoachWidget() {
  return (
    <div className="content-stretch flex items-center pr-[16px] relative shrink-0" data-name="GenAI Coach widget">
      <div className="bg-[#681fc3] cursor-pointer relative rounded-[8px] shrink-0 size-[44px]" data-name="AI widget button">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
          <div className="absolute inset-0" data-name="Icon: ---">
            <div className="absolute inset-[0_1.92%_1.91%_0]" data-name="More">
              <svg className="absolute block inset-0 size-full" fill="none" height="17.6558" preserveAspectRatio="none" viewBox="0 0 17.6552 17.6558" width="17.6552">
                <path clipRule="evenodd" d={svgPaths.p37f81b00} fill="white" fillRule="evenodd" id="Color" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageContent() {
  return (
    <div className="absolute content-stretch flex gap-[20px] h-[952px] items-start left-[484px] pl-[20px] pt-[20px] right-0 top-[48px]" data-name="Page content">
      <WorkArea />
      <div className="h-full relative rounded-bl-[16px] rounded-tl-[16px] shrink-0" data-name=".Utilities panel (default)">
        <div className="flex flex-col items-end justify-center size-full">
          <div className="content-stretch flex flex-col items-end justify-between pb-[16px] relative size-full">
            <UtilitiesPanel />
            <GenAiCoachWidget />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OverviewGeneral() {
  return (
    <div className="bg-[#e2e6f3] relative size-full" data-name="Overview - General">
      <AppHeader />
      <div className="absolute h-[952px] left-0 top-[48px]" data-name=".Navigation + summary panel">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[20px] items-center relative size-full">
            <div className="bg-[#e2e6f3] h-full min-w-[64px] relative shrink-0 w-[64px]" data-name=".Main navigation">
              <FooterContainer />
              <Container6 />
            </div>
            <SummaryPanelContainer />
          </div>
        </div>
      </div>
      <PageContent />
    </div>
  );
}