import {
  ArrowDown2,
  Calendar as CalendarIcon,
  Notification,
  SearchNormal1,
} from "iconsax-react";
import * as React from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Navbar() {
  return (
    <div className="border-b border-slate-4 p-5 dark:border-slatedark-4 flex justify-between items-center">
      <h1 className="text-slate-12 dark:text-slatedark-12 font-bold text-2xl">
        Dashboard
      </h1>
      <Actions />
    </div>
  );
}
function Actions() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex border items-center border-slate-6 dark:border-slatedark-6 rounded-full p-3">
        <label htmlFor="full-page-search" className="h-5 w-5">
          <span className="sr-only">Search for something in the dashboard</span>
          <SearchNormal1
            size={18}
            className="text-slate-10 dark:text-slatedark-10"
          />
        </label>
        <input
          id="full-page-search"
          type="text"
          className="bg-transparent outline-none p-1 h-full min-w-[200px] text-slate-12 dark:text-slatedark-12 placeholder-slate-10 dark:placeholder-slatedark-10"
          placeholder="Search"
        />
      </div>
      <DatePicker />
      <Button
        variant="outline"
        size="icon"
        className="rounded-full"
        onClick={() =>
          toast.info("No notifications for you today", { duration: 3000 })
        }
      >
        <Notification
          size={18}
          className="text-slate-11 dark:text-slatedark-11"
        />
      </Button>
      <Button variant="outline" size="lg" className="rounded-full gap-2">
        <img
          src="https://avatars.githubusercontent.com/u/35899857?v=4"
          alt="avatar"
          className="rounded-full h-8 w-8"
        />
        <div className="flex flex-col">
          <span className="text-slate-12 dark:text-slatedark-12">
            Justin Bergson
          </span>
          <span className="text-slate-10 dark:text-slatedark-10">
            Justin@gmail.com
          </span>
        </div>
        <ArrowDown2 size="16"  />
      </Button>
    </div>
  );
}

export function DatePicker() {
  const [date, setDate] = React.useState<Date>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "justify-start text-left font-medium ",
            !date && "text-slate-10 dark:text-slatedark-10 "
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-slate-2 dark:bg-slatedark-2 border border-slate-4 dark:border-slatedark-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}