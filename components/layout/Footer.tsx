import clsx from "clsx";
import Link from "next/link";

import { ExternalLink, GitHubIcon } from "@/components/Icons";

import dayjs from "@/utils/dayjs";

function LastUpdate() {
  return (
    <a
      href="https://github.com/git0802/lovebee"
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx("hover:underline")}
    >
      <span>see the recent update on GitHub</span>
    </a>
  );
}

interface FooterLinkProps {
  title: string;
  href: string;
  label?: "new" | "soon";
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === "soon") {
    return (
      <span
        className={clsx(
          "flex h-8 items-center gap-2 whitespace-nowrap px-2 py-1 text-sm text-slate-900",
          "dark:text-slate-200",
          "cursor-not-allowed text-slate-600 dark:text-slate-400"
        )}
      >
        {title}
        <span
          className={clsx(
            "border-slate-200 rounded-full border px-2 py-0 text-[10px] uppercase text-slate-900",
            "dark:text-slate-200"
          )}
        >
          {label}
        </span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link
        href={href}
        className={clsx(
          "flex h-8 items-center gap-2 whitespace-nowrap px-2 py-1 text-sm text-slate-900",
          "dark:text-slate-200"
        )}
      >
        {title}
        {label && (
          <span
            className={clsx(
              "border-slate-200 rounded-full border px-2 py-0 text-[10px] uppercase text-slate-900",
              "dark:text-slate-200"
            )}
          >
            {label}
          </span>
        )}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx(
        "flex h-8 items-center gap-2 whitespace-nowrap px-2 py-1 text-sm text-slate-900",
        "dark:text-slate-200"
      )}
    >
      {title}
      <ExternalLink className={clsx("h-3.5 w-3.5")} />
      {label && (
        <span
          className={clsx(
            "border-slate-200 rounded-full border px-2 py-0 text-[10px] uppercase text-slate-900",
            "dark:text-slate-200"
          )}
        >
          {label}
        </span>
      )}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={clsx("flex-1")}>
      <div
        className={clsx(
          "mb-2 px-2 text-[13px] text-slate-600",
          "dark:text-slate-400"
        )}
      >
        {title}
      </div>
      <ul className={clsx("flex flex-col")}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription() {
  return (
    <div className={clsx("max-w-[348px]")}>
      <div
        className={clsx(
          "mb-3 text-[13px] text-slate-600",
          "dark:text-slate-400"
        )}
      >
        About Me
      </div>
      <p className={clsx("mb-4 font-normal leading-relaxed")}>
        I&apos;m GungXu, a <strong>front-end developer</strong> who loves
        intuitive, clean and modern UI design.
      </p>
      <ul className={clsx("-ml-2 flex gap-1")}>
        <li>
          <a
            href="https://github.com/git0802"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx("flex h-9 w-9 items-center justify-center")}
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
            <GitHubIcon className={clsx("h-5 w-5")} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        "background-grid background-grid--fade-in ",
        "border-slate-200 mt-24 pt-16 text-sm text-slate-900",
        "dark:border-slate-800 dark:text-slate-200 "
      )}
    >
      <div className={clsx("content-wrapper")}>
        <div className={clsx("py-10 font-semibold")}>
          <div className={clsx("flex flex-col-reverse gap-16", "lg:flex-row")}>
            <div className={clsx("flex-1")}>
              <FooterDescription />
            </div>
            <div
              className={clsx(
                "-mx-2 flex flex-1 flex-col gap-8",
                "sm:flex-row sm:gap-16 lg:mx-0"
              )}
            >
              <div className={clsx("flex", "sm:gap-16")}>
                <FooterGroup
                  title="Work"
                  links={[
                    { title: "Contact", href: "/work/contact" },
                    { title: "Experience", href: "/work/experience" },
                    {
                      title: "Services",
                      href: "/work/services",
                      label: "soon",
                    },
                    {
                      title: "Skills and Tools",
                      href: "/work/skills-and-tools",
                    },
                    { title: "Studio", href: "/work/studio" },
                  ]}
                />
                <FooterGroup
                  title="Learn"
                  links={[
                    {
                      title: "Docs",
                      href: "/docs",
                    },
                    {
                      title: "Personal Blog",
                      href: "/blog",
                    },
                    {
                      title: "T.I.L",
                      href: "/today-i-learned",
                      label: "new",
                    },
                  ]}
                />
              </div>
              <div className={clsx("flex", "sm:gap-16")}>
                <FooterGroup
                  title="This Site"
                  links={[
                    {
                      title: "Design Concept",
                      href: "https://www.figma.com/proto/P1fuhugrjxcfaxAM4rnP0r/Design-Concept?node-id=1-246",
                      isInternal: false,
                    },
                    {
                      title: "Source Code",
                      href: "https://github.com/git0802/lovebee",
                      isInternal: false,
                    },
                    {
                      title: "Credits",
                      href: "/credits",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "border-slate-200 flex justify-between border-t py-6 text-xs",
            "dark:border-slate-800"
          )}
        >
          <div className={clsx("font-semibold")}>
            &copy; {dayjs().format("YYYY")}, GungXu
          </div>
          <div className={clsx("text-slate-500", "dark:text-slate-400")}>
            <LastUpdate />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
