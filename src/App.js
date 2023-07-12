import Home from "./Components/Home";
import Navigation from "./Components/Navbar";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
        <Home></Home>
      </header>
    </div>
  );
}

export default App;
