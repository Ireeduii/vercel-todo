"use client";
import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="w-30 h-30 border pt-7 pl-4  rounded-2xl bg-indigo-100">
      <button onClick={handleClick} className="rounded-md w-20 bg-indigo-200">
        +
      </button>
      <p>counter: {counter} </p>
    </div>
  );
};
