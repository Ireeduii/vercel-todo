// "use client";
// import { useState, version } from "react";
// import { Input, Buttons, AddButton } from "../../..";

// const ToDo = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState("");

//   const handleOnChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleAddTodo = () => {
//     setTodos([...todos, inputValue]);
//   };

//   const handleOnClick = () => {
//     if (inputValue.trim() === "") return;
//     setTodos([...todos, { text: inputValue, Completed: false }]);
//     setInputValue("");
//   };

//   return (
//     <div className="bg-gray-100 w-full h-screen flex justify-center items-center ">
//       <div className="w-[380px] h-fit border rounded-md shadow-xl bg-white p-6">
//         <h1 className="font-semibold text-black text-xl text-center mb-4">
//           To-Do List
//         </h1>

//         <div className="flex items-center gap-2 mb-4">
//           <Input
//             onChange={handleOnChange}
//             value={inputValue}
//             placeholder="Add new task..."
//           />
//           <AddButton onClick={handleOnClick}>Add</AddButton>
//         </div>

//         <div>
//           <Buttons onClick={handleAddTodo}></Buttons>
//         </div>

//         <p className="text-[#6B7280] text-center text-[17px] mt-6">
//           No tasks yet. Add one above!
//         </p>

//         <p className="text-[#6B7280] text-[15px] text-center mt-10">
//           Powered by
//           <span className="text-[#3B73ED] pl-2">Pinecone Academy</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ToDo;

// git init
// git pull

// git init
// git add .
// git commit -m
// git branch -M main
// git remote add origin http
// git push -u origin main

// git --version
// git clone http
// cd repo-name
// code .

"use client";
import { useState } from "react";
import { Input, AddButton } from "../../..";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;
    setTodos([...todos, { text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleToggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
      <div className="w-[400px] h-fit border rounded-md shadow-xl bg-white p-6">
        <h1 className="font-semibold text-black text-xl text-center mb-4">
          To-Do List
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <Input
            onChange={handleOnChange}
            value={inputValue}
            placeholder="Add new task..."
          />
          <AddButton onClick={handleAddTodo}>Add</AddButton>
        </div>

        <div className="flex justify-center gap-3 mb-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1 rounded-md ${
              filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`px-3 py-1 rounded-md ${
              filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-3 py-1 rounded-md ${
              filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>

        {/* list */}
        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <p className="text-[#6B7280] text-center text-[17px]">
              No tasks here!
            </p>
          ) : (
            filteredTodos.map((todo, index) => (
              <div
                key={index}
                className="flex justify-between items-center border rounded-md px-3 py-2"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleComplete(index)}
                  />
                  <span
                    className={`${
                      todo.completed
                        ? "line-through text-gray-400"
                        : "text-black"
                    }`}
                  >
                    {todo.text}
                  </span>
                </label>

                {/* btn-delete */}
                <button
                  onClick={() => handleDeleteTodo(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <p className="text-[#6B7280] text-[15px] text-center mt-10">
          Powered by
          <span className="text-[#3B73ED] pl-2">Pinecone Academy</span>
        </p>
      </div>
    </div>
  );
};

export default ToDo;
