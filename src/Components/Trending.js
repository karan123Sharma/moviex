import React, { useEffect, useState } from "react";
import Trendingcomp from "./Trendingcomp";

function Str_size(params) {
  if (params.length > 9) {
    params = params.substr(0, 9);
  }
  return params + "...";
}
const Trending = (props) => {
  let url = "https://api.jikan.moe/v4/top/anime";
  const [data, setDataArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDataArray(data.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h2 className="trend">Top Rated</h2>
      <div className="complete">
        <div className="conatiner">
          <div className="grid-container">
            {data.map((element) => {
              return (
                <Trendingcomp
                  title={Str_size(element.title_english)}
                  url={element.images.jpg?.image_url}
                />
              );
            })}
          </div>
        </div>
        <div className="share-icon">
          <div className="shareicon"></div>
          <div className="share">
            <h3>Share Moviex</h3>
            <h3 className="down">To Your Friends</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default Trending;
