import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navigation from "./Components/Navbar";
import Home from "./Components/Home";
import Anime from "./Components/Anime";
import New from "./Components/New";
import UpdateAnime from "./Components/UpdateAnime";


function App() {
  return (
    <div>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:id" element={<Anime />} />
          <Route path ='anime/update:/id' element={<UpdateAnime />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;