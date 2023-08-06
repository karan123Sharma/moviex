import React, { useEffect, useState } from "react";
const TopRecomendation = (props) => {
  let url = "https://api.jikan.moe/v4/top/anime";
  const [dataArray, setDataArray] = useState([]);
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
  let count =0;
  let string ="                      ";
  return (
    <>
      <div className="media-Scroller">
      {dataArray.map((ele)=>{
        count++;
        return (<div className="TopRecom">
          <div className="spotlight">
            <h3>#{count} SpotLight</h3>
          </div>
          <div className="Title">
          {ele.title_english.slice(0,20)}
          <br/>
          {ele.title_english.length <=20 ?<br/>:ele.title_english.slice(21,30)}
          </div>
          <ul className="Small">
            <li className="tele"><i className="	fa fa-play-circle" style={{ fontSize: "15px" }}> </i> {ele.type}</li>
            <li className="Duration"><i className="	fa fa-hourglass-start" style={{ fontSize: "15px" }}> </i> {ele.duration.slice(0,6)}</li>
            <li className="Date"><i className="fa fa-calendar" style={{ fontSize: "15px" }}> </i> {ele.aired.string.slice(0,11)}</li>
            <li className="Quality" >HD</li>
            <li className="Epi"><i className="fa fa-image" style={{ fontSize: "15px" }}> </i> {ele.episodes}</li>
          </ul>
          <div className="description">
            <p>
             {ele.synopsis.slice(0,73)}
              <br /> {ele.synopsis.slice(74,130)} <br />
             {ele.synopsis.slice(131,190)}
              <br /> stocked, powered, and upgraded with new skills..
              <br />
            </p>
          </div>
          <div className="buttons">
            <button className="WatchNow">
              &nbsp;<i className="fa fa-play" style={{ fontSize: "15px" }}></i>
              &nbsp;Watch Now
            </button>
            <button className="Details">Details &gt; </button>
          </div>
          <img
            src={(ele.trailer?.images?.maximum_image_url !== null || ele.trailer?.images?.maximum_image_url=== "https://img.youtube.com/vi/LOdAAEJiebM/maxresdefault.jpg") ? ele.trailer?.images?.maximum_image_url:"https://hindustantimes.com/ht-img/img/2023/06/14/550x309/demon_slayer_season_3_release_1681007034048_1686759381730.jpg"}
            alt="Dinosaur"
          />
        </div>)
      })}
      </div>
    </>
  );
}
export default TopRecomendation;
