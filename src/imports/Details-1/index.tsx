import svgPaths from "./svg-6yzfkhpj4h";
import imgDropdown from "./577d7ae02e48923d0b7ce5b477b3ef07449b1ba4.png";

function SubheaderContainer() {
  return (
    <div className="content-stretch flex items-center pb-[4px] relative shrink-0 w-full" data-name="Subheader container">
      <div aria-hidden className="absolute border-[#cfcfcf] border-b border-solid inset-0 pointer-events-none" />
      <p className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#001d54] text-[17.7px] whitespace-nowrap">History</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14" preserveAspectRatio="none" viewBox="0 0 14 14" width="14">
        <g id="Icon">
          <path d={svgPaths.p35499480} id="Vector" stroke="#7A5200" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
          <path d={svgPaths.p22813800} id="Vector_2" stroke="#7A5200" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-center pt-[2px] relative shrink-0 w-[14px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[18px] relative shrink-0 text-[#7a5200] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Sticky Note
      </p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pt-[2px] relative shrink-0 w-[207.836px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        This is a sample message.
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-[139.836_0_0] flex-col items-start min-w-px relative" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#fef3d8] border-[#d97706] border-l-3 border-solid content-stretch flex gap-[12px] items-start px-[16px] py-[12px] relative rounded-[4px] shrink-0 w-[268.836px]" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start pt-[16px] px-[16px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[13px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13" preserveAspectRatio="none" viewBox="0 0 13 13" width="13">
        <g clipPath="url(#clip0_0_16)" id="Icon">
          <path d={svgPaths.p169d4200} id="Vector" stroke="#003781" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.625" />
          <path d="M8.9375 8.9375L11.375 11.375" id="Vector_2" stroke="#003781" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.625" />
        </g>
        <defs>
          <clipPath id="clip0_0_16">
            <rect fill="white" height="13" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <Icon1 />
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12px] relative shrink-0 text-[#003781] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Filter
      </p>
    </div>
  );
}

function ButtonRefresh() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex h-[28px] items-center justify-center px-[12px] relative rounded-[4px] shrink-0" data-name="Button - Refresh">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold','Noto_Sans:SemiBold','Noto_Sans_Math:Regular','Noto_Sans_Symbols:SemiBold','Noto_Sans_Symbols2:Regular',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ↻ Refresh
      </p>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        15 results out of 15
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <ButtonRefresh />
      <Text2 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f7f8fa] border-[#edeef1] border-b border-solid border-t content-stretch flex items-center justify-between px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Container7 />
    </div>
  );
}

function ContainerMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0 w-full" data-name="Container:margin">
      <Container6 />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#9ea4af] text-[11px] tracking-[0.88px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Order
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#003781] content-stretch flex flex-col h-full items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Newest
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[12px] py-[4px] relative shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Oldest
      </p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f7f8fa] border border-[#edeef1] border-solid content-stretch flex h-[28px] items-start overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-end shrink-0" data-name="Container">
      <Text3 />
      <Container11 />
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#9ea4af] text-[11px] tracking-[0.88px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Event type
      </p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="h-[28px] pointer-events-none relative rounded-[4px] shrink-0 w-[331.859px]" data-name="Dropdown">
      <div aria-hidden className="absolute inset-0 rounded-[4px]">
        <div className="absolute bg-white inset-0 rounded-[4px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[4px]">
          <img alt="" className="absolute h-1/2 left-0 max-w-none top-1/4 w-[4.22%]" src={imgDropdown} />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#edeef1] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-end shrink-0" data-name="Container">
      <Text4 />
      <Dropdown />
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#9ea4af] text-[11px] tracking-[0.88px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Date range
      </p>
    </div>
  );
}

function DatePicker() {
  return <div className="bg-white border border-[#edeef1] border-solid flex-[156.93_0_0] h-[30px] min-w-px relative rounded-[4px]" data-name="Date Picker" />;
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ca3af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        –
      </p>
    </div>
  );
}

