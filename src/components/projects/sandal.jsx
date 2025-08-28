export const Sandal = (props) => {
  return (
    <div>
      <div className="rounded-3xl w-[300px] h-[400px] border bg-gray-400  text-black">
        <img
          src={props.image}
          className="w-[300px] h-[300px]  rounded-3xl bg-white"
        ></img>
        <p className="text-center font-semibold mt-3">{props.title}</p>
        <p className="text-center text-red-600">{props.price}</p>
      </div>
    </div>
  );
};
// !!! olong ashiglaj bga uyd map ashiglah hergtei (doorh code)
