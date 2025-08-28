"use client";
import { useState } from "react";

import { Input, Buttons, AddButton } from "@/components";

const ToDo = () => {
  const [todos, setTodos] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = () => {
    if (inputValue.trim() === "") return;
    // hooson uyd nemehgui
    setTodos([...todos, { text: inputValue, Completed: false }]);
    setInputValue("");
    // input hoosloh

    return (
      <div>
        <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
          <div className="w-[380px] h-[300px] border rounded-md shadow-xl bg-white p-6">
            <h1 className="font-semibold text-black text-xl text-center mb-4">
              To-Do List
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <Input
                onChange={handleOnChange}
                value={inputValue}
                placeholder="Add new task..."
              />
              <AddButton onClick={handleOnClick}>Add</AddButton>
            </div>

            <div>
              <Buttons></Buttons>
            </div>

            <Buttons></Buttons>

            <p className="text-[#6B7280] text-center text-[17px] mt-6 m">
              No tasks yet. Add one above!
            </p>
            <p className="text-[#6B7280] text-[15px] text-center mt-10 ">
              Powered by
              <span className="text-[#3B73ED] pl-2 ">Pinecone Academy</span>
            </p>
          </div>
        </div>
      </div>
    );
  };
};
export default ToDo;
