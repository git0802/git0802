import clsx from "clsx";

import type { PropsWithChildren } from "react";

function SectionContent({ children }: PropsWithChildren) {
  return (
    <div
      className={clsx(
        "background-grid background-grid--fade-out border-slate-200 mt-20 border-t",
        "dark:border-slate-800"
      )}
    >
      <div className={clsx("content-wrapper pb-20")}>{children}</div>
    </div>
  );
}

export default SectionContent;
