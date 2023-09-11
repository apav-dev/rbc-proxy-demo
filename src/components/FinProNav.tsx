export interface FinProNavProps {}

const FinProNav = ({}: FinProNavProps) => {
  return (
    <div className="inline-flex items-center justify-center gap-16 border-b border-gray-50 bg-white px-[150px] py-4">
      <div className="text-base font-bold leading-[30px] text-blue-950">
        About
      </div>
      <div className="text-base font-bold leading-[30px] text-blue-950">
        Insights
      </div>
      <div className="text-base font-bold leading-[30px] text-blue-950">
        Let’s Talk
      </div>
    </div>
  );
};

export default FinProNav;
