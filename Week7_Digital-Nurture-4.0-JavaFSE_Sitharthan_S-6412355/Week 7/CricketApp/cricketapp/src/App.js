import logo from "./logo.svg";
import "./App.css";
import DisplayPlayers from "./listOfPlayers";
import FilterPlayersByScore from "./playersFilter";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";

function App() {
  let flag = false;
  if (flag) {
    return (
      <div className="App">
        <DisplayPlayers />
        <hr></hr>
        <FilterPlayersByScore />
        <hr></hr>
      </div>
    );
  }else{
    return (
      <div className="App">
        <OddPlayers />
        <hr></hr>
        <EvenPlayers />
        <hr></hr>
      </div>
    );
  }
}

export default App;
