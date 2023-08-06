import React, { useEffect, useState } from 'react';

const Search = (props) => {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${props.word}&sfw`);
        const data = await response.json();
        setDataArray(data.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
  <div className="MainSearch">
       <br />
       <br />
       <h1 className="MainTitle">Search Results for : {props.word}</h1>
       <br />
       <br />
     <div className="column">
         {dataArray.map((ele) => {
           return (
            <div className="row">
               <img
                 src={ele.images.jpg?.image_url}
                 alt=""
                srcset=""
            />
               <h3>{ele.title_english}</h3>
            </div>
           );
         })}
       </div>
     </div>
    </div>
  );
};
export default Search;
