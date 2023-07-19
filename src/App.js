import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Components/Navbar";
import Home from "./Components/Home";
import Anime from "./Components/Anime";
import Review from "./Components/Review";
import UpdateAnime from "./Components/UpdateAnime";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import SearchBar from "./Components/SearchBar";

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Anime!')
  let [data, setData] = useState([])

  useEffect(() => {
    const fetchData= async () => {
        const API_URL = "https://api.jikan.moe/v4/anime"
        const response= await fetch(API_URL)
        const data= await response.json()
        console.log(data)
        if(data.results.length>0){
            setData(data.results)
        }else{
            setMessage('not found')
        }
    }

    if(search) fetchData()
}, [search])

//makes it so that when submited it changes the searched term
const handleSearch= (e, term) => {
    e.preventDefault()
    setSearch(term)
}   

  return (
    <div>
      <Navigation />
      {/* <SearchBar handleSearch={handleSearch} /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<Anime />} />
          <Route path ='anime/update:/id' element={<UpdateAnime />} />
          <Route path="/review" element={<Review />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;