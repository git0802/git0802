import clsx from "clsx";

import type { ReactNode } from "react";

interface SectionButtonProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  active?: boolean;
  onClick?: () => void;
}

export function SectionButton({
  title,
  description = "",
  icon = null,
  active = false,
  onClick = () => {},
}: SectionButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        "flex flex-1 items-center gap-4 rounded-2xl border-2 bg-white px-4 py-4 text-left",
        "dark:bg-slate-900",
        active
          ? ["border-violet-400", "dark:border-violet-400"]
          : ["border-slate-200", "dark:border-slate-800"]
      )}
      onClick={onClick}
    >
      {icon && (
        <span
          className={clsx(
            "hidden w-24 shrink-0 justify-center text-center text-7xl font-black",
            "xl:flex",
            active
              ? ["text-violet-600", "dark:text-violet-400"]
              : ["text-slate-400", "dark:text-slate-600"]
          )}
        >
          {icon}
        </span>
      )}
      <span className={clsx("flex-1")}>
        <span
          className={clsx(
            "block font-bold",
            active
              ? ["text-violet-600", "dark:text-violet-400"]
              : ["text-slate-700", "dark:text-slate-200"]
          )}
        >
          {title}
        </span>
        {description && (
          <span
            className={clsx(
              "mt-1 block text-sm text-slate-600",
              "dark:text-slate-400"
            )}
          >
            {description}
          </span>
        )}
      </span>
    </button>
  );
}

export function SectionButtonSmall({
  title,
  icon = null,
  active = false,
  onClick = () => {},
}: Omit<SectionButtonProps, "description">) {
  return (
    <button
      type="button"
      className={clsx("flex flex-col items-center rounded-xl p-2 text-sm", [
        active
          ? ["text-violet-600", "dark:text-violet-400"]
          : ["text-slate-400", "dark:text-slate-600"],
      ])}
      onClick={onClick}
    >
      <span className={clsx("text-4xl font-black")}>{icon}</span>
      <span
        className={clsx(
          "font-medium",
          active
            ? ["text-violet-600", "dark:text-violet-400"]
            : ["text-slate-500", "dark:text-slate-400"]
        )}
      >
        {title}
      </span>
    </button>
  );
}
