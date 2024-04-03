import DataSection from "@/components/DataSection/DataSection";
import MenuSideBar from "@/components/MenuSideBar/MenuSidebar";

export default function Home() {
  return (
    <div className="flex">
      <div className="lg:w-2/6">
      
      <MenuSideBar/>
      </div>
      <div className="lg:w-4/6">
      <DataSection/>
      </div>
    </div>
  );
}
