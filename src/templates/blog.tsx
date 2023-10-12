import { GetPath, TemplateConfig, TemplateProps } from "@yext/pages";
import BlogContent from "../components/BlogContent";
import FinProHeader from "../components/FinProHeader";
import MainLayout from "../components/MainLayout";

import "../index.css";

export const config: TemplateConfig = {
  stream: {
    $id: "studio-stream-id-blog",
    localization: { locales: ["en"] },
    filter: { entityTypes: ["ce_blog"] },
    fields: [
      "c_author",
      "c_publishDate",
      "name",
      "c_coverPhoto",
      "c_blogContent",
      "slug",
    ],
  },
};
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug}`;
};

export default function Blog({ document }: TemplateProps) {
  return (
    <MainLayout backgroundColor="#FFFFFF">
      <FinProHeader />
      <BlogContent
        authorName={`${document.c_author}`}
        publishedDate={`${document.c_publishDate}`}
        title={`${document.name}`}
        coverPhoto={{
          image: {
            url: `${document.c_coverPhoto.image.url}`,
            alternateText: "Gray placeholder image.",
          },
        }}
        body={{ markdown: `${document.c_blogContent.markdown}` }}
      />
    </MainLayout>
  );
}
