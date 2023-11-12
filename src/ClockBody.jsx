import { ClockSmalllTeeth, ClockTeeth } from "./Teeths";
import ClockTimer from "./ClockTimer";

let ClockBody = ({ hours, minutes, seconds }) => {
  return (
    <>
      <div
        className="sm:h-2/4 w-[100%] h-2/4 
    sm:w-2/5 rounded-xl flex absolute justify-center items-center overflow-hidden "
      >

      <div className="h-[50%] bg-cyan-400 z-[0] rounded-full self-start  w-[10%] rotate-45 absolute"></div>
      <div className="h-[50%] self-end bg-cyan-400 z-[0] rounded-full w-[10%] rotate-90 absolute"></div>

      </div>
      <div
        className=" w-[100%] h-2/4 backdrop-blur-md
    sm:w-3/5 rounded-xl flex justify-center items-center overflow-visible "
      >
        <div className="h-[200px] w-[200px] relative flex justify-center items-center rounded-full  sm:h-[300px] sm:w-[300px] md:w-[400px] md:h-[400px]">
          <ClockTimer value={1} />
          <ClockSmalllTeeth value={1} seconds={seconds} />
          <ClockSmalllTeeth value={2} seconds={seconds} />
          <ClockSmalllTeeth value={3} seconds={seconds} />
          <ClockSmalllTeeth value={4} seconds={seconds} />
          <ClockTimer value={2} />
          <ClockSmalllTeeth value={6} seconds={seconds} />
          <ClockSmalllTeeth value={7} seconds={seconds} />
          <ClockSmalllTeeth value={8} seconds={seconds} />
          <ClockSmalllTeeth value={9} seconds={seconds} />

          <ClockTimer value={3} />
          <ClockSmalllTeeth value={11} seconds={seconds} />
          <ClockSmalllTeeth value={12} seconds={seconds} />
          <ClockSmalllTeeth value={13} seconds={seconds} />
          <ClockSmalllTeeth value={14} seconds={seconds} />

          <ClockTimer value={4} />
          <ClockSmalllTeeth value={16} seconds={seconds} />
          <ClockSmalllTeeth value={17} seconds={seconds} />
          <ClockSmalllTeeth value={18} seconds={seconds} />
          <ClockSmalllTeeth value={19} seconds={seconds} />

          <ClockTimer value={5} />
          <ClockSmalllTeeth value={21} seconds={seconds} />
          <ClockSmalllTeeth value={22} seconds={seconds} />
          <ClockSmalllTeeth value={23} seconds={seconds} />
          <ClockSmalllTeeth value={24} seconds={seconds} />

          <ClockTimer value={6} />
          <ClockSmalllTeeth value={26} seconds={seconds} />
          <ClockSmalllTeeth value={27} seconds={seconds} />
          <ClockSmalllTeeth value={28} seconds={seconds} />
          <ClockSmalllTeeth value={29} seconds={seconds} />

          <ClockTimer value={7} />
          <ClockSmalllTeeth value={31} seconds={seconds} />
          <ClockSmalllTeeth value={32} seconds={seconds} />
          <ClockSmalllTeeth value={33} seconds={seconds} />
          <ClockSmalllTeeth value={34} seconds={seconds} />

          <ClockTimer value={8} />
          <ClockSmalllTeeth value={36} seconds={seconds} />
          <ClockSmalllTeeth value={37} seconds={seconds} />
          <ClockSmalllTeeth value={38} seconds={seconds} />
          <ClockSmalllTeeth value={39} seconds={seconds} />
          <ClockTimer value={9} />
          <ClockSmalllTeeth value={41} seconds={seconds} />
          <ClockSmalllTeeth value={42} seconds={seconds} />
          <ClockSmalllTeeth value={43} seconds={seconds} />
          <ClockSmalllTeeth value={44} seconds={seconds} />
          <ClockTimer value={10} />
          <ClockSmalllTeeth value={46} seconds={seconds} />
          <ClockSmalllTeeth value={47} seconds={seconds} />
          <ClockSmalllTeeth value={48} seconds={seconds} />
          <ClockSmalllTeeth value={49} seconds={seconds} />
          <ClockTimer value={11} />
          <ClockSmalllTeeth value={51} seconds={seconds} />
          <ClockSmalllTeeth value={52} seconds={seconds} />
          <ClockSmalllTeeth value={53} seconds={seconds} />
          <ClockSmalllTeeth value={54} seconds={seconds} />
          <ClockTimer value={12} />
          <ClockSmalllTeeth value={56} seconds={seconds} />
          <ClockSmalllTeeth value={57} seconds={seconds} />
          <ClockSmalllTeeth value={58} seconds={seconds} />
          <ClockSmalllTeeth value={59} seconds={seconds} />
        </div>
        <div className="h-[200px] shadow-xl shadow-black/30 w-[200px] absolute flex justify-center items-center z-0 rounded-full  sm:h-[300px] sm:w-[300px] md:w-[400px] md:h-[400px]">
          <span className=" font-extrabold z-50 bg-pink-700 rounded-full h-2 w-2"></span>
          <ClockTeeth hours={hours} minutes={minutes} seconds={seconds} />
        </div>
      </div>
    </>
  );
};
export default ClockBody;
