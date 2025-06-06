import { useState, useEffect } from "react";

function Beeblio(props) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(props.title);
    return storedValue === "true"; // Convert string to boolean
  });
  function handleClick() {
    setValue(!value);
  }

  useEffect(() => {
    localStorage.setItem(props.title, value);
  }, [value, props.title]);

  return (
    <div>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>{props.year}</div>
      <div>{props.pages}</div>
      <div>
        <img title="image" src={props.cover}></img>
      </div>
      <div>
        <button onClick={handleClick}>
          {value === true ? (
            <span style={{ color: "red" }}>&#10084;</span>
          ) : (
            <span style={{ color: "gray" }}>&#10084;</span>
          )}{" "}
          like {value.toString()}
        </button>
      </div>
    </div>
  );
}

export default Beeblio;
