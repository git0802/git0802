import clsx from "clsx";
import Link from "next/link";

import type { ReactNode } from "react";

export type NavLinkProps = {
  title: string;
  href: string;
  icon?: ReactNode;
  expend?: boolean;
};

function NavLink({ title, href, icon = null, expend }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "flex h-9 items-center gap-1 rounded-xl text-[13px] font-bold  dark:font-semibold",
        !expend
          ? "px-2 text-violet-600 dark:text-violet-400"
          : "text-blue-600 dark:text-blue-400"
      )}
    >
      {title}
      {icon}
    </Link>
  );
}

export default NavLink;
