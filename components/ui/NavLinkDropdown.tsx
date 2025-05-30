import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";

import type { HTMLAttributes, Ref } from "react";
import type { UrlObject } from "url";
import { ChevronRightIcon } from "../Icons";

const animation = {
  hide: { opacity: 0, y: -16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.18 } },
};

type LinkRefProps = HTMLAttributes<HTMLAnchorElement> & {
  href: string | UrlObject;
};

const LinkRef = forwardRef(
  ({ href, children, ...rest }: LinkRefProps, ref: Ref<HTMLAnchorElement>) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Link href={href} ref={ref} {...rest}>
      {children}
    </Link>
  )
);

LinkRef.displayName = "LinkRef";

type NavLink = {
  href: string;
  title: string;
};

interface NavLinkDropdownProps {
  title: string;
  items: Array<NavLink>;
}

function NavLinkDropdown({ title, items }: NavLinkDropdownProps) {
  return (
    <div className="relative">
      <Menu>
        <MenuButton
          className={clsx(
            "flex h-9 items-center gap-1 text-sm font-bold text-blue-600 bg-blue-600/[0.08] rounded-full px-5 dark:bg-blue-400/10 dark:text-blue-400 dark:font-semibold  ml-2 mr-2"
          )}
        >
          {title}
          <ChevronRightIcon
            className={clsx("h-3 w-3 rotate-90", ["-rotate-90"])}
          />
        </MenuButton>
        <MenuItems
          as={motion.div}
          variants={animation}
          initial="hide"
          animate="show"
          className={clsx(
            "border-slate-200 absolute top-11 flex w-40 flex-col rounded-2xl border bg-white/70 p-2 backdrop-blur",
            "dark:border-slate-800 dark:bg-slate-900/80"
          )}
        >
          {items.map((item) => (
            <MenuItem key={item.href}>
              <LinkRef
                href={item.href}
                className={clsx(
                  "flex h-9 items-center gap-1 px-2 font-bold dark:font-semibold text-xs rounded-lg  text-blue-600 dark:text-blue-400"
                )}
              >
                {item.title}
              </LinkRef>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}

export default NavLinkDropdown;
