import React from "react";
import { Maingrid, Sidebar } from "@/components/inc";
import { Toaster } from "sonner";
function App() {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen">
      <Sidebar />
      <Maingrid />
      <Toaster richColors/>
    </div>
  );
}

export default App;
