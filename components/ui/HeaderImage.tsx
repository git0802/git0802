"use client";

import clsx from "clsx";
import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import HeaderImageAnimation from "./HeaderImageAnimation";

function HeaderImage() {
  const controlsHeaderImage = useAnimationControls();
  const controlsHeaderOutline = useAnimationControls();

  return (
    <div
      className={clsx("relative h-[590px] w-[603px]")}
      style={{
        maskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
        WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='603' height='590' fill='none' viewBox='0 0 603 590' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m0 0v393h228v9.5c0 103.55 83.947 187.5 187.5 187.5s187.5-83.947 187.5-187.5v-402.5h-603z' fill='%23000'/%3E%3C/svg%3E%0A")`,
      }}
    >
      <div
        className={clsx(
          "from-violet-400/20 via-violet-400/0 absolute right-0 top-0 h-[590px] w-[375px] rounded-full bg-gradient-to-t",
          "dark:from-violet-600/10 dark:via-violet-600/0"
        )}
      >
        <div className={clsx("absolute bottom-0 right-0 overflow-hidden")}>
          <motion.div
            className={clsx("absolute z-[10]")}
            initial={{ opacity: 1 }}
            animate={controlsHeaderOutline}
          >
            <HeaderImageAnimation
              onAnimationComplete={() => {
                controlsHeaderOutline.start({
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    delay: 0.15,
                  },
                });

                controlsHeaderImage.start({
                  opacity: 1,
                  transition: {
                    duration: 0.15,
                  },
                });
              }}
            />
          </motion.div>
          <motion.div
            className={clsx("")}
            initial={{ opacity: 0 }}
            animate={controlsHeaderImage}
          >
            <Image
              alt="GungXu"
              src="/me.png"
              width={457}
              height={526}
              className={clsx(
                "hidden max-w-none",
                "lg:block",
                "dark:brightness-[.82]"
              )}
              quality={100}
              priority
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeaderImage;
