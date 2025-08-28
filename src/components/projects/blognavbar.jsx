export const Navbar = (props) => {
  return (
    <div className="flex gap-3 py-5">
      <h4>{props.title}</h4>
      <h2>{props.name}</h2>
    </div>
  );
};
