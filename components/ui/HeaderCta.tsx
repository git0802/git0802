"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { DocumentIcon } from "@/components/Icons";

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

interface HeaderCtaProps {
  isFree?: boolean;
  isFreeAnimationDuration?: number;
}

function ButtonContactMe() {
  return (
    <Link
      href="/work/contact"
      className={clsx("button button--solid min-w-[128px]", "md:button--big")}
    >
      Get in Touch
    </Link>
  );
}

function ButtonResume() {
  return (
    <a
      target="_blank"
      rel="noreferrer nofollow"
      href="https://www.figma.com/community/file/1176377524040948926"
      className={clsx("button button--ghost px-2", "md:button--big md:px-2")}
    >
      <DocumentIcon className={clsx("h-5 w-5")} />
      RESUME
    </a>
  );
}

function AvailableForHire() {
  return (
    <div
      className={clsx(
        "button button--ghost text-violet-500 pointer-events-none gap-2.5 px-2.5",
        "md:button--big md:px-2.5",
        "dark:text-violet-400"
      )}
    >
      <span className={clsx("relative flex h-2 w-2")}>
        <span
          className={clsx(
            "bg-violet-600 absolute -left-1 -top-1 inline-flex h-4 w-4 animate-ping rounded-full opacity-75",
            "dark:bg-violet-300"
          )}
        />
        <span
          className={clsx(
            "bg-violet-500 relative inline-flex h-2 w-2 rounded-full",
            "dark:bg-violet-400"
          )}
        />
      </span>
      AVAILABLE FOR HIRE
    </div>
  );
}

function HeaderCta({
  isFree = true,
  isFreeAnimationDuration = 4,
}: HeaderCtaProps) {
  const shouldReduceMotion = useReducedMotion();

  let isFreeVariants = {
    hide: {
      x: 0,
      opacity: 1,
    },
    show: {
      x: -48,
      opacity: 0,
    },
  };

  if (shouldReduceMotion) {
    isFreeVariants = {
      hide: {
        x: 0,
        opacity: 1,
      },
      show: {
        x: 0,
        opacity: 0,
      },
    };
  }

  return (
    <motion.div className={clsx("flex gap-2")} initial="hide" animate="show">
      <motion.div
        className={clsx("relative z-20")}
        variants={animation}
        transition={{ delay: 0.4 }}
      >
        <ButtonContactMe />
      </motion.div>
      {isFree ? (
        <motion.div
          variants={animation}
          transition={{ delay: 2.8 }}
          className={clsx("relative z-10")}
        >
          <motion.div
            variants={isFreeVariants}
            transition={{ delay: isFreeAnimationDuration + 1.5, duration: 0.4 }}
          >
            <AvailableForHire />
          </motion.div>
          <motion.div
            className={clsx("absolute left-0 top-0")}
            initial={{ x: -48, opacity: 0, pointerEvents: "none" }}
            animate={{ x: 0, opacity: 1, pointerEvents: "auto" }}
            transition={{ delay: isFreeAnimationDuration + 1.6, duration: 0.4 }}
          >
            <ButtonResume />
          </motion.div>
        </motion.div>
      ) : (
        <motion.div variants={animation} transition={{ delay: 0.5 }}>
          <ButtonResume />
        </motion.div>
      )}
    </motion.div>
  );
}

export default HeaderCta;
