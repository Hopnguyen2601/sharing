import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <h2>Todo App</h2>
      <TodoList />
    </div>
  );
}

export default App;
