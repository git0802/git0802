import Page from "@/components/layout/Page";
import TILContents from "./TILContents";
import TILHeadImage from "./HeadImage";

function TIL() {
  return (
    <Page
      frontMatter={{
        title: "Today I Learned",
        description: `Short notes on front-end related topics.`,
      }}
      headerImage={<TILHeadImage />}
    >
      <TILContents />
    </Page>
  );
}

export default TIL;
