import { IoLanguage } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
const RightSideBar = () => {
  return (
    <div className=" text-center px-2">
      <h1 className="text-center py-5 font-bold text-lg">Setting</h1>
      <div className="border-2 rounded-b-xl">
        <div className="flex justify-around items-center bg-gray-100">
          <IoLanguage className="text-lg" />
          <h3 className=" py-2">Language Setting</h3>
        </div>
        <div className="space-x-2 py-5">
          <button className=" px-2 py-1 bg-primary text-white">Englishg</button>
          <button className="px-3 py-1 border-2 ">বাংলা</button>
        </div>
      </div>
      <div className="my-5 space-y-2">
        <div className="flex space-x-2 bg-gray-100 py-2 px-4 rounded-lg">
          <IoMdSettings className="text-lg"/>
          <p>General Setting</p>
        </div>
        <div className="flex space-x-2 bg-gray-100 py-2 px-4 rounded-lg">
        <BiCategory className="text-lg"/>
          <p>Font Setting</p>
        </div>
        <div className="flex bg-gray-100 justify-center py-2 rounded-lg">
        <BiCategory className="text-lg"/>
          <p className="pl-1">Appearence Setting</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
