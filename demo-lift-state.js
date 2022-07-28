import { useState } from "react";

function SmallComponent({ changeColor }) {
  return <button onClick={changeColor}>Click here to change color</button>;
}

function ParentComponent() {
  const [color, setColor] = useState("black");

  const changeColor = () => {
    setColor("red");
  };

  return (
    <>
      <span style={{ color }}>Change ME COLOR</span>
      <SmallComponent changeColor={changeColor} />
    </>
  );
}

export default ParentComponent;
