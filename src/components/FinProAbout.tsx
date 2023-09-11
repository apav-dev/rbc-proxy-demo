export interface FinProAboutProps {
  name?: string;
  description?: string;
}

export const initialProps: FinProAboutProps = {
  name: "Jane Doe",
  description: "Description Goes Here",
};

const FinProAbout = ({ name, description }: FinProAboutProps) => {
  return (
    <div className="inline-flex  flex-col items-center justify-start gap-8 bg-gray-50 px-[150px] py-16">
      <div className="self-stretch text-center text-[34px] font-bold leading-10 text-blue-950">
        {`About ${name}`}
      </div>
      <p className="self-stretch text-base font-normal leading-normal text-black">
        {description}
      </p>
    </div>
  );
};

export default FinProAbout;
