export const Buttons = (props) => {
  return (
    <div className="flex gap-2 mb-4">
      <button className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-700">
        All
      </button>
      <button className="px-3 py-1 rounded bg-gray-100 text-black ">
        Active
      </button>
      <button className="px-3 py-1 rounded bg-gray-100 text-black">
        Completed
      </button>

      {props.children}
    </div>
  );
};
