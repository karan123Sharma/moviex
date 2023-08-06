import React from "react";
function Trendingcomp(props) {
  return (
    <>
      <div className="grid">
        <img className="pic" src={props.url} alt="" srcSet="" />
      </div>
        <h3 className="trendtitle">{props.title}</h3>
    </>
  );
}

export default Trendingcomp;
