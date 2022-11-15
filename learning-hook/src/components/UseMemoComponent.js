import React, { useState } from 'react';
import Content from './Content';

UseMemoComponent.propTypes = {};

function UseMemoComponent(props) {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleInscrease1 = () => {
    setCount1(count1 + 1);
  };
  const handleInscrease2 = () => {
    setCount2(count2 + 1);
  };

  return (
    <div>
      <h2>{count1}</h2>
      <h2>{count2}</h2>
      <button onClick={handleInscrease1}> increase 1</button>
      <button onClick={handleInscrease2}> increase 2</button>
      <Content count={count2} />
    </div>
  );
}

export default UseMemoComponent;
