import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Components/Navbar";
import Home from "./Components/Home";
import Anime from "./Components/Anime";
import Review from "./Components/Review";
import UpdateAnime from "./Components/UpdateAnime";
import Profile from "./Components/Profile";
import Login from "./Components/Login";


function App() {
  return (
    <div>
      <Navigation />
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