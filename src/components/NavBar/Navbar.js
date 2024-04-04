"use client";
import { CgProfile } from "react-icons/cg";
import { BiSolidDonateHeart } from "react-icons/bi";
import { LuDownload } from "react-icons/lu";
import { MdPrivacyTip } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { AiFillExclamationCircle } from "react-icons/ai";
import { FaCopyright } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";
import MenuSideBar from "../MenuSideBar/MenuSidebar";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [subData, setSubData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/heading")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:3000/category")
      .then((res) => setCategory(res.data))
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:3000/subHeading")
      .then((res) => setSubData(res.data))
      .catch((error) => console.log(error));
  }, []);
  const handleClick = (duaName) => {
    localStorage.setItem("duaName", duaName);
    window.location.reload();
  };
  const navlink = (
    <>
      <li className="flex gap-x-2">
        <BiSolidDonateHeart className="text-lg text-primary" /> Support Us
      </li>
      <li className="flex  gap-x-2">
        <LuDownload className="text-lg text-primary" /> Download Dua App
      </li>
      <li className="flex  gap-x-2">
        <MdPrivacyTip className="text-lg text-primary" /> Privacy Policy
      </li>
      <li className="flex  gap-x-2">
        <MdHealthAndSafety className="text-lg text-primary" /> Thanks and
        Credits
      </li>
      <li className="flex  gap-x-2">
        <AiFillExclamationCircle className="text-lg text-primary" /> About Us
      </li>
      <li className="flex  gap-x-2">
        <FaCopyright className="text-lg text-primary" /> Copyright Warning
      </li>
      <li className="flex  gap-x-2">
        <PiProjectorScreenChartFill className="text-lg text-primary" /> Our
        Other Projects
      </li>
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
              className="dropdown-content z-[1] p-2 shadow bg-base-100 -ml-3 max-h-[90vh] lg:min-h-[90vh] text-xs w-[70vw] lg:hidden space-y-5 px-2 z-40 overflow-y-scroll"
            >
              {data.map((data) => (
                <div key={data.id} className="collapse  my-3 rounded-none ">
                  <input type="radio" name="my-accordion-1" defaultChecked />
                  <div className="collapse-title text-xs bg-base-200">
                    {data.cat_name_en}
                  </div>
                  <div className="collapse-content space-y-3">
                    {category.map((category, index) => (
                      <li
                        key={index}
                        className={
                          category.cat_id === data.cat_id
                            ? `text-primary`
                            : "hidden"
                        }
                      >
                        {category.cat_id === data.cat_id ? (
                          <div className="join join-vertical w-full">
                            <div className="collapse collapse-arrow join-item ">
                              <input
                                type="radio"
                                name="my-accordion-4"
                                defaultChecked
                              />
                              <div className="collapse-title text-xs ">
                                {category.subcat_name_en}
                              </div>
                              <div className="collapse-content text-secondary">
                                {subData.map((subData, index) => (
                                  <div
                                    key={index}
                                    className={
                                      category.subcat_id === subData.subcat_id
                                        ? `cursor-pointer`
                                        : "hidden"
                                    }
                                  >
                                    {category.subcat_id ===
                                    subData.subcat_id ? (
                                      <p
                                        onClick={() =>
                                          handleClick(subData.dua_id)
                                        }
                                        className="space-y-2"
                                      >
                                        {subData.dua_name_en}
                                      </p>
                                    ) : (
                                      ""
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </li>
                    ))}
                  </div>
                </div>
              ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-secondary">Duas Page</a>
        </div>

        <div className="navbar-end hidden lg:flex">
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
