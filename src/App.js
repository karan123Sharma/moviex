import "./App.css";
import Navbar from "./Components/Navbar";
import Search from "./Components/Filters/Search";
import TopRecomendation from "./Components/TopRecom";
import Trending from "./Components/Trending";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import TopManga from "./Components/Filters/TopManga";
let sum = "hey";
function App(props) {
  return (
    <div className="app">
        <Navbar />
        {/* {console.log(sum)} */}
        {/* <Search word="food wars"/> */}
        <TopRecomendation/>
        <Trending/>
        {/* <TopManga/> */}
        {/* <TopAnime/> */}
          {/* <Route path="/Search" element={<Search word="my hero academia"/>}/> */}
          {/* <Route path="/" element={ <App/>}/> */}
    </div>
  );
}

export default App;
