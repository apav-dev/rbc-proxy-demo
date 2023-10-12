export interface SectionProps {
  children: React.ReactNode;
  
}

const Section = ({children}: SectionProps) => {
  return (
    <div className="px-[150px] py-16 bg-white flex-col justify-start items-center gap-8 flex">
      <div className="self-stretch text-center text-[34px] font-bold leading-10 text-blue-950">Let’s Talk</div>
      <div className="flex gap-x-8 justify-between">
      {children}
      </div>
    </div>
  )
}

export default Section;