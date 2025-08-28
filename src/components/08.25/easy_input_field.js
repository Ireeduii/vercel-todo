"use client";
import { useState } from "react";

export const EasyInputField = () => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <div className="pt-6 pl-4 border w-30 h-30 bg-indigo-100 rounded-2xl">
      <input
        onChange={handleChange}
        type="text"
        placeholder="typing.."
        className="w-20"
      />

      <p>Input text : {input.length}</p>
    </div>
  );
};
