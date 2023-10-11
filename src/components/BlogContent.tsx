import Container from "./Container";
import Image from "./Image";
import MarkdownContent from "./MarkdownContent";
import Text from "./Text";
import Heading from "./Heading";
import HorizontalDivider from "./HorizontalDivider";
import Date from "./Date";
import BackButton from "./BackButton";

interface BlogProps {
  authorName: string;
  publishedDate: string;
  title: string;
  coverPhoto: {
    image: {
      url: string;
      alternateText: string;
    };
  };
  body: {
    markdown: string;
  };
}

export const initialProps: BlogProps = {
  authorName: "Author Name",
  publishedDate: "2023-06-01",
  title: "Blog Title",
  body: {
    markdown: "Blog Body",
  },
  coverPhoto: {
    image: {
      url: "https://placehold.co/1920x1280",
      alternateText: "Gray placeholder image.",
    },
  },
};

const BlogContent = ({
  authorName,
  publishedDate,
  title,
  body,
  coverPhoto,
}: BlogProps) => {
  return (
    <Container
      layout="Column"
      maxWidth="M"
      flexGap="8"
      marginTop="32px"
      marginBottom="32px"
      marginLeft="Auto"
      marginRight="Auto"
    >
      <BackButton backToUrl="./index.html" />
      <Container layout="Row" flexGap="2" itemAlignment="Center">
        <Text
          text={authorName}
          color="Light Gray"
          weight="Light"
          textSize="M"
        />
        <HorizontalDivider height="16px" color="Light Gray" />
        <Date
          color="Light Gray"
          date={publishedDate}
          textSize="M"
          weight="Light"
        />
      </Container>
      <Heading
        text={title}
        align="Left"
        rank="1"
        weight="Bold"
        color="Dark Gray"
      />
      <Image
        src={coverPhoto.image.url}
        alt={coverPhoto.image.alternateText}
        aspect="Rectangle"
        size="Large"
      />
      <MarkdownContent content={body.markdown} />
    </Container>
  );
};

export default BlogContent;
