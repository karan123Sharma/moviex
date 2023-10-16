import React, { useState } from 'react'
import { Route, Router,a } from 'react-router-dom';
import Search from './Filters/Search';

const Navbar = (props) => {
  return (
    <div>
      <>
        <nav>
        <div className="navigation">
            <ul >
                <li ><a href="/">MovieX</a></li>
                <li><a href="/">Search</a></li>
                <li><a href="/">News</a></li>
                <li>
                <form className="formcontrol" action="">
                  {/* <input type="text" placeholder='Search Your Anime' value={ } onChange={}/> */}
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
