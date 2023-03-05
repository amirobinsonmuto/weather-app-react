import PropTypes from "prop-types";

const Button = ({ handleStop, handleStart, isFetchActive }) => {
  if (isFetchActive) {
    return (
      <button className="btn" onClick={handleStop}>
        Stop
      </button>
    );
  }
  return (
    <button className="btn" onClick={handleStart}>
      Start
    </button>
  );
};

Button.propTypes = {
  handleStop: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  isFetchActive: PropTypes.bool.isRequired,
};

export default Button;
