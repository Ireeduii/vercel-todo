"use client";
import { useState } from "react";

export const ColorSwitcher = () => {
  const [color, setColor] = useState("");

  const handleOnChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="border w-30 h-30 rounded-2xl pt-6 bg-indigo-50 ml-5">
      <select onChange={handleOnChange}>
        <option value="">Select a color</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
      </select>
      <div
        style={{
          width: "100px",
          height: "30px",
          backgroundColor: color,
          border: "1px solid",
        }}
        backgroundColor={color}
      ></div>
    </div>
  );
};
