let ClockTimer = ({ value }) => {
    return (
      <span
        className="absolute h-[100%]  z-10  text-black "
        style={{ transform: `rotate(${30 * value}deg)` }}
      >
        <b
          className="sm:font-bold text-xs  sm:text-md md:text-xl inline-block"
          style={{ transform: `rotate(${-30 * value}deg)` }}
        >
          {value}
        </b>
      </span>
    );
  };
  
  export default  ClockTimer;