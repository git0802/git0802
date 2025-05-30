import { getPageOgImageUrl } from "@/helpers/page";
import { TPageFrontMatter } from "@/types";
import clsx from "clsx";

import type { PropsWithChildren, ReactNode } from "react";
import SkipNavigation from "../ui/SkipNavigation";
import PageHeader from "../ui/wireframes/PageHeader";

interface PageProps {
  frontMatter: TPageFrontMatter;
  headerImage?: ReactNode;
}

function Page({
  frontMatter: { title, description, caption },
  children = null,
  headerImage = null,
}: PropsWithChildren<PageProps>) {
  const image = getPageOgImageUrl({
    caption,
    title,
    description,
  });

  return (
    <>
      <SkipNavigation skipTableOfContents={false} />
      <PageHeader
        title={title}
        description={description}
        caption={caption}
        headerImage={headerImage}
      />
      <div className={clsx("scroll-mt-[86px]")} id="main-contents">
        {children}
      </div>
    </>
  );
}

export default Page;
