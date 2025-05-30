import clsx from "clsx";
import React from "react";

import { ChevronRightIcon } from "@/components/Icons";
import NavLink, { NavLinkProps } from "./NavLink";
import { Dot } from "lucide-react";

interface NavLinkExpandedProps {
  title: string;
  items: Array<NavLinkProps>;
}

function NavLinkExpanded({ title, items }: NavLinkExpandedProps) {
  return (
    <div className={clsx("flex")}>
      <div
        className={clsx(
          "flex h-9 items-center gap-1 text-[13px] font-bold text-blue-600 bg-blue-600/[0.08] rounded-full px-5 dark:bg-blue-400/10 dark:text-blue-400 dark:font-semibold pointer-events-none mx-2"
        )}
      >
        {title}
        <ChevronRightIcon className={clsx("h-3 w-3")} />
      </div>
      <ul className={clsx("flex items-center")}>
        {items.map((item, idx) => (
          <React.Fragment key={item.href}>
            <li>
              <NavLink expend={true} title={item.title} href={item.href} />
            </li>
            {idx !== items.length - 1 && (
              <li>
                <div className="text-slate-800 dark:text-slate-300">
                  <Dot />
                </div>
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default NavLinkExpanded;
