import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sales } from "@/data";





export function SalesTrends() {
  return (
    <div className="md:col-span-2 xl:col-span-3 bg-slate-1 flex flex-col dark:bg-slatedark-1 border border-slate-4 dark:border-slatedark-4 rounded-[14px] py-4 px-5">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl text-slate-12 dark:text-slatedark-12">
          Sales Trends
        </h2>
        <div className="flex gap-2 items-center">
          <span className="text-slate-10 dark:text-slatedark-10">sort by:</span>
          <Select>
            <SelectTrigger className="w-[100px] rounded-full">
              <SelectValue placeholder="Duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Week</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="year">Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <CustomBarChart />
    </div>
  );
}
function CustomBarChart() {
  return (
    <ResponsiveContainer width="100%" className="flex-1 min-h-[240px]">
      <BarChart width={150} height={40} data={sales}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="30%"
              className="dark:[stop-color:rgb(51_176_116)] [stop-color:rgb(43_154_102)]"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              className="dark:[stop-color:rgb(17_17_19)] [stop-color:rgb(252_252_253)] bg-slatedark-1"
              stopOpacity={0.5}
            />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <XAxis dataKey="month" angle={-30} fontSize={12} tickMargin={10} />
        <YAxis />
        <Bar dataKey="sales" radius={[50, 50, 0, 0]} fill="url(#colorUv)" />
      </BarChart>
    </ResponsiveContainer>
  );
}
