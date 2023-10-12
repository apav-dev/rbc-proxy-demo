import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export interface AppointmentProps {
  phone?: string;
  email?: string;
}

export const initialProps: AppointmentProps = {
  phone: "(555) 555-5555",
  email: "email@capital.com",
};

const Appointment = ({ phone, email }: AppointmentProps) => {
  return (
    <div className="inline-flex items-start justify-center gap-[30px] self-stretch">
      <div className="inline-flex flex-col items-start justify-start gap-8 self-stretch">
        <div className="flex flex-col items-center justify-start gap-4 self-stretch">
          <div className="flex h-6 shrink grow basis-0 items-center justify-start gap-2">
            <div className="flex h-4 w-4 items-center justify-center">
              <div className="h-5 w-5 text-center text-base font-light text-zinc-800">
                <PhoneIcon />
              </div>
            </div>
            <div className="text-base font-normal leading-normal text-zinc-800">
              {phone}
            </div>
          </div>
          <div className="flex items-center justify-start gap-2">
            <div className="flex h-4 w-4 items-center justify-center">
              <div className="h-5 w-5 text-center text-base font-light text-zinc-800">
                <EnvelopeIcon />
              </div>
            </div>
            <div className="text-base font-normal leading-normal  text-zinc-800 underline">
              {email}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center rounded-md border border-blue-950">
          <div className="inline-flex shrink grow basis-0 items-center justify-start gap-2.5 px-6 py-2">
            <div className="text-center font-['Lato'] text-sm font-normal leading-snug text-blue-950">
              Request An Appointment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
