export const Input = (props) => {
  return (
    <div>
      <input
        onChange={props.onChange}
        value={props.value}
        type="text"
        placeholder={props.placeholder}
        className="text-[#71717A] flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[270px]"
      />
    </div>
  );
};
