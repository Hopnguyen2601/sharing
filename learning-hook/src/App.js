import './App.css';
import { useState } from 'react';
import UseLayoutEffect from './components/UseLayoutEffect';

function App() {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="App">
      {/* <button onClick={() => setIsShow(!isShow)}>Toggle</button>
      {isShow && <Content />} */}

      <UseLayoutEffect />
    </div>
  );
}

export default App;
