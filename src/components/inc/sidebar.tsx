import React from "react";
import Logo from "@/assets/icons/logo.svg?react";
import Sun from "@/assets/icons/sun.svg?react";
import Moon from "@/assets/icons/moon.svg?react";
import { motion } from "framer-motion";
import {
  Category,
  TrendUp,
  Profile2User,
  Box,
  DiscountShape,
  InfoCircle,
  ArrowCircleRight,
  Setting2,
  Logout,
  type Icon,
} from "iconsax-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { useTheme } from "@/providers/themeProvider";

const navButtons = [
  {
    icon: Category,
    name: "dashboard",
  },
  {
    icon: TrendUp,
    name: "analytics",
  },
  {
    icon: Profile2User,
    name: "users",
  },
  {
    icon: Box,
    name: "reward",
  },
  {
    icon: DiscountShape,
    name: "profit",
  },
  {
    icon: InfoCircle,
    name: "help",
  },
] as const;
type NavButton = (typeof navButtons)[number];

export function Sidebar() {
  const [active, setActive] = React.useState<NavButton["name"]>("dashboard");
  return (
    <div className="bg-slate-3 dark:bg-slatedark-3 p-5 hidden md:flex flex-col gap-5 border-r border-slate-4 dark:border-slatedark-4">
      <a href="#">
        <Logo aria-label="Logo" height={40} width={40} />
      </a>
      <div className="flex flex-col flex-1 justify-between">
        <div className="flex flex-col gap-4">
          {navButtons.map((button) => (
            <SibebarButton
              key={button.name}
              name={button.name}
              icon={button.icon}
              active={active === button.name}
              setActive={() => setActive(button.name)}
            />
          ))}
          <ThemeToggle />
        </div>
        <div className="flex flex-col gap-4">
          <SibebarButton name="enter" icon={ArrowCircleRight} />
          <SibebarButton name="settings" icon={Setting2} />
          <SibebarButton name="logout" icon={Logout} />
        </div>
      </div>
    </div>
  );
}

export function ThemeToggle({ horizontal }: { horizontal?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "bg-slate-1 dark:bg-slatedark-1 rounded-full p-1 flex gap-2",

        horizontal ? "flex-row min-w-[80px]" : "flex-col "
      )}
    >
      <span className="sr-only">Toggle between light and dark mode</span>
      <div className="relative hover:bg-slate-3 dark:hover:bg-slatedark-3 rounded-full w-full aspect-square flex items-center justify-center">
        {theme === "light" && (
          <motion.div
            layoutId="theme-toggle"
            className="bg-green-8 dark:bg-greendark-8 absolute inset-0 z-[1] rounded-full"
          />
        )}
        <Sun
          className={cn(
            "relative z-[2]",
            theme === "light"
              ? "text-slate-2 dark:text-slatedark-2"
              : "text-slate-11 dark:text-slatedark-11"
          )}
        />
      </div>
      <div className="relative w-full hover:bg-slate-3 dark:hover:bg-slatedark-3 rounded-full aspect-square flex items-center justify-center">
        {theme === "dark" && (
          <motion.div
            layoutId="theme-toggle"
            className="bg-green-8 dark:bg-greendark-8 absolute inset-0 z-[1] rounded-full"
          />
        )}
        <Moon
          className={cn(
            "relative z-[2]",
            theme === "dark"
              ? "text-slate-2 dark:text-slatedark-2"
              : "text-slate-11 dark:text-slatedark-11"
          )}
        />
      </div>
    </button>
  );
}
function SibebarButton({
  name,
  icon: Icon,
  active,
  setActive,
}: {
  name: string;
  icon: Icon;
  active?: boolean;
  setActive?: () => void;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              " p-0 h-10 w-10 items-center justify-center relative",
              active
                ? "text-slate-12 dark:text-slatedark-12"
                : "text-slate-11 dark:text-slatedark-11"
            )}
            onClick={setActive}
          >
            {active && (
              <motion.div
                layoutId="sidebar-active"
                className="absolute -right-[20px] w-[3px] bg-slate-12 dark:bg-slatedark-12 h-[70%] rounded-l-lg"
              />
            )}
            <span className="sr-only">{name}</span>
            <Icon variant={active ? "Bulk" : "Broken"} size="24" />
          </Button>
        </TooltipTrigger>
        <TooltipContent
          sideOffset={8}
          side="right"
          className="capitalize font-semibold"
        >
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
