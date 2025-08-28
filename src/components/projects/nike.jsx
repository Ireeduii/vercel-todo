export const Picture = (props) => {
  return (
    <div className="w-50 h-auto flex flex-col items-center text-center p-6 border rounded-lg shadow-md">
      <img src={props.image} className="w-30 h-30 mb-6"></img>
      <h3 className="font-semibold text-xl mb-2 text-gray-900">
        {props.title}
      </h3>
      <p className="text-gray-700">{props.description}</p>
    </div>
  );
};
