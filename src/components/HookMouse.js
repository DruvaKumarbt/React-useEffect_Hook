import React, { useState, useEffect } from "react";

//useEffect to be called only once on initial render & shouldn't be called on re-render

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  //Use empty array as a second parameter of the useEffect to specify that it should be called only once

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
    //Function passed to useEffect can return a function which is executed when component is unmounted

    //A.K.A whatever you return is basically a cleanup function.

    return () => {
      console.log("Component Unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks: X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
