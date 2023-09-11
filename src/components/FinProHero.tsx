import { Address, Image, ImageThumbnail } from "../types/autogen";

export interface FinProHeroProps {
  name?: string;
  title?: string;
  address?: Address;
  phone?: string;
  email?: string;
  headshot?: Image;
}

export const initialProps: FinProHeroProps = {
  name: "Jane Doe",
  title: "Financial Professional",
  address: {
    line1: "123 Main St",
    line2: "Suite 100",
    city: "New York",
    region: "NY",
    postalCode: "10001",
  },
  phone: "+18888888888",
  email: "finPro@email.com",
};

const FinProHero = ({
  name,
  title,
  address,
  phone,
  email,
  headshot,
}: FinProHeroProps) => {
  return (
    <div className="inline-flex  items-end justify-center gap-16 bg-blue-950 bg-opacity-80">
      {headshot && (
        <img className="h-80 w-80 rounded-full" src={headshot.url} />
      )}
      <div className="inline-flex flex-col items-start justify-center gap-4 self-stretch">
        <div className="self-stretch text-[34px] font-bold leading-10 text-white">
          {name}
        </div>
        <div className="text-center text-lg font-bold leading-normal text-white">
          {title}
        </div>
        <div className="inline-flex items-center justify-start gap-4 self-stretch">
          <div className="shrink grow basis-0 text-base font-normal leading-normal text-white">
            {address?.line1}
            <br />
            {`${address?.city}, ${address?.city} ${address?.postalCode}`}
          </div>
          <div className="inline-flex flex-col items-start justify-center gap-1">
            <div className="inline-flex items-center justify-start gap-2">
              <div className="flex h-4 w-4 items-center justify-center">
                <div className="h-5 w-5 text-center text-base font-light text-white">
                  
                </div>
              </div>
              <div className="text-base font-normal leading-normal text-white">
                {phone}
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2">
              <div className="flex h-4 w-4 items-center justify-center">
                <div className="h-5 w-5 text-center text-base font-light text-white">
                  
                </div>
              </div>
              <div className="text-base font-normal leading-normal text-white underline">
                {email}
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[125px] flex-col items-center justify-center rounded-md bg-white">
          <div className="inline-flex shrink grow basis-0 items-center justify-start gap-2.5 px-6 py-2">
            <div className="text-center text-sm font-normal leading-snug text-blue-950">
              Get In Touch
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinProHero;
