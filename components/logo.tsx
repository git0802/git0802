import Image from "next/image";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface LogoProps {
  active?: boolean;
}

function Logo({ active = true }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div className={clsx("flex items-center gap-1.5 font-[1000] leading-none")}>
      <div className={clsx("-mt-1 hidden text-xl relative", "sm:block")}>
        <div
          className={clsx(
            "absolute left-[1px] top-3.5 w-[140px] h-7  mr-4 rounded-full -z-10",
            // "bg-linear-to-r from-violet-100 from-10% via-violet-100/30 via-25% to-transparent to-60%",
            [active && "border-b-2 border-violet-600 dark:border-violet-400"]
          )}
        />
        <Image
          src={!isDarkMode ? "/logos/dark_logo.png" : "/logos/light_logo.png"}
          alt="GungXu Logo"
          width={118}
          height={36}
          className={clsx("h-auto w-auto object-contain  ")}
          priority
        />
      </div>
    </div>
  );
}

export default Logo;
