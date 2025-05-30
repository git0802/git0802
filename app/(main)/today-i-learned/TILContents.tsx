"use client";

import clsx from "clsx";
import Contents from "./Contents.mdx";

function TILContents() {
  return (
    <div
      className={clsx(
        "content-wrapper",
        "w-full text-slate-600",
        "dark:text-slate-400"
      )}
    >
      <Contents />
    </div>
  );
}

export default TILContents;
