import React, { useState, useEffect } from "react";
//Make sure to give dependency as the second parameter of the useEffect
function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <div>{count}</div>;
}

export default IntervalHookCounter;
