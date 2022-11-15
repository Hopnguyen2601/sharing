import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

UseRefComponent.propTypes = {};

function UseRefComponent(props) {
  let num = useRef;
  // useRef return a object: {
  //   current: value;
  // }
  const [timer, setTimer] = useState(90);

  const handleStart = () => {
    num.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    console.log('Start = ', num.current);
  };

  const handleStop = () => {
    clearInterval(num.current);
    console.log('Stop = ', num.current);
  };

  return (
    <div>
      <h2>{timer}</h2>
      <button onClick={handleStart}> Start</button>
      <button onClick={handleStop}> Stop</button>
    </div>
  );
}

export default UseRefComponent;
