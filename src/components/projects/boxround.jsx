export const Box = (props) => {
  if (props.isBox) {
    return (
      <div
        className={
          "w-25 h-25 bg-amber-500 text-black font-semibold flex justify-center items-center"
        }
        style={{ background: props.color }}
      >
        Box
      </div>
    );
  }

  return (
    <div className="h-25 w-25 rounded-full bg-indigo-400 text-black font-semibold flex justify-center items-center">
      Round
    </div>
  );
};

// export default hiij bga n neg ysondoo olon zuiliig bgtasan page
