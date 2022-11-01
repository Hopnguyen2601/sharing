import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card';

const TodoList = (props) => {
  const data = localStorage.getItem('todoList')
    ? JSON.parse(localStorage.getItem('todoList'))
    : [];

  return (
    <div>
      <div className="card-flex">
        {data.map((item, index) => (
          <Card todo={item} key={index} />
        ))}
      </div>
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
