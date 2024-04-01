import { Inter } from "next/font/google";
import "./globals.css";
import LeftSideBar from "@/components/LeftSideBar/LeftSideBar";
import Navbar from "@/components/NavBar/Navbar";
import MenuSidebar from "@/components/MenuSideBar/MenuSidebar";
// import ShowDataSection from "@/components/ShowDataSection/ShowDataSection";
import RightSideBar from "@/components/RightSideBar/RightSideBar";
import BottomBarForMobile from "@/components/BottomBarForMobile/BottomBarForMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web Dev Application",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="lg:flex lg:p-5 lg:gap-x-5 bg-[#f8f5f5e9] text-xs text-secondary">
      <div className=" lg:basis-1/8 border-2 lg:h-[95vh]  shadow-xl rounded-2xl bg-white hidden lg:block">
        <LeftSideBar />
      </div>

      <div className="w-full lg:basis-7/8 lg:flex lg:flex-col ">
        <div>
          <Navbar />
        </div>
        <div className="lg:flex lg:gap-x-5 h-[85vh] ">
          <div className=" border-2 h-full lg:w-1/6 bg-white hidden lg:block rounded-2xl"><MenuSidebar /></div>
          <div className="lg:basis-3/8 lg:w-4/6 bg-white  h-[85vh] rounded-t-2xl">{children}</div>
          <div className=" border-2 lg:w-1/6 bg-white hidden lg:block rounded-2xl"><RightSideBar /></div>
        </div>
      </div>

        <div className="fixed z-10 lg:hidden w-full -mt-5">
          <BottomBarForMobile className=""/>
          </div>

    </div>
        
        </body>
    </html>
  );
}
