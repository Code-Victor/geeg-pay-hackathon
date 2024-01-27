import { DataTable } from "./dataTable";
import { Button } from "../ui/button";

export function LastOrders() {
  return (
    <div className="md:col-span-2 xl:col-span-3 bg-slate-1 dark:bg-slatedark-1 border border-slate-4 dark:border-slatedark-4 rounded-[14px] py-4 px-5">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl text-slate-12 dark:text-slatedark-12">
          Last Orders
        </h2>
        <Button
          variant="ghost"
          className="text-green-10 dark:text-green-10 rounded-full "
        >
          View all
        </Button>
      </div>
      <DataTable />
    </div>
  );
}
