import { Col, Row, Input, Button } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodo } from '../../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todoListSelector } from '../../redux/selectors';
import { todoLislSlice } from './TodosSlice';

export default function TodoList() {
  const [todoName, setTodoName] = useState('');

  const todoList = useSelector(todoListSelector);

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    // dispatch(
    //   addTodo({
    //     id: uuidv4(),
    //     name: todoName,
    //     completed: false,
    //   })
    // );

    dispatch(
      todoLislSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false,
      })
    );

    setTodoName('');
  };

  const handleInputChange = (e) => {
    setTodoName(e.target.value);
  };

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={handleInputChange} />
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            prioriry={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
    </Row>
  );
}
