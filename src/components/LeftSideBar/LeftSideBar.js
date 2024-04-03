"use client"
import { IoHomeOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { PiWechatLogoLight } from "react-icons/pi";
import { IoBookSharp } from "react-icons/io5";
import { RiLightbulbLine } from "react-icons/ri";
import { RiMedicineBottleLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { FaHandsHolding } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";

const LeftSideBar = () => {
    const handleremove=()=>{
        localStorage.removeItem('duaName')
    }
    return (
        <div className="text-xl p-5">
            <div className=" border-2 p-2 bg-primary text-white rounded-lg"><FaHandsHolding /></div>
            <div className="space-y-5 py-16 text-2xl text-center">
            <div onClick={handleremove}><a href='/' ><IoHomeOutline className="border-2 rounded-full bg-gray-200 p-1" /></a></div>
            <div><a href="/all_dua" className=""><BiCategory className="border-2 rounded-full bg-gray-200 p-1"/></a></div>
            <div><a href="/memoraize" className=""><RiLightbulbLine className="border-2 rounded-full bg-gray-200 p-1"/></a></div>
            <div><a href="/bookmark" className=""><FaRegBookmark className="border-2 rounded-full bg-gray-200 p-1"/></a></div>
            <div><a href="/ruqayh" className=""><RiMedicineBottleLine className="border-2 rounded-full bg-gray-200 p-1"/></a></div>
            <div><a href="/dua_info" className=""><PiWechatLogoLight className="border-2 rounded-full bg-gray-200 p-1"/></a></div>
            <div><a href="/books" className=""><IoBookSharp className="border-2 rounded-full bg-gray-200 p-1"/></a></div>
            </div>

            <div className=" border-2 p-2 bg-primary text-white rounded-lg"><BiSolidDonateHeart /></div>

        </div>
    );
};

export default LeftSideBar;