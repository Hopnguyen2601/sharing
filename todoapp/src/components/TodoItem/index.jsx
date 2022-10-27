import React from 'react';

import './styles.scss';

const TodoItem = (props) => {
  return (
    <div className="card">
      <div className="card__container">
        <p className="card__title">
          <label>Title: </label>
          <label>Task 1</label>
        </p>
        <p className="card__creator">
          <label>Creator: </label>
          <label>Nam</label>
        </p>
        <p className="card__status">
          <label>Status: </label>
          <label>New</label>
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">Description: This is a task</p>
      </div>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
