import React from "react";
import { Navbar } from ".";

import { SalesTrends } from "./salesTrends";
import { Preview } from "./preview";
import { LastOrders } from "./lastOrders";
import { TopPlatforms } from "./topPlatforms";

export function Maingrid() {
  return (
    <div className="bg-slate-2 dark:bg-slatedark-2 md:min-h-screen overflow-y-scroll flex flex-col">
      <Navbar />
      <div className="grid md:grid-cols-2 xl:grid-cols-5 grid-rows-[auto_auto] gap-5 p-5 flex-1">
        <SalesTrends />
        <Preview />
        <LastOrders />
        <TopPlatforms />
      </div>
    </div>
  );
}







