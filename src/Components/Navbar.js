import React, { useState } from 'react'
import { Route, Router,a } from 'react-router-dom';
import Search from './Filters/Search';

const Navbar = (props) => {
  const [data,newdata] = useState("");
  const search = ()=>{
    sum = data;
  }
  const handleonchange = (event) =>{
    newdata(event.target.value)
  }
  return (
    <div>
      <>
        <nav>
        <div className="navigation">
            <ul >
                <li ><a href="/">MovieX</a></li>
                <li><a href="/">Search</a></li>
                <li><a href="/">News</a></li>
                <li><form className="formcontrol" action="">
                    <input type="search" className="Searchbar" value={data} name="SearchBar" onChange={handleonchange} placeholder='Search Your Anime' id="" />
                    <button type='submit' onClick={search} className='btn' ><i className='fa fa-search'></i> </button>
                </form>
                </li>
                <li style={{float: "right" }}><a className='rightFloat' href="/">BollyWood</a></li>
                <li style={{float: "right" }}><a className='rightFloat' href="/">HollyWood</a></li>
            </ul>
        </div>
        </nav>
      </>
    </div>
  )
}
export default Navbar
