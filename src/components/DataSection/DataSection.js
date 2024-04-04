"use client"
import { useEffect, useState } from "react";
import axios from "axios";

const DataSection = () => {
  const [data, setData] = useState([]);
  const storedDuaName = localStorage.getItem("duaName");
  const number = parseInt(storedDuaName);

  useEffect(() => {
    axios
      .get("http://localhost:3000/subheading.json")
      .then((res) => {
        setData(res.data); 
      })
      .catch((error) => console.log(error));
  }, [storedDuaName]);

  const filteredData = data.filter(item => item.dua_id === number);
  console.log(filteredData, 'filter')

  return (
    <div className="border-2  max-h-[85vh] overflow-y-scroll">
      {filteredData.map((item, index) => (
        <div key={index} className="pb-5">
          <div key={index} className="pb-5">
            <div className="bg-white px-3 space-y-2">
              <h1 className="py-2 ">
                <span className="text-primary">Section:</span>{" "}
                {item.dua_name_en}
              </h1>
              <p>{item.top_en}</p>
              <div className="flex justify-end py-5 text-lg">
                <p className="text-right mx-end">{item.dua_arabic}</p>
              </div>
              {item.transliteration_en && item.translation_en ? (
                <div>
                  <p className="">
                    <span className="text-italic">transliteration: </span>
                    {item.transliteration_en}
                  </p>
                  <p className="">
                    <span>translation: </span>
                    {item.translation_en}
                  </p>
                  <div>
                    <audio controls className="appearance-none">
                      <source src={item.audio} type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="py-5">
                <h3 className="text-primary">Reference: </h3>
                <p>{item.refference_en}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      {filteredData.length === 0 && (
        data.map((item, index) => (
          <div key={index} className="pb-5">
            <div className="bg-white px-3 space-y-2">
              <h1 className="py-2 ">
                <span className="text-primary">Section:</span>{" "}
                {item.dua_name_en}
              </h1>
              <p>{item.top_en}</p>
              <div className="flex justify-end py-5 text-lg">
                <p className="text-right mx-end">{item.dua_arabic}</p>
              </div>
              {item.transliteration_en && item.translation_en ? (
                <div>
                  <p className="">
                    <span className="text-italic">transliteration: </span>
                    {item.transliteration_en}
                  </p>
                  <p className="">
                    <span>translation: </span>
                    {item.translation_en}
                  </p>
                  <div>
                    <audio controls>
                      <source src={item.audio} type="audio/mpeg" />
                    </audio>
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="py-5">
                <h3 className="text-primary">Reference: </h3>
                <p>{item.refference_en}</p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DataSection;
