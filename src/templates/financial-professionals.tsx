import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Appointment from "../components/Appointment";
import FinProAbout from "../components/FinProAbout";
import FinProHeader from "../components/FinProHeader";
import FinProHero from "../components/FinProHero";
import FinProNav from "../components/FinProNav";
import MainLayout from "../components/MainLayout";
import Section from "../components/Section";
import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "fin-pro",
    localization: { locales: ["en"] },
    fields: [
      "mainPhone",
      "c_primaryEmail",
      "name",
      "c_jobTitle",
      "address",
      "headshot",
      "description",
      "slug",
    ],
    filter: { savedFilterIds: ["1344032459"] },
  },
  pageUrlField: "c_pageURL",
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? `financial-professionals/${document.entityId}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Blog Home",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export default function FinPro({ document }: TemplateProps) {
  return (
    <MainLayout backgroundColor="#FFFFFF">
      <FinProHeader />
      <FinProHero
        name={`${document.name}`}
        title={`${document.c_jobTitle}`}
        address={{
          line1: `${document.address.line1}`,
          line2: ``,
          city: `${document.address.city}`,
          region: `${document.address.region}`,
          postalCode: `${document.address.postalCode}`,
        }}
        phone={`${document.mainPhone}`}
        headshotUrl={`${document.headshot.url}`}
      />
      <FinProNav />
      <FinProAbout
        name={`${document.name}`}
        description={`${document.description}`}
      />
      <Section>
        <Appointment
          phone={`${document.mainPhone}`}
          email={`${document.c_primaryEmail}`}
        />
      </Section>
    </MainLayout>
  );
}
