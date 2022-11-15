import React, { useEffect, useLayoutEffect, useState } from 'react';

UseLayoutEffect.propTypes = {};

function UseLayoutEffect(props) {
  const [count, setCount] = useState(0);

  useLayoutEffect(() => {
    if (count > 9) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}> increase 1</button>
    </div>
  );
}

export default UseLayoutEffect;
