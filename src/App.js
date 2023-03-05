import "./App.css";
import { useState } from "react";
import DisplayWeather from "./Components/DisplayWeather";

function App() {
  const [apiObj, setApiObj] = useState();

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=coquitlam&appid=91bc32fed2e97847d9ec6eb7c87da3a5`,
        { mode: "cors" }
      );
      setApiObj(await response.json());
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <h2>Display weather here</h2>
      <button onClick={fetchWeather}>
        Start fetching weather every 5 seconds
      </button>
      <button>Stop fetching weather</button>
      <DisplayWeather apiObj={apiObj} />
    </div>
  );
}

export default App;
