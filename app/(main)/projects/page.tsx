"use client";

import ProjectsHeaderImage from "./HeadImage";
import ProjectsContents from "./ProjectsContents";
import Page from "@/components/layout/Page";

export default function Projects() {
  return (
    <Page
      frontMatter={{
        title: "Projects",
        description: "Showcase of my front-end related work.",
      }}
      headerImage={<ProjectsHeaderImage />}
    >
      <ProjectsContents />
    </Page>
  );
}
