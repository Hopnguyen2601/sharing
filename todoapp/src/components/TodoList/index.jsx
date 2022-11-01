import React from 'react';
import { useState } from 'react';
import { initData } from '../../data/todos';

import TodoItem from '../TodoItem';

import './styles.scss';

const TodoList = (props) => {
  const [todoList, setTodoList] = useState(initData);

  const handleChange = (idx, newStatus) => {
    // New todoList frome current one
    const newTodoList = [...todoList];
    // Update status for item by index
    newTodoList[idx] = {
      ...todoList[idx],
      status: newStatus,
    };

    setTodoList(newTodoList);
  };

  return (
    <div className="todos">
      {todoList.map((item, index) => (
        <TodoItem
          todo={item}
          key={index}
          idx={index}
          onHandleChange={handleChange}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
