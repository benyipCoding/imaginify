import Sidebar from "@/components/shared/Sidebar";
import React, { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="root">
      {/* Sidebar */}
      <Sidebar />
      {/* MobileNav */}
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
