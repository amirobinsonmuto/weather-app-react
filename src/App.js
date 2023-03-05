import "./App.css";
import DisplayWeather from "./Components/DisplayWeather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Display weather here</h2>
      <button>Start fetching weather every 5 seconds</button>
      <button>Stop fetching weather</button>
      <DisplayWeather />
    </div>
  );
}

export default App;
