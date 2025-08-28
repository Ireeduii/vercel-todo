"use client";
import { useState } from "react";

export const EasyField = () => {
  const [input, setInput] = useState("");

  const handleOnChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="border text-center pt-7 w-30 h-30 rounded-2xl  bg-indigo-100">
      <input
        onChange={handleOnChange}
        type="text"
        className="w-20"
        placeholder="typing.."
      ></input>
      <p>Input text : {input}</p>
    </div>
  );
};
