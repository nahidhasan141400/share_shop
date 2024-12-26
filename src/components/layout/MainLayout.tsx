import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <section className="min-h-screen flex justify-between flex-col">
      <Header />
      <main className="h-full relative w-full flex-1 ">{children}</main>
      <Footer />
    </section>
  );
};

export default MainLayout;
