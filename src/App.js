import "./App.css";
import { useEffect, useState } from "react";
import DisplayWeather from "./Components/DisplayWeather";
import Button from "./Components/Button";
import { WiDayCloudyGusts } from "react-icons/wi";

function App() {
  const [apiObj, setApiObj] = useState();
  const [intervalId, setIntervalId] = useState();
  const [fetchCount, setFetchCount] = useState(0);
  const [isFetchActive, setIsFetchActive] = useState(false);

  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=49.28&longitude=-122.78&hourly=temperature_2m`,
        { mode: "cors" }
      );
      setApiObj(await response.json());
      setFetchCount((prev) => prev + 1);
    } catch (err) {
      console.error(err);
    }
  };

  const handleStart = () => {
    let apiCall = setInterval(() => {
      fetchWeather();
    }, 5000);
    setIntervalId(apiCall);
    setIsFetchActive(!isFetchActive);
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIsFetchActive(!isFetchActive);
  };

  useEffect(() => {
    fetchWeather();
    handleStart();
    return () => {
      handleStop();
    };
  }, []);

  return (
    <div className="container">
      <h1>Weather App</h1>
      <WiDayCloudyGusts size={70} />
      <p>Fetch Count: {fetchCount}</p>
      <DisplayWeather apiObj={apiObj} />
      <Button
        handleStop={handleStop}
        handleStart={handleStart}
        isFetchActive={isFetchActive}
      />
    </div>
  );
}

export default App;
