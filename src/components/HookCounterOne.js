import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  /* UseEffect rendering content conditionally using second argument of the useEffect which 
  test either props or state and runs the function in useEffect */
  
  useEffect(() => {
    console.log("UseEffect - Updating document title");
    document.title = `You Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </div>
  );
}

export default HookCounterOne;
