"use client"
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { RiLightbulbLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
const BottomBarForMobile = () => {
    const handleremove=()=>{
        localStorage.removeItem('duaName')
    }
    return (
        <div className="flex text-3xl justify-around w-full border-2 py-4 bg-white rounded-t-2xl -mt-10">
            <a href='/' onClick={handleremove}><IoHomeOutline className="border-2 rounded-full p-1" /></a>
            <a href="/all_dua"><BiCategory className="border-2 rounded-full  p-1"/></a>
            <a href="/memoraize"><RiLightbulbLine className="border-2 rounded-full  p-1"/></a>
            <a href="/bookmark"><FaRegBookmark className="border-2 rounded-full  p-1"/></a>
            <a href="/dua_info"><CgProfile /></a>
        </div>
    );
};

export default BottomBarForMobile;