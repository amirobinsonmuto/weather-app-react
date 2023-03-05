import PropTypes from "prop-types";

const DisplayWeather = ({ apiObj }) => {
  if (apiObj === undefined) {
    return <div className="display-weather">Not fetched data yet</div>;
  }
  return (
    <div className="display-weather">
      <h3>latitude: {apiObj.latitude}</h3>
      <h3>longitude: {apiObj.longitude}</h3>
    </div>
  );
};

DisplayWeather.propTypes = {
  apiObj: PropTypes.object.isRequired,
};

export default DisplayWeather;
