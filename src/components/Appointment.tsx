import StaticMap from "./StaticMap"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export interface AppointmentProps {
  phone?: string;
  email?: string;
}

export const initialProps: AppointmentProps = {
  phone: "(555) 555-5555",
  email: "email@capital.com",
};

const Appointment = ({phone, email}: AppointmentProps) => {
  return (
      <div className="self-stretch justify-center items-start gap-[30px] inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch justify-start items-center gap-4 inline-flex">
            <div className="grow shrink basis-0 h-6 justify-start items-center gap-2 flex">
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-5 h-5 text-center text-zinc-800 text-base font-light">
                  <PhoneIcon />
                  </div>
              </div>
              <div className="text-zinc-800 text-base font-normal leading-normal">{phone}</div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="w-4 h-4 justify-center items-center flex">
                <div className="w-5 h-5 text-center text-zinc-800 text-base font-light"><EnvelopeIcon /></div>
              </div>
              <div className="text-zinc-800 text-base font-normal  underline leading-normal">{email}</div>
            </div>
          </div>
          <div className="rounded-md border border-blue-950 flex-col justify-center items-center flex">
            <div className="grow shrink basis-0 px-6 py-2 justify-start items-center gap-2.5 inline-flex">
              <div className="text-center text-blue-950 text-sm font-normal font-['Lato'] leading-snug">Request An Appointment</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Appointment;