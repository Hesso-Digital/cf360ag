import svgPaths from "./svg-yt7n163453";
import { imgBorder, imgBorder1 } from "./svg-cgw9m";
type AvatarsProps = {
  className?: string;
  avatarType?: "Icon" | "Initials";
  large?: "False";
};

function Avatars({ className, avatarType = "Initials", large = "False" }: AvatarsProps) {
  return (
    <div className={className || "bg-[#687db1] relative rounded-[16px] size-[32px]"}>
      <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      {large === "False" && avatarType === "Initials" && (
        <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center rounded-[32px]" style={{ backgroundImage: "linear-gradient(-1.6699581857140515deg, rgba(10, 31, 87, 0) 0.17019%, rgb(10, 31, 87) 103.23%)" }} data-name="Container">
          <div className="[word-break:break-word] aspect-[40/40] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white uppercase w-full">
            <p className="leading-[normal]">PR</p>
          </div>
        </div>
      )}
      {large === "False" && avatarType === "Icon" && (
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Case">
          <div className="absolute inset-[4%_1.91%_5.77%_0]" data-name="Color">
            <svg className="absolute block inset-0 size-full" fill="none" height="16.2422" preserveAspectRatio="none" viewBox="0 0 17.6558 16.2422" width="17.6558">
              <path clipRule="evenodd" d={svgPaths.p17656e80} fill="white" fillRule="evenodd" id="Color" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
type LogoProps = {
  className?: string;
  background?: "Off";
  logo?: "Pega";
};

function Logo({ className, background = "Off", logo = "Pega" }: LogoProps) {
  return (
    <div className={className || "h-[33px] relative w-[36px]"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center py-[12px] relative size-full">
          <div className="h-[9px] relative shrink-0 w-[34px]" data-name="PEGA">
            <svg className="absolute block inset-0 size-full" fill="none" height="9" preserveAspectRatio="none" viewBox="0 0 34.0151 9" width="34.0151">
              <g id="PEGA">
                <path clipRule="evenodd" d={svgPaths.p247f47c0} fill="#081E5B" fillRule="evenodd" id="Shape" />
                <path clipRule="evenodd" d={svgPaths.p1636c700} fill="#081E5B" fillRule="evenodd" id="Shape_2" />
                <path clipRule="evenodd" d={svgPaths.p16114320} fill="#081E5B" fillRule="evenodd" id="Shape_3" />
                <path clipRule="evenodd" d={svgPaths.pdc040c0} fill="#081E5B" fillRule="evenodd" id="Shape_4" />
              </g>
            </svg>
          </div>
          <div className="h-[8px] relative shrink-0 w-[1.767px]" data-name="Registered">
            <svg className="absolute block inset-0 size-full" fill="none" height="8" preserveAspectRatio="none" viewBox="0 0 1.76748 8" width="1.76748">
              <g id="Registered">
                <path clipRule="evenodd" d={svgPaths.p1f433600} fill="#081E5B" fillRule="evenodd" id="Shape" />
                <path clipRule="evenodd" d={svgPaths.p9ceea00} fill="#081E5B" fillRule="evenodd" id="Shape_2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type AppHeaderProps = {
  className?: string;
  applicationName?: string;
  channelName?: string;
  prop9DotMenu?: "Off";
  showApplicationName?: boolean;
  showChannelName?: boolean;
  type?: "Default";
};

function AppHeader({ className, applicationName = "App name", channelName = "Channel name", prop9DotMenu = "Off", showApplicationName = true, showChannelName = false, type = "Default" }: AppHeaderProps) {
  return (
    <div className={className || "bg-white h-[48px] relative w-[1200px]"}>
      <div className="absolute content-stretch flex items-center left-0 pl-[16px] top-0" data-name="Header">
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Content">
          <div className="content-stretch flex items-center relative shrink-0" data-name="Logo and menu">
            <Logo className="flex flex-row items-center self-stretch" />
          </div>
          <div className="[word-break:break-word] content-stretch flex gap-[8px] h-[48px] items-center leading-[0] not-italic relative shrink-0 text-[#081e5b] whitespace-nowrap" data-name="Header name">
            {showApplicationName && (
              <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[17.7px]">
                <p className="leading-[normal]">{applicationName}</p>
              </div>
            )}
            {showChannelName && (
              <div className="flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center relative shrink-0 text-[14px]">
                <p className="leading-[32px]">{channelName}</p>
              </div>
            )}
          </div>
        </div>
      </div>
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
      <div className="absolute bg-white left-[28.33%] right-[30%] rounded-[16px] top-[8px]" data-name="Search input - Enhanced">
        <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center relative size-full">
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
            <div className="flex flex-row items-center self-stretch">
              <div className="content-stretch flex flex-col h-full items-start justify-center px-[5px] relative rounded-br-[16px] rounded-tr-[16px] shrink-0" data-name="Container">
                <div aria-hidden className="absolute border-[#939393] border-b border-r border-solid border-t inset-0 pointer-events-none rounded-br-[16px] rounded-tr-[16px]" />
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type FileListItemOverflowProps = {
  className?: string;
  type?: "View all";
};

function FileListItemOverflow({ className, type = "View all" }: FileListItemOverflowProps) {
  return (
    <div className={className || "relative w-[300px]"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center py-[12px] relative size-full">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#3f57e4] text-[14px] text-center">
            <p className="leading-[normal]">View all</p>
          </div>
        </div>
      </div>
    </div>
  );
}
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
type RelatedCasesProps = {
  className?: string;
  number?: "3+ items";
  slotContent?: React.ReactNode | null;
};

function RelatedCases({ className, number = "3+ items", slotContent = null }: RelatedCasesProps) {
  return (
    <div className={className || "bg-white relative rounded-[16px] w-[384px]"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="relative shrink-0 w-full" data-name="Container">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between pt-[12px] px-[16px] relative size-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Header">
                <div className="bg-[#3c877e] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatars">
                  <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Case">
                    <div className="absolute inset-[4%_1.91%_5.77%_0]" data-name="Color">
                      <svg className="absolute block inset-0 size-full" fill="none" height="16.2422" preserveAspectRatio="none" viewBox="0 0 17.6558 16.2422" width="17.6558">
                        <path clipRule="evenodd" d={svgPaths.p17656e80} fill="white" fillRule="evenodd" id="Color" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Header text">
                  <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[15px] whitespace-nowrap">
                    <p className="leading-[normal]">Related Cases</p>
                  </div>
                </div>
                <CounterBadge className="bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px] shrink-0" count="3" />
              </div>
              <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                  <div className="absolute inset-0" data-name="Icon: ---">
                    <div className="absolute inset-[8%_9.63%_9.63%_8%]" data-name="Color">
                      <svg className="absolute block inset-0 size-full" fill="none" height="14.8271" preserveAspectRatio="none" viewBox="0 0 14.8271 14.8271" width="14.8271">
                        <path d={svgPaths.p1adec200} fill="#001D54" id="Color" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Slot: Content">
          {slotContent || (
            <div className="content-stretch flex flex-col items-start pt-[10px] px-[20px] relative size-full">
              <div className="relative shrink-0 w-full" data-name="2020 policy">
                <div className="content-stretch flex flex-col gap-[6.5px] items-start pt-[7.5px] relative size-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Item label + metadata">
                      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[#001d54] text-[14px]">
                        <p className="leading-[normal]">2020 policy</p>
                      </div>
                      <div className="content-stretch flex font-['Roboto_flex:Regular',sans-serif] gap-[4px] items-start overflow-clip relative shrink-0 text-[12px]" data-name="Meta list">
                        <div className="flex flex-col justify-center relative shrink-0 text-[#3f57e4]">
                          <p className="leading-[normal]">C-123</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,29,84,0.7)]">
                          <p className="leading-[normal]">•</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,29,84,0.7)]">
                          <p className="leading-[normal]">Now</p>
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon button: trash">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                        <div className="absolute inset-0" data-name="Icon: ---">
                          <div className="absolute inset-[4%_9.62%_1.75%_8%]" data-name="Color">
                            <svg className="absolute block inset-0 size-full" fill="none" height="16.9656" preserveAspectRatio="none" viewBox="0 0 14.8281 16.9656" width="14.8281">
                              <path clipRule="evenodd" d={svgPaths.p1edc1db0} fill="#001D54" fillRule="evenodd" id="Color" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-px relative shrink-0 w-full" data-name="Separator">
                    <div className="-translate-y-1/2 absolute bg-[#cfcfcf] h-px left-0 right-0 top-1/2" data-name="Background" />
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="2021 policy">
                <div className="content-stretch flex flex-col gap-[6.5px] items-start pt-[7.5px] relative size-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Item label + metadata">
                      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[#001d54] text-[14px]">
                        <p className="leading-[normal]">2021 policy</p>
                      </div>
                      <div className="content-stretch flex font-['Roboto_flex:Regular',sans-serif] gap-[4px] items-start overflow-clip relative shrink-0 text-[12px]" data-name="Meta list">
                        <div className="flex flex-col justify-center relative shrink-0 text-[#3f57e4]">
                          <p className="leading-[normal]">C-322</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,29,84,0.7)]">
                          <p className="leading-[normal]">•</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,29,84,0.7)]">
                          <p className="leading-[normal]">Now</p>
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon button: trash">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                        <div className="absolute inset-0" data-name="Icon: ---">
                          <div className="absolute inset-[4%_9.62%_1.75%_8%]" data-name="Color">
                            <svg className="absolute block inset-0 size-full" fill="none" height="16.9656" preserveAspectRatio="none" viewBox="0 0 14.8281 16.9656" width="14.8281">
                              <path clipRule="evenodd" d={svgPaths.p1edc1db0} fill="#001D54" fillRule="evenodd" id="Color" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-px relative shrink-0 w-full" data-name="Separator">
                    <div className="-translate-y-1/2 absolute bg-[#cfcfcf] h-px left-0 right-0 top-1/2" data-name="Background" />
                  </div>
                </div>
              </div>
              <div className="relative shrink-0 w-full" data-name="Assets">
                <div className="content-stretch flex flex-col gap-[6.5px] items-start pt-[7.5px] relative size-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Container">
                    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[0] not-italic relative shrink-0 whitespace-nowrap" data-name="Item label + metadata">
                      <div className="flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center relative shrink-0 text-[#001d54] text-[14px]">
                        <p className="leading-[normal]">Assets</p>
                      </div>
                      <div className="content-stretch flex font-['Roboto_flex:Regular',sans-serif] gap-[4px] items-start overflow-clip relative shrink-0 text-[12px]" data-name="Meta list">
                        <div className="flex flex-col justify-center relative shrink-0 text-[#3f57e4]">
                          <p className="leading-[normal]">C-1224</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,29,84,0.7)]">
                          <p className="leading-[normal]">•</p>
                        </div>
                        <div className="flex flex-col justify-center relative shrink-0 text-[rgba(0,29,84,0.7)]">
                          <p className="leading-[normal]">2 days ago</p>
                        </div>
                      </div>
                    </div>
                    <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon button: trash">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                        <div className="absolute inset-0" data-name="Icon: ---">
                          <div className="absolute inset-[4%_9.62%_1.75%_8%]" data-name="Color">
                            <svg className="absolute block inset-0 size-full" fill="none" height="16.9656" preserveAspectRatio="none" viewBox="0 0 14.8281 16.9656" width="14.8281">
                              <path clipRule="evenodd" d={svgPaths.p1edc1db0} fill="#001D54" fillRule="evenodd" id="Color" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-px relative shrink-0 w-full" data-name="Separator">
                    <div className="-translate-y-1/2 absolute bg-[#cfcfcf] h-px left-0 right-0 top-1/2" data-name="Background" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <FileListItemOverflow className="relative shrink-0 w-full" />
      </div>
    </div>
  );
}
type FollowersProps = {
  className?: string;
  children?: React.ReactNode | null;
  number?: "3+ items";
};

function Followers({ className, children = null, number = "3+ items" }: FollowersProps) {
  return (
    <div className={className || "bg-white relative rounded-[16px] w-[384px]"}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start relative size-full">
          <div className="relative shrink-0 w-full" data-name="Container">
            <div className="content-stretch flex items-start justify-between pt-[12px] px-[20px] relative size-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Header">
                <div className="bg-[#00a495] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatars">
                  <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Case">
                    <div className="absolute inset-[8%_5.77%_13.45%_4%]" data-name="Color">
                      <svg className="absolute block inset-0 size-full" fill="none" height="14.1384" preserveAspectRatio="none" viewBox="0 0 16.2422 14.1384" width="16.2422">
                        <path clipRule="evenodd" d={svgPaths.pb297200} fill="white" fillRule="evenodd" id="Color" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Header">
                  <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[15px] whitespace-nowrap">
                    <p className="leading-[normal]">Followers</p>
                  </div>
                </div>
                <CounterBadge className="bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px] shrink-0" count="1.0K" />
              </div>
              <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                  <div className="absolute inset-0" data-name="Icon: ---">
                    <div className="absolute inset-[8%_9.63%_9.63%_8%]" data-name="Color">
                      <svg className="absolute block inset-0 size-full" fill="none" height="14.8271" preserveAspectRatio="none" viewBox="0 0 14.8271 14.8271" width="14.8271">
                        <path d={svgPaths.p1adec200} fill="#001D54" id="Color" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Slot: Content">
            {children || (
              <div className="content-stretch flex flex-col items-start pt-[10px] px-[20px] relative size-full">
                <div className="relative shrink-0 w-full" data-name="Nathan Swanson">
                  <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center justify-end size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end pb-px relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px pb-[8px] pt-[7px] relative" data-name="Container">
                        <div className="bg-[#687db1] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatars">
                          <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                          <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center rounded-[32px]" style={{ backgroundImage: "linear-gradient(-1.6699581857140515deg, rgba(10, 31, 87, 0) 0.17019%, rgb(10, 31, 87) 103.23%)" }} data-name="Container">
                            <div className="[word-break:break-word] aspect-[40/40] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white uppercase w-full">
                              <p className="leading-[normal]">PR</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] items-start leading-[0] min-w-px not-italic relative whitespace-nowrap" data-name="Content">
                          <div className="flex flex-col justify-center relative shrink-0 text-[#3f57e4] text-[14px]">
                            <p className="leading-[normal]">Nathan Swanson</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)]">
                            <p className="leading-[normal]">Manager</p>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                          <div className="absolute inset-0" data-name="Icon: ---">
                            <div className="absolute inset-[4%_9.62%_1.75%_8%]" data-name="Color">
                              <svg className="absolute block inset-0 size-full" fill="none" height="16.9656" preserveAspectRatio="none" viewBox="0 0 14.8281 16.9656" width="14.8281">
                                <path clipRule="evenodd" d={svgPaths.p1edc1db0} fill="#001D54" fillRule="evenodd" id="Color" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Glen Simpson">
                  <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center justify-end size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end pb-px relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px pb-[8px] pt-[7px] relative" data-name="Container">
                        <div className="bg-[#687db1] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatars">
                          <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                          <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center rounded-[32px]" style={{ backgroundImage: "linear-gradient(-1.6699581857140515deg, rgba(10, 31, 87, 0) 0.17019%, rgb(10, 31, 87) 103.23%)" }} data-name="Container">
                            <div className="[word-break:break-word] aspect-[40/40] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white uppercase w-full">
                              <p className="leading-[normal]">PR</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] items-start leading-[0] min-w-px not-italic relative whitespace-nowrap" data-name="Content">
                          <div className="flex flex-col justify-center relative shrink-0 text-[#3f57e4] text-[14px]">
                            <p className="leading-[normal]">Glen Simpson</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)]">
                            <p className="leading-[normal]">Engineer</p>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                          <div className="absolute inset-0" data-name="Icon: ---">
                            <div className="absolute inset-[4%_9.62%_1.75%_8%]" data-name="Color">
                              <svg className="absolute block inset-0 size-full" fill="none" height="16.9656" preserveAspectRatio="none" viewBox="0 0 14.8281 16.9656" width="14.8281">
                                <path clipRule="evenodd" d={svgPaths.p1edc1db0} fill="#001D54" fillRule="evenodd" id="Color" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative shrink-0 w-full" data-name="Ralph Green">
                  <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center justify-end size-full">
                    <div className="content-stretch flex gap-[10px] items-center justify-end pb-px relative size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px pb-[8px] pt-[7px] relative" data-name="Container">
                        <div className="bg-[#687db1] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatars">
                          <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                          <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center rounded-[32px]" style={{ backgroundImage: "linear-gradient(-1.6699581857140515deg, rgba(10, 31, 87, 0) 0.17019%, rgb(10, 31, 87) 103.23%)" }} data-name="Container">
                            <div className="[word-break:break-word] aspect-[40/40] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white uppercase w-full">
                              <p className="leading-[normal]">PR</p>
                            </div>
                          </div>
                        </div>
                        <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] items-start leading-[0] min-w-px not-italic relative whitespace-nowrap" data-name="Content">
                          <div className="flex flex-col justify-center relative shrink-0 text-[#3f57e4] text-[14px]">
                            <p className="leading-[normal]">Ralph Green</p>
                          </div>
                          <div className="flex flex-col justify-center relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)]">
                            <p className="leading-[normal]">HR Director</p>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                          <div className="absolute inset-0" data-name="Icon: ---">
                            <div className="absolute inset-[4%_9.62%_1.75%_8%]" data-name="Color">
                              <svg className="absolute block inset-0 size-full" fill="none" height="16.9656" preserveAspectRatio="none" viewBox="0 0 14.8281 16.9656" width="14.8281">
                                <path clipRule="evenodd" d={svgPaths.p1edc1db0} fill="#001D54" fillRule="evenodd" id="Color" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white relative shrink-0 w-full" data-name="Footer">
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex items-center py-[12px] relative size-full">
                <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#3f57e4] text-[14px] text-center">
                  <p className="leading-[normal]">View all</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FileListItemFiles({ className }: { className?: string }) {
  return (
    <div className={className || "relative w-[370px]"} data-name=".File list item - Files">
      <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="content-stretch flex items-start pb-[7px] pt-[8px] relative shrink-0 w-full" data-name="Container">
          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-start min-w-px relative" data-name="Content">
            <div className="bg-[#076bc9] relative rounded-[8px] shrink-0 size-[30px]" data-name="File icon">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[6px] relative size-full">
                  <div className="relative shrink-0 size-[18px]" data-name="Icon">
                    <div className="absolute inset-[16%_12%_16%_8%]" data-name="filetype-text">
                      <svg className="absolute block inset-0 size-full" fill="none" height="12.2402" preserveAspectRatio="none" viewBox="0 0 14.4004 12.2402" width="14.4004">
                        <path d={svgPaths.p3852ef0} fill="white" id="filetype-text" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] items-start leading-[0] min-w-px not-italic relative" data-name="Content">
              <div className="flex flex-col justify-center min-w-full relative shrink-0 text-[#3f57e4] text-[14px] w-[min-content]">
                <p className="leading-[normal]">Welcome letter</p>
              </div>
              <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] whitespace-nowrap" data-name="Metadata">
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[normal]">Policy</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[normal]">•</p>
                </div>
                <div className="flex flex-col justify-center relative shrink-0">
                  <p className="leading-[normal]">Annette Hunt</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon button: more">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
              <div className="absolute inset-0" data-name="Icon">
                <div className="absolute inset-[12%_40.29%_13.28%_44%]" data-name="More">
                  <svg className="absolute block inset-0 size-full" fill="none" height="13.4488" preserveAspectRatio="none" viewBox="0 0 2.82825 13.4488" width="2.82825">
                    <path clipRule="evenodd" d={svgPaths.p27ad6300} fill="#001D54" fillRule="evenodd" id="More" />
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
type AttachmentsProps = {
  className?: string;
  children?: React.ReactNode | null;
  number?: "3+ items";
};

function Attachments({ className, children = null, number = "3+ items" }: AttachmentsProps) {
  return (
    <div className={className || "bg-white relative rounded-[16px] w-[384px]"}>
      <div className="content-stretch flex flex-col items-start relative size-full">
        <div className="relative shrink-0 w-full" data-name="Header">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-between pt-[12px] px-[20px] relative size-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Header container">
                <div className="bg-[#0060a8] relative rounded-[16px] shrink-0 size-[32px]" data-name="Avatars">
                  <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[16px]" />
                  <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Case">
                    <div className="absolute inset-[8%_13.31%_13.46%_16%]" data-name="Color">
                      <svg className="absolute block inset-0 size-full" fill="none" height="14.1379" preserveAspectRatio="none" viewBox="0 0 12.7243 14.1379" width="12.7243">
                        <path clipRule="evenodd" d={svgPaths.p195441f0} fill="white" fillRule="evenodd" id="Color" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-center relative shrink-0" data-name="Header">
                  <div className="[word-break:break-word] flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[15px] whitespace-nowrap">
                    <p className="leading-[normal]">Attachments</p>
                  </div>
                </div>
                <CounterBadge className="bg-[#e9eef3] h-[18px] min-w-[18px] relative rounded-[9px] shrink-0" />
              </div>
              <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Icon">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                  <div className="absolute inset-0" data-name="Icon">
                    <div className="absolute inset-[12%_40.29%_13.28%_44%]" data-name="More">
                      <svg className="absolute block inset-0 size-full" fill="none" height="13.4488" preserveAspectRatio="none" viewBox="0 0 2.82825 13.4488" width="2.82825">
                        <path clipRule="evenodd" d={svgPaths.p27ad6300} fill="#001D54" fillRule="evenodd" id="More" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Slot: Content">
          {children || (
            <div className="content-stretch flex flex-col items-start pt-[10px] px-[20px] relative size-full">
              <FileListItemFiles className="relative shrink-0 w-full" />
              <FileListItemFiles className="relative shrink-0 w-full" />
              <div className="relative shrink-0 w-full" data-name="File item - Link">
                <div className="content-stretch flex flex-col items-start relative size-full">
                  <div className="relative shrink-0 w-full" data-name="Container">
                    <div className="content-stretch flex items-start overflow-clip pb-px relative rounded-[inherit] size-full">
                      <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px overflow-clip py-[7px] relative" data-name="Content">
                        <div className="bg-[#4c5a67] relative rounded-[8px] shrink-0 size-[30px]" data-name="File type icon">
                          <div className="flex flex-row items-center justify-center size-full">
                            <div className="content-stretch flex items-center justify-center p-[7px] relative size-full">
                              <div className="relative shrink-0 size-[18px]" data-name="Icon">
                                <div className="absolute inset-[32%_1.91%_32.55%_0]" data-name="Color">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="6.38044" preserveAspectRatio="none" viewBox="0 0 17.6563 6.38044" width="17.6563">
                                    <path clipRule="evenodd" d={svgPaths.p1132c180} fill="white" fillRule="evenodd" id="Color" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Content">
                          <div className="content-stretch flex gap-[4px] items-start overflow-clip relative shrink-0 w-full" data-name="Item label">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f57e4] text-[14px] whitespace-nowrap">
                              <p className="leading-[normal]">Welcome letter</p>
                            </div>
                            <div className="h-[19px] relative shrink-0 w-[16px]" data-name="Icon container">
                              <div className="absolute bottom-[2px] left-0 size-[16px]" data-name="Icon">
                                <div className="absolute inset-[14%]" data-name="Color">
                                  <svg className="absolute block inset-0 size-full" fill="none" height="11.52" preserveAspectRatio="none" viewBox="0 0 11.52 11.52" width="11.52">
                                    <g id="Color">
                                      <path d={svgPaths.p30223600} fill="black" />
                                      <path d={svgPaths.p105b9d00} fill="black" />
                                    </g>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="[word-break:break-word] content-stretch flex font-['Roboto_flex:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic overflow-clip relative shrink-0 text-[12px] text-[rgba(0,29,84,0.7)] w-full whitespace-nowrap" data-name="Metadata">
                            <div className="flex flex-col justify-center relative shrink-0">
                              <p className="leading-[normal]">Link</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0">
                              <p className="leading-[normal]">•</p>
                            </div>
                            <div className="flex flex-col justify-center relative shrink-0">
                              <p className="leading-[normal]">Annette Hunt</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cursor-pointer relative rounded-[8px] shrink-0 size-[32px]" data-name="Button">
                        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
                          <div className="absolute inset-0" data-name="Icon">
                            <div className="absolute inset-[12%_40.29%_13.28%_44%]" data-name="More">
                              <svg className="absolute block inset-0 size-full" fill="none" height="13.4488" preserveAspectRatio="none" viewBox="0 0 2.82825 13.4488" width="2.82825">
                                <path clipRule="evenodd" d={svgPaths.p27ad6300} fill="#001D54" fillRule="evenodd" id="More" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <FileListItemOverflow className="relative shrink-0 w-full" />
      </div>
    </div>
  );
}
type SummaryCollpaseToggleButtonProps = {
  className?: string;
  state?: "Down";
};

function SummaryCollpaseToggleButton({ className, state = "Down" }: SummaryCollpaseToggleButtonProps) {
  return (
    <div className={className || "bg-white relative rounded-[8px] size-[24px]"}>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Icon">
        <div className="absolute inset-[40%_32.75%_40.46%_32%]" data-name="micro-arrow-down">
          <svg className="absolute block inset-0 size-full" fill="none" height="4.68975" preserveAspectRatio="none" viewBox="0 0 8.46 4.68975" width="8.46">
            <path clipRule="evenodd" d={svgPaths.p89df00} fill="#3F57E4" fillRule="evenodd" id="micro-arrow-down" />
          </svg>
        </div>
      </div>
    </div>
  );
}
type UtilitiesPanelDefaultProps = {
  className?: string;
  expanded?: "Yes";
  showGenAi?: "Off";
};

function UtilitiesPanelDefault({ className, expanded = "Yes", showGenAi = "Off" }: UtilitiesPanelDefaultProps) {
  return (
    <div className={className || "relative rounded-bl-[16px] rounded-tl-[16px]"}>
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end p-[20px] relative size-full">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0" data-name="Utilities">
            <div className="content-stretch flex gap-[10px] h-[24px] items-start pr-[8px] relative shrink-0 w-[385px]" data-name="Utilities header">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Poppins:SemiBold',sans-serif] h-[23px] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[17.7px]">
                <p className="leading-[normal]">Utilities</p>
              </div>
              <SummaryCollpaseToggleButton className="flex items-center justify-center relative shrink-0 size-[24px]" />
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-[385px]" data-name="Widgets">
              <Attachments className="bg-white relative rounded-[16px] shrink-0 w-full" />
              <Followers className="bg-white relative rounded-[16px] shrink-0 w-full" />
              <RelatedCases className="bg-white relative rounded-[16px] shrink-0 w-full" />
            </div>
          </div>
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
              <mask fill="white" id={isCompleted ? "path-1-inside-1_0_3035" : "path-1-inside-1_0_3025"}>
                <path clipRule="evenodd" d="M0 0L12 21L0 42" fillRule="evenodd" />
              </mask>
              <path clipRule="evenodd" d="M0 0L12 21L0 42" fill={isCompleted ? "#F6FEF6" : "#3A53E9"} fillRule="evenodd" />
              <path d={svgPaths.p1478cf00} fill="#CFCFCF" mask={isCompleted ? "url(#path-1-inside-1_0_3035)" : "url(#path-1-inside-1_0_3025)"} />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
}
type AssignmentsProps = {
  className?: string;
  condensed?: "Off";
  showLifecycle?: "On";
  type?: "Hierarchical expanded";
};

function Assignments({ className, condensed = "Off", showLifecycle = "On", type = "Hierarchical expanded" }: AssignmentsProps) {
  return (
    <div className={className || "relative rounded-[8px] w-[838px]"}>
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
                            <div className="flex-[1_0_0] h-full min-w-px relative" data-name="Container">
                              <div className="flex flex-row items-center justify-center size-full">
                                <div className="content-stretch flex items-center justify-center pl-[12px] pr-[8px] relative size-full">
                                  <div className="content-stretch flex gap-[4px] h-full items-center justify-center relative shrink-0" data-name="Container">
                                    <div className="h-[32px] relative shrink-0 w-[18px]" data-name="Container">
                                      <div className="absolute left-[0.17px] size-[18px] top-[7px]" data-name="Icon">
                                        <div className="absolute inset-[16%_4.07%_19.06%_8%]" data-name="Check">
                                          <svg className="absolute block inset-0 size-full" fill="none" height="11.6893" preserveAspectRatio="none" viewBox="0 0 15.8276 11.6893" width="15.8276">
                                            <path clipRule="evenodd" d={svgPaths.p13660800} fill="#20AA50" fillRule="evenodd" id="Check" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[32px] not-italic overflow-hidden relative shrink-0 text-[#156f35] text-[14px] text-center text-ellipsis whitespace-nowrap">Completed</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#3a53e9] h-[42px] relative shrink-0 w-[20px]" data-name="Shape">
                      <div className="absolute h-[41px] left-0 top-0 w-[17px]" data-name="Mask" />
                      <div className="absolute h-[42px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[20px_42px] right-[8px] top-0 w-[12px]" style={{ maskImage: `url("${imgBorder1}")` }} data-name="Border">
                        <svg className="absolute block inset-0 size-full" fill="none" height="42" preserveAspectRatio="none" viewBox="0 0 12 42" width="12">
                          <g id="Border">
                            <mask fill="white" id="path-1-inside-1_0_3035">
                              <path clipRule="evenodd" d="M0 0L12 21L0 42" fillRule="evenodd" />
                            </mask>
                            <path clipRule="evenodd" d="M0 0L12 21L0 42" fill="#F6FEF6" fillRule="evenodd" />
                            <path d={svgPaths.p1478cf00} fill="#CFCFCF" mask="url(#path-1-inside-1_0_3035)" />
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
                          <div className="bg-[#3a53e9] content-stretch flex h-full items-center justify-center px-[8px] relative shrink-0" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
                              <p className="leading-[32px]">Doing</p>
                            </div>
                          </div>
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
                          <div className="content-stretch flex h-full items-center justify-center pl-[8px] relative shrink-0 w-[67px]" data-name="Container">
                            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[14px] text-black text-center text-ellipsis whitespace-nowrap">
                              <p className="leading-[32px] overflow-hidden text-ellipsis">Pending</p>
                            </div>
                          </div>
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
        <div className="bg-white content-stretch flex flex-col items-start pt-[20px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card container">
          <div className="relative shrink-0 w-full" data-name="Card header">
            <div className="content-stretch flex flex-col items-start px-[20px] relative size-full">
              <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0 w-[160.004px]" data-name="Header">
                <CaretDown className="relative shrink-0 size-[18px]" />
                <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[17.7px] whitespace-nowrap">Assignments</p>
              </div>
            </div>
          </div>
          <div className="relative shrink-0 w-full" data-name="Hierarchical table">
            <div className="content-stretch flex flex-col items-start p-[20px] relative size-full">
              <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name=".Hierarchical assignments list">
                <div className="overflow-clip rounded-[inherit] size-full">
                  <div className="content-stretch flex flex-col items-start relative size-full">
                    <div className="relative rounded-[8px] shrink-0 w-full" data-name="List">
                      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
                        <div className="relative rounded-tr-[8px] shrink-0 w-full" data-name="Case">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex items-center px-[20px] py-[8px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
                                <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
                                  <div className="flex flex-row items-center size-full">
                                    <div className="content-stretch flex items-center px-[4px] relative size-full">
                                      <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
                                        <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 1] Assignment name</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
                                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
                                    <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
                                    <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
                                      <p className="leading-[normal]">•</p>
                                    </div>
                                    <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
                                  </div>
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
                          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[20px] py-[8px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
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
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
                          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center pl-[17px] pr-[16px] py-[8px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
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
                                          <div className="bg-[#e9eef3] h-[16px] max-h-[16px] relative rounded-[8px] shrink-0" data-name="Container">
                                            <div className="content-stretch flex items-start max-h-[inherit] overflow-clip px-[4px] relative rounded-[inherit] size-full">
                                              <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] max-h-[16px] not-italic relative shrink-0 text-[#4c5a67] text-[12px] uppercase whitespace-nowrap">
                                                <p className="leading-[16px]">In progress</p>
                                              </div>
                                            </div>
                                            <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
                          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center pl-[62px] pr-[16px] py-[8px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
                                <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
                                  <div className="flex flex-row items-center size-full">
                                    <div className="content-stretch flex items-center pr-[4px] relative size-full">
                                      <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
                                        <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 3] Assignment name</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
                                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
                                    <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
                                    <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
                                      <p className="leading-[normal]">•</p>
                                    </div>
                                    <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
                                  </div>
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
                          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center pl-[62px] pr-[16px] py-[8px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
                                <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
                                  <div className="flex flex-row items-center size-full">
                                    <div className="content-stretch flex items-center pr-[4px] relative size-full">
                                      <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
                                        <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 3] Assignment name</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
                                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
                                    <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
                                    <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
                                      <p className="leading-[normal]">•</p>
                                    </div>
                                    <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
                                  </div>
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
                          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center pl-[17px] pr-[16px] py-[8px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
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
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
                          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center pl-[62px] pr-[16px] py-[8px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
                                <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
                                  <div className="flex flex-row items-center size-full">
                                    <div className="content-stretch flex items-center pr-[4px] relative size-full">
                                      <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
                                        <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 3] Assignment name</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
                                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
                                    <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
                                    <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
                                      <p className="leading-[normal]">•</p>
                                    </div>
                                    <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
                                  </div>
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
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="relative shrink-0 w-full" data-name=".Hierarchical list (Default)">
                          <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
                            <div className="content-stretch flex items-center pl-[62px] pr-[16px] py-[8px] relative size-full">
                              <div className="content-stretch flex flex-[1_0_0] h-[24px] items-center min-w-px relative" data-name="Container">
                                <div className="flex-[1_0_0] min-w-px relative" data-name="Content (left)">
                                  <div className="flex flex-row items-center size-full">
                                    <div className="content-stretch flex items-center pr-[4px] relative size-full">
                                      <div className="content-stretch flex items-center justify-center pr-[24px] relative shrink-0" data-name="Item label">
                                        <p className="[word-break:break-word] font-['Roboto_flex:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">[Tier 3] Assignment name</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="content-stretch flex gap-[24px] items-center justify-end relative shrink-0 w-[240px]" data-name="Content (right)">
                                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] gap-[2px] items-center min-w-px not-italic relative text-[12px]" data-name="Metadata">
                                    <p className="leading-[normal] max-w-[164px] relative shrink-0 text-[#3f57e4] whitespace-nowrap">Peggy Rogers</p>
                                    <div className="flex flex-col h-[18px] justify-center leading-[0] relative shrink-0 text-[rgba(0,29,84,0.7)] text-center w-[6px]">
                                      <p className="leading-[normal]">•</p>
                                    </div>
                                    <p className="leading-[normal] relative shrink-0 text-[rgba(0,29,84,0.7)] w-[80px]">Urgency: 95</p>
                                  </div>
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
                              </div>
                            </div>
                          </div>
                          <div aria-hidden className="absolute border-[#cfcfcf] border-b border-dashed inset-0 pointer-events-none" />
                        </div>
                      </div>
                      <div aria-hidden className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                    </div>
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
type ButtonsProps = {
  className?: string;
  buttonType?: "Secondary" | "Icon";
  state?: "Active" | "Default" | "Hover";
};

function Buttons({ className, buttonType = "Secondary", state = "Default" }: ButtonsProps) {
  const isActive = state === "Active";
  const isIconAndActive = buttonType === "Icon" && state === "Active";
  const isSecondaryAndActive = buttonType === "Secondary" && state === "Active";
  const isSecondaryAndHover = buttonType === "Secondary" && state === "Hover";
  return (
    <div className={className || `relative rounded-[8px] ${isIconAndActive ? "size-[32px]" : isSecondaryAndActive ? "h-[32px]" : buttonType === "Icon" && state === "Hover" ? "bg-[rgba(0,29,84,0.1)] overflow-clip size-[32px]" : isSecondaryAndHover ? "bg-[rgba(58,83,233,0.1)] h-[32px] max-h-[32px]" : buttonType === "Icon" && state === "Default" ? "bg-[rgba(0,29,84,0)] cursor-pointer size-[32px]" : "bg-white cursor-pointer h-[32px] max-h-[32px]"}`}>
      {((buttonType === "Secondary" && state === "Default") || isSecondaryAndHover || isActive) && <div aria-hidden className={`absolute border-[#3f57e4] border-solid pointer-events-none ${isActive ? "border-[1.25px] inset-[-1.25px] rounded-[9.25px]" : "border inset-0 rounded-[8px]"}`} />}
      {buttonType === "Secondary" && (
        <div className={`flex flex-row items-center justify-center size-full ${isSecondaryAndActive ? "" : "max-h-[inherit]"}`}>
          <div className={`content-stretch flex items-center justify-center relative size-full ${isSecondaryAndActive ? "" : "max-h-[inherit] px-[16px]"}`}>
            <div className={`relative shrink-0 ${isSecondaryAndActive ? "content-stretch flex h-[32px] items-center justify-center rounded-[8px]" : ""}`} data-name="Container">
              <div aria-hidden={isSecondaryAndActive ? true : undefined} className={isSecondaryAndActive ? "absolute border-[5.4px] border-[rgba(63,87,228,0.1)] border-solid inset-[-5.4px] pointer-events-none rounded-[13.4px]" : "content-stretch flex items-start relative size-full"}>
                {buttonType === "Secondary" && ["Default", "Hover"].includes(state) && (
                  <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f57e4] text-[14px] whitespace-nowrap">
                    <p className="leading-[normal]">Cancel</p>
                  </div>
                )}
              </div>
              {isSecondaryAndActive && (
                <div className="bg-[#d8ddf9] content-stretch flex h-[32px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Container">
                  <div aria-hidden className="absolute border-[#3f57e4] border-[3.6px] border-solid inset-[-3.6px] pointer-events-none rounded-[11.6px]" />
                  <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0" data-name="Container">
                    <div aria-hidden className="absolute border-[2.6px] border-solid border-white inset-[-2.6px] pointer-events-none rounded-[10.6px]" />
                    <div className="relative rounded-[8px] shrink-0" data-name="Container">
                      <div aria-hidden className="absolute border border-[#3f57e4] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
                      <div className="content-stretch flex items-start px-[16px] py-[8px] relative size-full">
                        <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3f57e4] text-[14px] whitespace-nowrap">
                          <p className="leading-[normal]">Cancel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {buttonType === "Icon" && (
        <div className={`absolute ${isIconAndActive ? "content-stretch flex h-[32px] items-center justify-center left-0 rounded-[8px] top-0" : "-translate-x-1/2 -translate-y-1/2 left-1/2 size-[18px] top-1/2"}`} data-name="Container">
          {buttonType === "Icon" && ["Default", "Hover"].includes(state) && (
            <div className="absolute inset-0" data-name="Icon">
              <div className="absolute inset-[12%_40.29%_13.28%_44%]" data-name="More">
                <svg className="absolute block inset-0 size-full" fill="none" height="13.4488" preserveAspectRatio="none" viewBox="0 0 2.82825 13.4488" width="2.82825">
                  <path clipRule="evenodd" d={svgPaths.p27ad6300} fill="#001D54" fillRule="evenodd" id="More" />
                </svg>
              </div>
            </div>
          )}
          {isIconAndActive && (
            <>
              <div aria-hidden className="absolute border-[4.8px] border-[rgba(63,87,228,0.1)] border-solid inset-[-4.8px] pointer-events-none rounded-[12.8px]" />
              <div className="content-stretch flex h-[32px] items-center justify-center relative rounded-[8px] shrink-0" data-name="Container">
                <div aria-hidden className="absolute border-[#3f57e4] border-[2.8px] border-solid inset-[-2.8px] pointer-events-none rounded-[10.8px]" />
                <div className="content-stretch flex h-[32px] items-center relative rounded-[8px] shrink-0" data-name="Container">
                  <div aria-hidden className="absolute border-[1.8px] border-solid border-white inset-[-1.8px] pointer-events-none rounded-[9.8px]" />
                  <div className="bg-[rgba(0,29,84,0.1)] content-stretch flex items-center p-[7px] relative rounded-[8px] shrink-0" data-name="Container">
                    <div aria-hidden className="absolute border border-[#3f57e4] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="relative shrink-0 size-[18px]" data-name="Container">
                      <div className="absolute inset-0" data-name="Icon">
                        <div className="absolute inset-[12%_40.29%_13.28%_44%]" data-name="More">
                          <svg className="absolute block inset-0 size-full" fill="none" height="13.4488" preserveAspectRatio="none" viewBox="0 0 2.82825 13.4488" width="2.82825">
                            <path clipRule="evenodd" d={svgPaths.p27ad6300} fill="#001D54" fillRule="evenodd" id="More" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      )}
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
type NavigationSummaryPanelProps = {
  className?: string;
  navigation?: "Collapsed";
  summaryPanel?: "Collapsed";
};

function NavigationSummaryPanel({ className, navigation = "Collapsed", summaryPanel = "Collapsed" }: NavigationSummaryPanelProps) {
  return (
    <div className={className || "h-[953px] relative"}>
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center relative size-full">
          <div className="bg-[#e2e6f3] h-full min-w-[64px] relative shrink-0 w-[64px]" data-name=".Main navigation">
            <div className="absolute bottom-0 content-stretch flex flex-col items-center justify-end left-0 overflow-clip px-px w-[64px]" data-name="Footer container">
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
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center pt-[4px] relative shrink-0" data-name="Container">
      <SummaryPanelIconTile className="bg-[#7fb3f5] relative rounded-[8px] shadow-[-4px_4px_8px_0px_rgba(0,0,0,0.2)] shrink-0 size-[32px]" />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Header">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[19px] whitespace-nowrap">
        <p className="leading-[normal]">Peggy Smith Rogers</p>
      </div>
      <div className="min-h-[17px] relative shrink-0" data-name="Breadcrumbs">
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center min-h-[inherit] py-px relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[12px] whitespace-nowrap">
              <p className="leading-[normal]">C-2593</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Header">
      <Container1 />
      <Header1 />
    </div>
  );
}

function Metadata() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">10</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#d4f7d5] relative rounded-[8px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[4px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#156f35] text-[12px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">Success</p>
          </div>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[rgba(0,29,84,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Metadata1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#3a53e9] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">+1 (888) 734-2669</p>
      </div>
    </div>
  );
}

function Metadata2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">1 Rogers St. Cambridge, MA</p>
      </div>
    </div>
  );
}

function Metadata3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">1AS-D109304</p>
      </div>
    </div>
  );
}

function Metadata4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Metadata">
      <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">
        <p className="leading-[normal]">Gold</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center overflow-clip relative shrink-0" data-name="Container">
      <div className="min-w-[350px] relative shrink-0 w-[350px]" data-name="Container">
        <div aria-hidden className="absolute border-[rgba(0,29,84,0.7)] border-r border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start min-w-[inherit] py-[4px] relative size-full">
          <Header />
        </div>
      </div>
      <div className="relative shrink-0" data-name="Container">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-start flex flex-wrap gap-[24px] items-start relative size-full">
            <div className="relative shrink-0" data-name="Priority">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
                  <p className="leading-[normal]">Priority</p>
                </div>
                <Metadata />
              </div>
            </div>
            <div className="relative shrink-0" data-name="Urgency">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
                  <p className="leading-[normal]">Urgency</p>
                </div>
                <div className="relative rounded-[4px] shrink-0" data-name="Status badge">
                  <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-center justify-center relative size-full">
                      <Container2 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0" data-name="Phone number">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
                  <p className="leading-[normal]">Phone number</p>
                </div>
                <Metadata1 />
              </div>
            </div>
            <div className="relative shrink-0" data-name="Address">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
                  <p className="leading-[normal]">Address</p>
                </div>
                <Metadata2 />
              </div>
            </div>
            <div className="relative shrink-0" data-name="Account">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
                  <p className="leading-[normal]">Account</p>
                </div>
                <Metadata3 />
              </div>
            </div>
            <div className="relative shrink-0" data-name="Account type">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full">
                <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:SemiBold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
                  <p className="leading-[normal]">Account type</p>
                </div>
                <Metadata4 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SummaryHeader() {
  return (
    <div className="absolute content-stretch flex h-[64px] items-center left-[16px] overflow-clip py-[12px] right-[234px] top-0" data-name="Summary header">
      <Container />
    </div>
  );
}

function ActionIcons() {
  return (
    <div className="content-stretch cursor-pointer flex h-[31px] items-start relative shrink-0" data-name="Action icons">
      <div className="bg-[rgba(0,29,84,0)] relative rounded-[8px] shrink-0 size-[32px]" data-name="Buttons">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Container">
          <div className="absolute inset-0" data-name="Icon">
            <div className="absolute inset-[12%_13.48%_13.47%_12%]" data-name="Color">
              <svg className="absolute block inset-0 size-full" fill="none" height="13.4145" preserveAspectRatio="none" viewBox="0 0 13.4139 13.4145" width="13.4139">
                <path clipRule="evenodd" d={svgPaths.p2b203300} fill="#001D54" fillRule="evenodd" id="Color" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Buttons buttonType="Icon" className="bg-[rgba(0,29,84,0)] relative rounded-[8px] shrink-0 size-[32px]" />
    </div>
  );
}

function ActionItems() {
  return (
    <div className="absolute content-stretch flex gap-[5px] items-center justify-end right-[15px] top-[16px]" data-name="Action items">
      <ActionIcons />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0" data-name="Container">
      <div aria-hidden className="absolute border-[#3f57e4] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-col font-['Roboto_Flex:Bold',sans-serif] font-bold justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: '"GRAD" 0, "XOPQ" 96, "XTRA" 468, "YOPQ" 79, "YTAS" 750, "YTDE" -203, "YTFI" 738, "YTLC" 514, "YTUC" 712, "wdth" 100' }}>
        <p className="leading-[30px]">History</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] relative shrink-0" data-name="Container">
      <Container6 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <div className="bg-white relative shrink-0" data-name="Summary">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[#001d54] text-[14px] whitespace-nowrap">
              <p className="leading-[32px]">Overview</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Details">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center relative size-full">
            <Container5 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Pulse">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">{`Persons& Objects`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" style={{ backgroundImage: "linear-gradient(90deg, rgb(243, 244, 250) 0%, rgb(243, 244, 250) 100%), linear-gradient(90deg, rgb(226, 230, 243) 0%, rgb(226, 230, 243) 100%)" }} data-name="List">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">Missions</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Utilities">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">Financials</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Utilities">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">Documents</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Utilities">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">Case log</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative shrink-0" data-name="Utilities">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[4px] items-center px-[16px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Roboto_flex:Regular',sans-serif] justify-center leading-[0] min-h-[42px] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">
              <p className="leading-[32px]">Case Hierarchy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-name="Container">
      <Container4 />
    </div>
  );
}

function SubheaderContainer() {
  return (
    <div className="content-stretch flex items-center pb-[4px] relative shrink-0 w-full" data-name="Subheader container">
      <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[17.7px] whitespace-nowrap">Details</p>
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px pb-[4px] relative" data-name="Header">
      <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[15px]">
        <p className="leading-[normal]">Personal details</p>
      </div>
    </div>
  );
}

function Header3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-w-px pb-[4px] relative" data-name="Header">
      <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] min-w-px not-italic relative text-[#001d54] text-[15px]">
        <p className="leading-[normal]">Account details</p>
      </div>
    </div>
  );
}

function Details() {
  return (
    <div className="bg-white relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Details">
      <div className="content-stretch flex flex-col gap-[8px] items-start pb-[24px] pt-[12px] px-[16px] relative size-full">
        <SubheaderContainer />
        <div className="relative shrink-0 w-full" data-name="Details template ⚠︎">
          <div className="content-stretch flex flex-col gap-[24px] items-start relative size-full">
            <div className="relative shrink-0 w-full" data-name="Data templates">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="h-[35px] relative shrink-0 w-full" data-name=".Group header">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center pb-[8px] relative size-full">
                      <Header2 />
                    </div>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">First name</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">Peggy</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">Last name</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">Rogers</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div aria-hidden className="absolute border-[#cfcfcf] border-dashed border-t inset-0 pointer-events-none" />
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic pb-[5px] pt-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">Phone number</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#3f57e4]">(617) 276-1909</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">Street address</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">{`1 Rogers St. `}</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">City</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">Cambridge</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">State</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">MA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Data templates">
              <div className="content-stretch flex flex-col items-start relative size-full">
                <div className="h-[35px] relative shrink-0 w-full" data-name=".Group header">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center pb-[8px] relative size-full">
                      <Header3 />
                    </div>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">Married</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">Yes</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div aria-hidden className="absolute border-[#cfcfcf] border-dashed border-t inset-0 pointer-events-none" />
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">Children</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">2</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div aria-hidden className="absolute border-[#cfcfcf] border-dashed border-t inset-0 pointer-events-none" />
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">Account</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">H6-239-00</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div aria-hidden className="absolute border-[#cfcfcf] border-dashed border-t inset-0 pointer-events-none" />
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">Policies</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">Home, Auto, Flood</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div aria-hidden className="absolute border-[#cfcfcf] border-dashed border-t inset-0 pointer-events-none" />
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center leading-[0] max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">Next renewal</p>
                    </div>
                    <p className="flex-[1_0_0] font-['Roboto_flex:Regular',sans-serif] leading-[normal] min-w-px relative text-[#001d54]">Oct 9</p>
                  </div>
                </div>
                <div className="max-w-[790px] relative shrink-0 w-full" data-name="Field value items">
                  <div aria-hidden className="absolute border-[#cfcfcf] border-dashed border-t inset-0 pointer-events-none" />
                  <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start leading-[0] max-w-[inherit] not-italic py-[4px] relative size-full text-[14px]">
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Semi-bold',sans-serif] justify-center max-w-[180px] min-w-[80px] relative text-[rgba(0,29,84,0.6)]">
                      <p className="leading-[normal]">Premium</p>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col font-['Roboto_flex:Regular',sans-serif] justify-center min-w-px relative text-[#001d54]">
                      <p className="leading-[normal]">$ 2,301.34</p>
                    </div>
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

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Content">
      <div className="bg-[#f3f4fa] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-full" data-name="Horizontal tabs">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start relative size-full">
            <Container3 />
          </div>
        </div>
      </div>
      <Details />
    </div>
  );
}

function WorkArea1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-name="Work area">
      <Assignments className="relative rounded-[8px] shrink-0 w-full" />
      <Content1 />
    </div>
  );
}

function PageContent() {
  return (
    <div className="content-stretch flex h-[888px] items-start py-[20px] relative shrink-0 w-full" data-name="Page content">
      <WorkArea1 />
      <UtilitiesPanelDefault className="relative rounded-bl-[16px] rounded-tl-[16px] shrink-0" />
    </div>
  );
}

function WorkArea() {
  return (
    <div className="flex-[1_0_0] min-w-px relative" data-name="Work area">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end pl-[20px] relative size-full">
          <div className="bg-white h-[64px] relative rounded-bl-[16px] shrink-0 w-full" data-name=".Summary panel">
            <SummaryHeader />
            <ActionItems />
            <div className="absolute bg-white drop-shadow-[0px_0px_12.5px_rgba(0,0,0,0.25)] left-[20px] rounded-[8px] size-[24px] top-[52px]" data-name="Expand/collapse toggle">
              <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Icon">
                <div className="absolute inset-[40%_32.75%_40.46%_32%]" data-name="micro-arrow-down">
                  <svg className="absolute block inset-0 size-full" fill="none" height="4.68975" preserveAspectRatio="none" viewBox="0 0 8.46 4.68975" width="8.46">
                    <path clipRule="evenodd" d={svgPaths.p89df00} fill="#3F57E4" fillRule="evenodd" id="micro-arrow-down" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <PageContent />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex items-center left-0 right-0 top-[48px]" data-name="Content">
      <NavigationSummaryPanel className="h-[953px] relative shrink-0" />
      <WorkArea />
    </div>
  );
}

export default function PageTemplates() {
  return (
    <div className="bg-[#e2e6f3] relative size-full" data-name="Page templates">
      <Content />
      <AppHeader className="absolute bg-white h-[48px] left-0 right-0 top-0" />
    </div>
  );
}