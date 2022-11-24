import React, { useState } from 'react';
import { Checkbox, Row } from 'antd';
import { useDispatch } from 'react-redux';

import { todoListSlice } from '../TodoList/TodoListSlice';

const Todo = ({ todo, status }) => {
  const [completed, setCompleted] = useState(status);
  const dispatch = useDispatch();

  const handleChangeStatus = () => {
    setCompleted(!completed);
    dispatch(todoListSlice.actions.changeTodoStatus(todo.id));
  };

  return (
    <Row
      justify="space-between"
      key={todo.id}
      style={{
        ...(completed ? { textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={completed} onChange={handleChangeStatus}>
        {todo.name}
      </Checkbox>
    </Row>
  );
};

Todo.propTypes = {};

export default Todo;
