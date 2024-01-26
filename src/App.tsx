import React from "react";
import { Maingrid, Sidebar } from "@/components/inc";
function App() {
  return (
    <div className="grid grid-cols-[auto_1fr] min-h-screen">
      <Sidebar />
      <Maingrid />
    </div>
  );
}

export default App;
