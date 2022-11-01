import './App.css';
import Card from './components/card';
import Headerbar from './components/header';
import Sidebar from './components/sidebar';
import Form from './components/submitform';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <Headerbar />
      <div className="wrapper">
        <Form />
        <TodoList />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
