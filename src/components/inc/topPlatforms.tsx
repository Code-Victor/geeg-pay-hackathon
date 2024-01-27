import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export function TopPlatforms() {
  return (
    <div className="md:col-span-2 xl:col-span-2 bg-slate-1 dark:bg-slatedark-1 border border-slate-4 dark:border-slatedark-4 rounded-[14px] py-4 px-5">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl text-slate-12 dark:text-slatedark-12">
          Top Platform
        </h2>
        <Button
          variant="ghost"
          className="text-green-10 dark:text-green-10 rounded-full "
        >
          View all
        </Button>
      </div>
      <div className="flex flex-col gap-2">
        <PlatformCard name="Book Bazaar" percent="35%" value="$2,500,000" />
        <PlatformCard
          name="Artisan Aisle"
          percent="25%"
          value="$1,800,000"
          className="bg-sky-10"
        />
        <PlatformCard
          name="Toy Troop"
          percent="80%"
          value="$1,200,000"
          className="bg-amber-10"
        />
        <PlatformCard
          name="XStore"
          percent="68%"
          value="$3,200,000"
          className="bg-orange-10"
        />
      </div>
    </div>
  );
}

function PlatformCard({
  name,
  percent,
  value,
  className = "bg-purple-9",
}: {
  name: string;
  percent: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-lg text-slate-12 dark:text-slatedark-12">
        {name}
      </h3>
      <div className="rounded-full bg-slate-3 dark:bg-slatedark-3">
        <div
          className={cn("rounded-full h-3", className)}
          style={{ width: percent }}
        ></div>
      </div>
      <div className="flex justify-between items-baseline">
        <span className="text-slate-10 text-lg dark:text-slatedark-10">
          {value}
        </span>
        <span className="text-slate-10 text-lg dark:text-slatedark-10">
          {percent}
        </span>
      </div>
    </div>
  );
}


