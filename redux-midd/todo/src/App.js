import { Typography } from 'antd';
import TodoList from './components/TodoList';

import './App.css';

const { Title } = Typography;

function App() {
  return (
    <div
      style={{
        width: 500,
        margin: '0 auto',
        padding: 20,
      }}
    >
      <Title className="title">TODO APP</Title>
      <TodoList />
    </div>
  );
}

export default App;
