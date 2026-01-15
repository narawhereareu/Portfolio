import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children, activeSection }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex bg-white min-h-screen">
      <Sidebar activeSection={activeSection} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main className={`flex-1 transition-all duration-300 ${isCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
        {children}
      </main>
    </div>
  );
}