import { React, useState, useEffect } from "react";

let ClockSmalllTeeth=({value,seconds})=>{



    return(
  <>
  <span
        className="absolute h-[100%] text-[8px] sm:text-xs z-10  text-gray-900 "
        style={{ transform: `rotate(${6 * value}deg)` ,color:`${value==seconds?"black":"rgba(128, 128, 128, 0.445)"}`,fontWeight:`${value==seconds?"900":"normal"}`}} 
      >{value==seconds?"|":"o"}</span>
  
  
  </>
  
    )
  }
  let ClockTeeth = ({hours,minutes,seconds}) => {
   
    return (
      <>
        <div
          className="sm:h-4/5 h-4/5 sm:w-4/5 rounded-full flex justify-center
           items-start after:h-1/2 after:w-[3px] after:sm:h-1/2 after:sm:w-[6px] after:rounded-t-[50%] after:absolute  after:bg-red-600  absolute z-40 "
          style={{ transform: `rotateZ(${Math.round(seconds * 6)}deg)` }}
        ></div>
        <div
          className="sm:h-3/5 h-3/5 z-30 sm:w-3/5 rounded-full flex justify-center
           items-start after:h-1/2 after:w-[3px] after:sm:h-1/2 after:sm:w-[6px] after:rounded-t-[50%] after:absolute  after:bg-black absolute "
          style={{ transform: `rotateZ(${minutes * 6}deg)` }}
        ></div>
        <div
          className="sm:h-2/5 h-2/5 z-20 sm:w-2/5 rounded-full flex justify-center
           items-start after:h-1/2 after:w-[3px] after:sm:h-1/2 after:sm:w-[6px] after:rounded-t-[50%] after:absolute  after:bg-black absolute "
          style={{ transform: `rotateZ(${hours * 30 + (minutes * 6) / 12}deg)` }}
        ></div>
      </>
    );
  };
  export {ClockTeeth,ClockSmalllTeeth}