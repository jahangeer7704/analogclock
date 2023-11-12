import ClockBody from "./ClockBody";
import {  useState, useEffect } from "react";

function Watch() {
  let date = new Date();
  let [demoSeconds, setDemoSeconds] = useState("");
let [hours, setHours] = useState("");
let [minutes, setMinutes] = useState("");
let [seconds, setSeconds] = useState("");

  useEffect(() => {
    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
  }, [demoSeconds]);
  setInterval(() => {
    setDemoSeconds(date.getSeconds());
  }, 1000);



  return <ClockBody hours={hours} minutes={minutes} seconds={seconds}/>;
}

export default Watch;
