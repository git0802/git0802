"use client";

import clsx from "clsx";

import type { ReactElement } from "react";

function Error500() {
  return (
    <div
      className={clsx(
        "background-grid flex h-screen items-center justify-center"
      )}
    >
      <div
        className={clsx(
          "content-wrapper text-center text-slate-600",
          "dark:text-slate-400"
        )}
      >
        <h1 className={clsx("py-12 text-center")}>
          <div className={clsx("mb-3 text-8xl font-extrabold")}>500</div>
          <div className={clsx("text-2xl")}> Server Error </div>
        </h1>
      </div>
    </div>
  );
}

Error500.getLayout = function getLayout(page: ReactElement) {
  return page;
};

export default Error500;
