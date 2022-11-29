import "./index.scss";

const Card = ({ handleOnClick, imgSrc, title, description, carstyle }) => {
  const saveUserData = () => {
    alert("Click Happened");
  };

  const onMouseOver = () => {
    onMouseOver = { handleOnClick };
  };

  const saveUUser = () => {
    console.log(alert`mooved`);
  };
  return (
    <div className={carstyle}>
      <img alt="Card img" src={imgSrc}></img>
      <p>{title}</p>
      <p>{description}</p>
      <button onMouseOver={handleOnClick} onClick={saveUserData}>
        Click Me
      </button>
    </div>
  );
};
export default Card;
