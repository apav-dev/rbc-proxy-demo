import {
  GetHeadConfig,
  GetPath,
  HeadConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import FinProHeader from "../components/FinProHeader";
import "../index.css";

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return "header";
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

export default function Header({ document }: TemplateProps) {
  return <FinProHeader />;
}
