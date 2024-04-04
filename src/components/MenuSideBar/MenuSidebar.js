'use client'
import { useEffect, useState } from "react";
import axios from "axios";

const MenuSideBar = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [subData, setSubData] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/heading.json")
      .then((res) => setData(res.data))
      .catch((error) => console.log(error));

    axios
      .get("http://localhost:3000/category.json")
      .then((res) => setCategory(res.data))
      .catch((error) => console.log(error));
    
      axios
      .get("http://localhost:3000/subHeading.json")
      .then((res) => setSubData(res.data))
      .catch((error) => console.log(error));
  }, []);
  const handleClick = (duaName) => {
    localStorage.setItem("duaName", duaName);
    window.location.reload();

  };
  
  return (
    <div className="border-2 bg-white h-[85vh] overflow-y-scroll hidden lg:block">
        <h1 className="text-xl text-center p-3 bg-primary text-white rounded-t-2xl">
    Category
  </h1>

  <div className="flex items-center">
    <input
      type="text"
      className="border-2 py-2 w-full px-4 mt-3"
      placeholder="Search"
    />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="w-5 h-5 opacity-70 -ml-6 mt-2"
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd"
      />
    </svg>
  </div>

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
              category.cat_id === data.cat_id ? `text-primary` : "hidden"
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
                    {
                      subData.map((subData,index)=><div key={index} className={
                        category.subcat_id === subData.subcat_id ? `cursor-pointer` : "hidden"
                      }>
                        {
                          category.subcat_id===subData.subcat_id?
                          <p onClick={()=>handleClick(subData.dua_id)} className="space-y-2">{subData.dua_name_en}</p>
                          :
                          ''
                        }
                      </div>)
                    }
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
    </div>
);
};

export default MenuSideBar;