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
import StaticMap from "../components/StaticMap";
import "../index.css";
import BlogSection from "../components/BlogSection";

export const config: TemplateConfig = {
  stream: {
    $id: "fin-pro",
    localization: { locales: ["en"] },
    fields: [
      "name",
      "c_jobTitle",
      "address",
      "mainPhone",
      "emails",
      "headshot",
      "description",
      "slug",
      "c_featuredBlogs.name",
      "c_featuredBlogs.slug",
      "c_featuredBlogs.c_publishDate",
      "c_featuredBlogs.c_coverPhoto",
      "c_featuredBlogs.c_author",
      "c_featuredBlogs.c_shortDescription",
    ],
    filter: { savedFilterIds: ["1344032459"] },
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug ?? document.entityId.toString();
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

export default function Blog({ document }: TemplateProps) {
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
        headshotUrl={`${document.headshot?.url}`}
      />
      <FinProNav />
      <FinProAbout
        name={`${document.name}`}
        description={`${document.description}`}
      />
      <Section>
        <Appointment />
        <StaticMap lat={40.7128} lng={74.006} />
      </Section>
      <BlogSection blogs={document.c_featuredBlogs} />
    </MainLayout>
  );
}
