import React, { useEffect, useState } from "react";

export default function TopManga() {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.jikan.moe/v4/top/manga");
        const data = await response.json();
        setDataArray(data.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
    <h2 className="trend">Top Manga</h2>
      {dataArray?.map((ele) => {
          return ((<div className="manga">
        <img src={ele.images?.jpg?.image_url} alt="" />
        <h1>{ele.title.length>=8?ele.title.slice(0,10)+"...":ele.title}</h1>
    </div>))
      })}

    </div>
  );
}