function DatePicker1() {
  return <div className="bg-white border border-[#edeef1] border-solid flex-[156.938_0_0] h-[30px] min-w-px relative rounded-[4px]" data-name="Date Picker" />;
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0 w-full" data-name="Container">
      <DatePicker />
      <Text6 />
      <DatePicker1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="col-3 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-1 self-end shrink-0" data-name="Container">
      <Text5 />
      <Container14 />
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[16.5px] relative shrink-0 text-[#9ea4af] text-[11px] tracking-[0.88px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Keyword
      </p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_13)" id="Icon">
          <path d={svgPaths.p41abd80} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M8.25 8.25L10.5 10.5" id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_13">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex items-center left-[8px] top-[8px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white border border-[#edeef1] border-solid content-stretch flex flex-col h-[28px] items-start justify-center left-0 overflow-clip pl-[24px] pr-[8px] py-[4px] rounded-[4px] top-0 w-[331.867px]" data-name="Text Input">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#9ea4af] text-[12px] w-full" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Search…
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Container">
      <Container17 />
      <TextInput />
    </div>
  );
}

function Container15() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[4px] items-start justify-self-stretch relative row-2 self-end shrink-0" data-name="Container">
      <Text7 />
      <Container16 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#e8eef6] gap-x-[16px] gap-y-[16px] grid grid-cols-[____128.41px_331.86px_331.87px_331.87px] grid-rows-[__50.50px_50.50px] px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container12 />
      <Container13 />
      <Container15 />
    </div>
  );
}

function Container8() {
  return (
    <div className="border-[#edeef1] border-b border-solid content-stretch flex flex-col h-[75.5px] items-start max-h-[300px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#003781] content-stretch flex h-[26px] items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[110px]" data-name="Container">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[12px] text-white tracking-[0.36px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        28/04/2026
      </p>
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pt-[3px] relative row-1 self-start shrink-0" data-name="Container:margin">
      <Container20 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Email Interaction
      </p>
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#e0eaf8] content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#003781] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        I-31004
      </p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start pt-[4px] relative shrink-0 w-[1012px]" data-name="Container">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a1d24] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Settlement Proposal Sent
      </p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_10)" id="Icon">
          <path d={svgPaths.p269f4100} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p30031900} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon3 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created by: Ajit Singh
      </p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_7)" id="Icon">
          <path d={svgPaths.p339d2580} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p14368b00} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_7">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon4 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created on: 28/04/2026
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M1.5 3H10.5V9.75H1.5V3Z" id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 3L6 6.75L10.5 3" id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon5 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Incoming caller role: Agent
      </p>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text15 />
      <Text16 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex gap-[4px] h-[26px] items-center pt-[8px] relative shrink-0 w-[1012px]" data-name="Container">
      <Text10 />
      <Text11 />
      <Text14 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-[954_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Proposition de règlement à l'amiable envoyée au preneur d'assurance pour approbation.`}</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12px] relative shrink-0 text-[#003781] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Edit
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f7f8fa] border-[#edeef1] border-solid border-t content-stretch flex gap-[12px] items-start px-[16px] py-[8px] relative shrink-0 w-[795px]" data-name="Container">
      <Text17 />
      <Button3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex flex-col h-[142px] items-start overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <Container23 />
      <Container27 />
    </div>
  );
}

function Container21() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-start relative row-1 self-stretch shrink-0 w-[797px]" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container19() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__110px_1046px] grid-rows-[_142px] relative shrink-0 w-full" data-name="Container">
      <ContainerMargin1 />
      <Container21 />
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#003781] content-stretch flex h-[26px] items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[110px]" data-name="Container">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[12px] text-white tracking-[0.36px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        25/04/2026
      </p>
    </div>
  );
}

function ContainerMargin3() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pt-[3px] relative row-1 self-start shrink-0" data-name="Container:margin">
      <Container29 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Case Event
      </p>
    </div>
  );
}

function Text19() {
  return (
    <div className="bg-[#e0eaf8] content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#003781] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        CF-1403342
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start pt-[4px] relative shrink-0 w-[1012px]" data-name="Container">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a1d24] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Reserve Updated
      </p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_10)" id="Icon">
          <path d={svgPaths.p269f4100} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p30031900} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon6 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created by: Ajit Singh
      </p>
    </div>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_7)" id="Icon">
          <path d={svgPaths.p339d2580} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p14368b00} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_7">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon7 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created on: 25/04/2026
      </p>
    </div>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text22 />
      <Text23 />
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M1.5 3H10.5V9.75H1.5V3Z" id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 3L6 6.75L10.5 3" id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon8 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Incoming caller role: Agent
      </p>
    </div>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text25 />
      <Text26 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[4px] h-[26px] items-center pt-[8px] relative shrink-0 w-[1012px]" data-name="Container">
      <Text20 />
      <Text21 />
      <Text24 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-[1012_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Provision mise à jour de € 12,450 à € 11,800 suite au rapport d'expertise.`}</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[#f7f8fa] border-[#edeef1] border-solid border-t content-stretch flex items-start px-[16px] py-[8px] relative shrink-0 w-[793px]" data-name="Container">
      <Text27 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex flex-col h-[132px] items-start overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container36 />
    </div>
  );
}

function Container30() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-start relative row-1 self-stretch shrink-0 w-[794px]" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container28() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__110px_1046px] grid-rows-[_132px] relative shrink-0 w-[1020px]" data-name="Container">
      <ContainerMargin3 />
      <Container30 />
    </div>
  );
}

function ContainerMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container28 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[#003781] content-stretch flex h-[26px] items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[110px]" data-name="Container">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[12px] text-white tracking-[0.36px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        24/04/2026
      </p>
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pt-[3px] relative row-1 self-start shrink-0" data-name="Container:margin">
      <Container38 />
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Document Upload
      </p>
    </div>
  );
}

function Text29() {
  return (
    <div className="bg-[#e0eaf8] content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#003781] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        CF-1403342
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start pt-[4px] relative shrink-0 w-[1012px]" data-name="Container">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a1d24] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Rapport d'expertise reçu`}</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_10)" id="Icon">
          <path d={svgPaths.p269f4100} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p30031900} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon9 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created by: A. Martens
      </p>
    </div>
  );
}

function Text32() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_7)" id="Icon">
          <path d={svgPaths.p339d2580} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p14368b00} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_7">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon10 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created on: 24/04/2026
      </p>
    </div>
  );
}

function Text31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text32 />
      <Text33 />
    </div>
  );
}

function Text35() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M1.5 3H10.5V9.75H1.5V3Z" id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 3L6 6.75L10.5 3" id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text36() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon11 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Incoming caller role: Expert
      </p>
    </div>
  );
}

function Text34() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text35 />
      <Text36 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[4px] h-[26px] items-center pt-[8px] relative shrink-0 w-[1012px]" data-name="Container">
      <Text30 />
      <Text31 />
      <Text34 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function Text37() {
  return (
    <div className="content-stretch flex flex-[1012_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Rapport d'expertise complet reçu. Valeur du dommage estimée à € 11,800.`}</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#f7f8fa] border-[#edeef1] border-solid border-t content-stretch flex items-start px-[16px] py-[8px] relative shrink-0 w-[789px]" data-name="Container">
      <Text37 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex flex-col h-[132px] items-start overflow-clip relative rounded-[6px] shrink-0 w-[791px]" data-name="Container">
      <Container41 />
      <Container45 />
    </div>
  );
}

function Container39() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Container40 />
    </div>
  );
}

function Container37() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__110px_1046px] grid-rows-[_132px] relative shrink-0 w-[897px]" data-name="Container">
      <ContainerMargin5 />
      <Container39 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container37 />
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#003781] content-stretch flex h-[26px] items-center justify-center px-[12px] py-[4px] relative rounded-[8px] shrink-0 w-[110px]" data-name="Container">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[12px] text-white tracking-[0.36px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        22/04/2026
      </p>
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pt-[3px] relative row-1 self-start shrink-0" data-name="Container:margin">
      <Container47 />
    </div>
  );
}

function Text38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Phone Interaction
      </p>
    </div>
  );
}

function Text39() {
  return (
    <div className="bg-[#e0eaf8] content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#003781] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        I-30997
      </p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Text38 />
      <Text39 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start pt-[4px] relative shrink-0 w-[1012px]" data-name="Container">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a1d24] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Incoming Call
      </p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_10)" id="Icon">
          <path d={svgPaths.p269f4100} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p30031900} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon12 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created by: Dhruv Patyal
      </p>
    </div>
  );
}

function Text42() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_7)" id="Icon">
          <path d={svgPaths.p339d2580} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p14368b00} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_7">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon13 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created on: 22/04/2026
      </p>
    </div>
  );
}

function Text41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text42 />
      <Text43 />
    </div>
  );
}

function Text45() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M1.5 3H10.5V9.75H1.5V3Z" id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 3L6 6.75L10.5 3" id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon14 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Incoming caller role: Client
      </p>
    </div>
  );
}

function Text44() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text45 />
      <Text46 />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[4px] h-[26px] items-center pt-[8px] relative shrink-0 w-[1012px]" data-name="Container">
      <Text40 />
      <Text41 />
      <Text44 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
      <Container53 />
    </div>
  );
}

function Text47() {
  return (
    <div className="content-stretch flex flex-[954_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Raison de l'appel : Consultation du sinistre`}</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12px] relative shrink-0 text-[#003781] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Edit
      </p>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#f7f8fa] border-[#edeef1] border-solid border-t content-stretch flex gap-[12px] items-start px-[16px] py-[8px] relative shrink-0 w-[785px]" data-name="Container">
      <Text47 />
      <Button4 />
    </div>
  );
}

function Container49() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex flex-col h-[142px] items-start overflow-clip relative rounded-[6px] shrink-0 w-[786px]" data-name="Container">
      <Container50 />
      <Container54 />
    </div>
  );
}

function Text48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Task Assignment
      </p>
    </div>
  );
}

