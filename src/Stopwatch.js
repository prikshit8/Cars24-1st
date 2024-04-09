import { useEffect, useState } from "react";

function Stopwatch() {
  const MINUTES = 60;
  const [time, setTime] = useState(0);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    let timerId;
    if (flag) {
      timerId = setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timerId);
    };
  }, [flag, time]);
  const startFn = (event) => setFlag(event);
  const resetFn = () => {
    setFlag(false);
    setTime(0);
  };
  const minutes = Math.floor(time / MINUTES);
  const seconds = Math.floor(time % MINUTES);
  //   80
  // 1
  // 20
  return (
    <div>
      <div>
        {minutes} : {seconds}
      </div>
      <button onClick={() => startFn(true)}>start</button>
      <button onClick={() => startFn(false)}>pause</button>
      <button onClick={resetFn}>reset</button>
    </div>
  );
}
export default Stopwatch;
