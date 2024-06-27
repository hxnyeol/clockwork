import React, { useEffect, useRef, useState } from "react";
import "./clock.css";

const Clock = () => {
  const [clk, setClk] = useState({
    hour: new Date().getHours(),
    min: new Date().getMinutes(),
    sec: new Date().getSeconds(),
  }); // use current time

  const hourRef = useRef();
  const minRef = useRef();
  const secRef = useRef();

  const handleTime = () => {
    let my_date = new Date();

    setClk({
      hour: my_date.getHours(),
      min: my_date.getMinutes(),
      sec: my_date.getSeconds(),
    });
  };

  const updateClock = () => {
    let hour_var = 30 * (clk.hour % 12);
    let min_var = 6 * clk.min;
    let sec_var = 6 * clk.sec;
    hourRef.current.style.transform = `rotate(${hour_var}deg)`;
    minRef.current.style.transform = `rotate(${min_var}deg)`;
    secRef.current.style.transform = `rotate(${sec_var}deg)`;

    // hourRef.current.style.rotate = String((360 % 60) * clk.hour)+"deg";
    // console.log(hourRef.current.style);
  };

  useEffect(() => {
    const myInt = setInterval(handleTime, 1000);
    console.log(clk);

    return () => clearInterval(myInt);
  }, []);

  useEffect(() => {
    const myElements = updateClock(); // call
    return () => clearInterval(myElements);
  }, [clk]);

  return (
    <>
      {/* <div>clock time is: {clk.sec}</div> */}

      <div id="clock">
        <div className="align-items">
          <div ref={hourRef} id="hour"></div>
          <div ref={minRef} id="min"></div>
          <div ref={secRef} id="sec"></div>
          <div className="clk-text">
            {clk.hour}:{clk.min}
          </div>
        </div>
      </div>
    </>
  );
};

export default Clock;
