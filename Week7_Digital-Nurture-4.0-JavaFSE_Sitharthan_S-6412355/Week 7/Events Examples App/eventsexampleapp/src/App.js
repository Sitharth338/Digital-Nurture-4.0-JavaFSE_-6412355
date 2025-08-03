import logo from "./logo.svg";
import "./App.css";
import CurrencyConvertor from "./components/CurrencyConvertor";
import IncrementDecrement from "./components/IncrementDecrement";

function App() {
  return (
    <div className="App">
      <IncrementDecrement />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
