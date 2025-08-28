export const Blog = (props) => {
  const { image, date, title, description, btn } = props.datas;
  return (
    <div>
      <img src={image} />
      <span>{date}</span>
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{btn}</button>
    </div>
  );
};
