import { mockTrend } from "@/data";
import {
  BoxTick,
  Coin1,
  I3DRotate,
  ShoppingCart,
  type Icon,
} from "iconsax-react";
import { TrendingDown, TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer
} from "recharts";



export function SampleLineChart({ trend = "up" }: { trend?: "up" | "down" }) {
  return (
    <ResponsiveContainer width={104} height={32}>
      <AreaChart width={300} height={100} data={mockTrend}>
        <defs>
          <linearGradient id="trend-up" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="30%"
                className="dark:[stop-color:rgb(51_176_116)] [stop-color:rgb(43_154_102)]"
                stopOpacity={0.5}
              />
            <stop
              offset="95%"
              className="dark:[stop-color:rgb(17_17_19)] [stop-color:rgb(252_252_253)] bg-slatedark-1"
              stopOpacity={0.5}
            />
          </linearGradient>
          <linearGradient id="trend-down" x1="0" y1="0" x2="0" y2="1">

              <stop
                offset="30%"
                className="dark:[stop-color:rgb(220_62_66)] [stop-color:rgb(236_93_94)]"
                stopOpacity={0.8}
              />
            <stop
              offset="95%"
              className="dark:[stop-color:rgb(17_17_19)] [stop-color:rgb(252_252_253)] bg-slatedark-1"
              stopOpacity={0.5}
            />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dot={false}
          dataKey={trend}
          stroke={trend === "up" ? "#00C48C" : "#FF5B5B"}
          fill={trend === "up" ? "url(#trend-up)" : "url(#trend-down)"}
          strokeWidth={2}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function Preview() {
  return (
    <div className="md:col-span-2 xl:col-span-2 flex gap-4 md:flex-wrap max-w-full overflow-x-scroll">
      <PreviewCard title="Total Order" value="350" trend="up" />
      <PreviewCard
        icon={I3DRotate}
        title="Total Refund"
        value="270"
        trend="down"
      />
      <PreviewCard
        icon={ShoppingCart}
        title="Average Sales"
        value="1567"
        trend="down"
      />
      <PreviewCard
        icon={Coin1}
        title="Total Income"
        value="$350.00"
        trend="up"
      />
    </div>
  );
}

function PreviewCard({
  icon: Icon = BoxTick,
  title,
  value,
  trend,
}: {
  icon?: Icon;
  title: string;
  value: string;
  trend: "up" | "down";
}) {
  return (
    <div className="bg-slate-1 flex-1 flex flex-col gap-2.5 min-w-[220px] dark:bg-slatedark-1 border border-slate-4 dark:border-slatedark-4 rounded-[14px] p-4">
      <div className="flex items-center justify-between">
        <div className="rounded-full p-2 border border-slate-4 dark:border-slatedark-4 w-fit">
          <Icon
            variant="Bulk"
            className="text-grass-10 dark:text-grassdark-10"
          />
        </div>
        <SampleLineChart {...{trend}} />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium text-lg text-slate-10 dark:text-slatedark-10">
          {title}
        </h3>
        <p className="font-semibold text-2xl text-slate-12 dark:text-slatedark-12">
          {value}
        </p>
      </div>
      <div className="flex items-baseline">
        <Badge {...{ trend }} />
        <span className="text-slate-11 dark:text-slatedark-11 text-sm font-medium ml-2">
          vs. previous month
        </span>
      </div>
    </div>
  );
}

function Badge({ trend = "up" }: { trend?: "up" | "down" }) {
  if (trend === "up") {
    return (
      <div className="flex items-center gap-1 rounded-full py-1 px-2 bg-green-3 dark:bg-greendark-3">
        <TrendingUp className="h-4 w-4 text-green-10 dark:text-greendark-10" />
        <span className="text-green-10 dark:text-greendark-10 text-sm font-medium">
          4.5%
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1 rounded-full py-1 px-2 bg-red-3 dark:bg-reddark-3">
      <TrendingDown className="h-4 w-4 text-red-10 dark:text-reddark-10" />
      <span className="text-red-10 dark:text-reddark-10 text-sm font-medium">
        4.5%
      </span>
    </div>
  );
}
