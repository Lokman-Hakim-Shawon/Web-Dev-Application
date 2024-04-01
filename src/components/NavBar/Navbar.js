import { CgProfile } from "react-icons/cg";
import { BiSolidDonateHeart } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";
import { MdPrivacyTip } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";

const Navbar = () => {
  const navlink = (
    <>
      <li className="flex items-center gap-x-2"><BiSolidDonateHeart className="text-lg text-primary"/> Support Us</li>
      <li className="flex items-center gap-x-2"><LuDownload className="text-lg text-primary"/> Download Dua App</li>
      <li className="flex items-center gap-x-2"><MdPrivacyTip className="text-lg text-primary"/> Privacy Policy</li>
      <li className="flex items-center gap-x-2"><MdHealthAndSafety className="text-lg text-primary"/> Thanks and Credits</li>
      <li className="flex items-center gap-x-2"><AiFillExclamationCircle className="text-lg text-primary"/> About Us</li>
      <li className="flex items-center gap-x-2"><FaCopyright className="text-lg text-primary"/> Copyright Warning</li>
      <li className="flex items-center gap-x-2"><PiProjectorScreenChartFill className="text-lg text-primary"/> Our Other Projects</li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] p-2 shadow bg-base-100 -ml-3 min-h-[90vh] text-xs w-[50vw] space-y-5 px-2 z-20"
            >
            {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-secondary">Duas Page</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="navbar-end text-4xl  basis-1/4">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="text-primary">
              <CgProfile />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu shadow bg-base-100 rounded-lg w-52 text-xs py-5 "
            >
              {navlink}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
