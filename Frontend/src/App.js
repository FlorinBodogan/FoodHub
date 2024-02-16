import "./App.css";
import "./Components/home/home";
import Home from "./Components/home/home";
import NavBar from "./Components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
        <Home></Home>
        <Register></Register>
      </header>
    </div>
  );
}

export default App;
