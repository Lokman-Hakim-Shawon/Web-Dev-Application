import { IoHomeOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
// import { PiWechatLogoLight } from "react-icons/pi";
// import { IoBookSharp } from "react-icons/io5";
import { RiLightbulbLine } from "react-icons/ri";
// import { RiMedicineBottleLine } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
const BottomBarForMobile = () => {
    return (
        <div className="flex text-3xl justify-around w-full border-2 py-4 bg-white rounded-t-2xl -mt-10">
            <IoHomeOutline className="border-2 rounded-full p-1" />
            <BiCategory className="border-2 rounded-full  p-1"/>
            <RiLightbulbLine className="border-2 rounded-full  p-1"/>
            <FaRegBookmark className="border-2 rounded-full  p-1"/>
            <CgProfile />
        </div>
    );
};

export default BottomBarForMobile;