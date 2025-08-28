"use client";
import { useState } from "react";

export const ToggleMe = () => {
  const [isShow, setIsShow] = useState(true);

  const handleToggle = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="border w-30 h-30 rounded-2xl pt-7 pl-5 bg-indigo-100">
      <button onClick={handleToggle} className="bg-indigo-200 rounded-md ">
        Show/Hide
      </button>
      {isShow && <p>Toggle Me</p>}
    </div>
  );
};
