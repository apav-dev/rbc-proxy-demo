import { ChevronDownIcon } from "@heroicons/react/24/outline";

export interface FinProHeaderProps {}

const FinProHeader = ({}: FinProHeaderProps) => {
  return (
    <div className="inline-flex  flex-col items-start justify-center gap-5 border-b border-neutral-500 border-opacity-50 bg-white px-[100px] pb-5 pt-3">
      <div className="inline-flex items-start justify-start gap-4 self-stretch">
        <div className="flex h-6 shrink grow basis-0 items-start justify-start gap-4">
          <div className="text-sm font-normal leading-snug text-blue-950">
            Personal
          </div>
          <div className="text-sm font-normal leading-snug text-blue-950">
            Small Business
          </div>
          <div className="text-sm font-normal leading-snug text-blue-950">
            Commerical
          </div>
          <div className="inline-flex flex-col items-start justify-start">
            <div className="text-sm font-normal leading-snug text-blue-950">
              Wealth Management
            </div>
            <div className="h-0.5 self-stretch bg-blue-950"></div>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <div className="text-sm font-normal leading-snug text-blue-950">
            Investor Relations
          </div>
          <div className="text-sm font-normal leading-snug text-blue-950">
            Careers
          </div>
          <div className="text-sm font-normal leading-snug text-blue-950">
            Login
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-start gap-4">
        <div className="flex items-center justify-start gap-1 self-stretch">
          <div className="relative h-[37.52px] w-[43.26px]"></div>
          <div className="text-3xl font-extrabold text-blue-950">Capital</div>
          <div className="h-9 w-px bg-orange-500"></div>
          <div className="text-[15px] font-bold text-blue-950">
            Wealth
            <br />
            Management
          </div>
        </div>
        <div className="flex shrink grow basis-0 items-center justify-start gap-8 self-stretch px-8">
          <div className="flex items-center justify-center">
            <div className="text-base font-bold leading-[30px] text-blue-950">
              Our Process
            </div>
            <div className="inline-flex h-5 w-5 flex-col items-center justify-center gap-2.5 p-[5px]">
              <div className="text-center text-xs font-black text-blue-950">
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-base font-bold leading-[30px] text-blue-950">
              Services
            </div>
            <div className="inline-flex h-5 w-5 flex-col items-center justify-center gap-2.5 p-[5px]">
              <div className="text-center text-xs font-black text-blue-950">
                <ChevronDownIcon className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <div className="text-base font-bold leading-[30px] text-blue-950">
              Insights
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinProHeader;
