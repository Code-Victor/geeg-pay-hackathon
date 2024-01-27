import React from "react";
import mockData from "@/data/MOCK_DATA.json";
import { cn, getAvatar } from "@/lib/utils";
import { Button } from "../ui/button";
import { DocumentDownload } from "iconsax-react";

export function DataTable({ full }: { full?: boolean }) {
  console.log(mockData);
  return (
    <>
      <div className="divide-y md:hidden divide-slate-4 dark:divide-slatedark-4">
        {(full ? mockData : mockData.slice(0, 5)).map((d) => (
          <div className="flex-col px-3 py-2">
            <div className="flex items-center">
              <div className="flex-1 flex items-center">
                <div className="h-10 w-10 flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full bg-green-5 dark:bg-greendark-5 object-cover"
                    src={getAvatar(d.name)}
                    alt={d.name}
                  />
                </div>
                <div className="ml-2.5 text-sm font-medium text-slate-12 dark:text-slatedark-12">
                  {d.name}
                </div>
              </div>
              <div className="flex-1 text-slate-10 dark:text-slatedark-10">
                {new Date(d.date).toLocaleDateString("en-UK", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
            <div className="flex items-baseline">
              <div className="flex-1 text-slate-12 dark:text-slatedark-12">
                {d.amount.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                })}
              </div>
              <div className="flex-1">
                <span
                  className={cn(
                    "capitalize text-center",
                    d.status === "paid"
                      ? "text-green-10 dark:text-greendark-10"
                      : "text-red-10 dark:text-reddark-10"
                  )}
                >
                  {d.status}
                </span>
              </div>
              <div className="flex-1">
                <Button variant="ghost">
                  <DocumentDownload variant="Outline" size={16} />
                  <span>View</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <table className="hidden md:table min-w-full divide-y divide-slate-4 dark:divide-slatedark-4">
        <thead className="hidden md:table-header-group">
          <tr className="text-slate-10 dark:text-slatedark-10 text-sm">
            <th scope="col" className="px-4 py-3.5 text-left font-medium">
              <span>Name</span>
            </th>
            <th scope="col" className="px-12 py-3.5 text-left font-medium">
              Date
            </th>

            <th scope="col" className="px-4 py-3.5 text-left font-medium">
              Amount
            </th>
            <th scope="col" className="px-4 py-3.5 text-left font-medium">
              Status
            </th>

            <th scope="col" className="px-4 py-3.5 text-left font-medium">
              Invoice
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-4 dark:divide-slatedark-4 ">
          {(full ? mockData : mockData.slice(0, 5)).map((d) => (
            <tr key={d.id}>
              <td className="whitespace-nowrap px-4 py-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full bg-green-5 dark:bg-greendark-5 object-cover"
                      src={getAvatar(d.name)}
                      alt={d.name}
                    />
                  </div>
                  <div className="ml-2.5 text-sm font-medium text-slate-12 dark:text-slatedark-12">
                    {d.name}
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-12 py-4">
                <div className="text-slate-10 dark:text-slatedark-10">
                  {new Date(d.date).toLocaleDateString("en-UK", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                <span className="text-slate-12 dark:text-slatedark-12">
                  {d.amount.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </span>
              </td>
              <td className="whitespace-nowrap px-4 py-4">
                <span
                  className={cn(
                    "capitalize",
                    d.status === "paid"
                      ? "text-green-10 dark:text-greendark-10"
                      : "text-red-10 dark:text-reddark-10"
                  )}
                >
                  {d.status}
                </span>
              </td>
              <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                <Button variant="ghost">
                  <DocumentDownload variant="Outline" size={16} />
                  <span>View</span>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