function Text49() {
  return (
    <div className="bg-[#e0eaf8] content-stretch flex items-center px-[8px] py-px relative rounded-[9999px] shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[#003781] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        CF-1403342
      </p>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Text48 />
      <Text49 />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col h-[25px] items-start pt-[4px] relative shrink-0 w-[1012px]" data-name="Container">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[21px] relative shrink-0 text-[#1a1d24] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Liability Assessment Assigned
      </p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_10)" id="Icon">
          <path d={svgPaths.p269f4100} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p30031900} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_10">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text50() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon15 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created by: Ajit Singh
      </p>
    </div>
  );
}

function Text52() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g clipPath="url(#clip0_0_7)" id="Icon">
          <path d={svgPaths.p339d2580} id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p14368b00} id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_0_7">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text53() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon16 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Created on: 22/04/2026
      </p>
    </div>
  );
}

function Text51() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text52 />
      <Text53 />
    </div>
  );
}

function Text55() {
  return (
    <div className="content-stretch flex flex-col h-[18px] items-start px-[4px] relative shrink-0 w-[11px]" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ·
      </p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 12 12" width="12">
        <g id="Icon">
          <path d="M1.5 3H10.5V9.75H1.5V3Z" id="Vector" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M1.5 3L6 6.75L10.5 3" id="Vector_2" stroke="#9EA4AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Text56() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Text">
      <Icon17 />
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Incoming caller role: Agent
      </p>
    </div>
  );
}

function Text54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Text">
      <Text55 />
      <Text56 />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[4px] h-[26px] items-center pt-[8px] relative shrink-0 w-[1012px]" data-name="Container">
      <Text50 />
      <Text51 />
      <Text54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function Text57() {
  return (
    <div className="content-stretch flex flex-[954_0_0] flex-col items-start min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>{`Tâche d'évaluation de la responsabilité assignée à l'équipe juridique.`}</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[12px] relative shrink-0 text-[#003781] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Edit
      </p>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[#f7f8fa] border-[#edeef1] border-solid border-t content-stretch flex gap-[12px] items-start px-[16px] py-[8px] relative shrink-0 w-[1044px]" data-name="Container">
      <Text57 />
      <Button5 />
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex flex-col h-[142px] items-start overflow-clip relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <Container56 />
      <Container60 />
    </div>
  );
}

function Container48() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[12px] items-start justify-self-start relative row-1 self-stretch shrink-0 w-[787px]" data-name="Container">
      <Container49 />
      <Container55 />
    </div>
  );
}

function Container46() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[__110px_1046px] grid-rows-[_296px] relative shrink-0 w-[1068px]" data-name="Container">
      <ContainerMargin7 />
      <Container48 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full" data-name="Container:margin">
      <Container46 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-[806_0_0] flex-col items-start min-h-px overflow-clip p-[16px] relative w-full" data-name="Container">
      <Container19 />
      <ContainerMargin2 />
      <ContainerMargin4 />
      <ContainerMargin6 />
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex h-[28px] items-center justify-center min-w-[28px] opacity-40 px-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        ‹ Prev
      </p>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#004b9a] border border-[#004b9a] border-solid content-stretch flex items-center justify-center min-w-[28px] px-[8px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[18px] relative shrink-0 text-[12px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        1
      </p>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex items-center justify-center min-w-[28px] px-[8px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        2
      </p>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex items-center justify-center min-w-[28px] px-[8px] relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        3
      </p>
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-white border border-[#edeef1] border-solid content-stretch flex h-[28px] items-center justify-center min-w-[28px] px-[8px] relative rounded-[4px] shrink-0" data-name="Button">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#5c6270] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Next ›
      </p>
    </div>
  );
}

function Container61() {
  return (
    <div className="border-[#edeef1] border-solid border-t content-stretch flex gap-[4px] items-center justify-center px-[16px] py-[12px] relative shrink-0 w-full" data-name="Container">
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
    </div>
  );
}

function Text58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Text">
      <p className="[word-break:break-word] font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#9ea4af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
        Showing 1–5 of 15 results
      </p>
    </div>
  );
}

function Container62() {
  return (
    <div className="border-[#edeef1] border-solid border-t content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0 w-full" data-name="Container">
      <Text58 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[1110.5px] items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <ContainerMargin />
      <Container8 />
      <Container18 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[1112.5px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
      </div>
      <div aria-hidden className="absolute border border-[#edeef1] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[16px] relative rounded-bl-[16px] rounded-br-[16px] shrink-0 w-full" data-name="Card">
      <Container />
    </div>
  );
}

export default function Details() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start pb-[20px] pt-[16px] px-[20px] relative rounded-[16px] size-full" data-name="Details">
      <SubheaderContainer />
      <Card />
    </div>
  );
}