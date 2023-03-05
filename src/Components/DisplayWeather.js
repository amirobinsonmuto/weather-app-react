const DisplayWeather = ({ apiObj }) => {

    
  if (apiObj === undefined) {
    return <div>not fetched data yet</div>;
  }
  return (
    <div>
      <p>{apiObj.name}</p>
      <p>{apiObj.weather[0].description}</p>
      <p>{Math.round((apiObj.main.temp - 273.15) * 100) / 100}</p>
      <p>{apiObj.wind.speed}</p>
    </div>
  );
};

export default DisplayWeather;
