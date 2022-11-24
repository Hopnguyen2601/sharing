import React, { useState } from 'react';
import { Input, Row, Col, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { todoListSlice } from './TodoListSlice';
import Todo from '../Todo';

const TodoList = (props) => {
  const todoList = useSelector((state) => state.todoList);

  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: inputValue,
        completed: false,
      })
    );
  };

  return (
    <Row style={{ width: '80%', margin: ' 0 auto' }}>
      <Col span={24}>
        <Input.Group compact style={{ display: 'flex' }}>
          <Input value={inputValue} onChange={handleChange}></Input>
          <Button type="primary" onClick={handleAddTodo}>
            Add
          </Button>
        </Input.Group>
      </Col>
      <Col span={24}>
        {todoList.map((todo) => (
          <Todo status={todo.completed} key={todo.id} todo={todo} />
        ))}
      </Col>
    </Row>
  );
};

TodoList.propTypes = {};

export default TodoList;

// ADD_TODO
// CHANGE_STATUS
