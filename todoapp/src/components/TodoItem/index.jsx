import React, { useState } from 'react';
import { STATUS } from '../../constants';

import './styles.scss';

const TodoItem = (props) => {
  const { title, creator, status, description } = props.todo;
  const { idx, onHandleChange } = props;
  const [newStatus, setNewStatus] = useState(status);

  const handleChangeStatus = (e) => {
    onHandleChange(idx, 'DOING');
  };

  return (
    <div className="card">
      <div className="card__container">
        <p className="card__title">
          <label>Title: </label>
          <label>{title}</label>
        </p>
        <p className="card__creator">
          <label>Creator: </label>
          <label>{creator}</label>
        </p>
        <p className="card__status">
          <label>Status: </label>
          <label>{status}</label>
        </p>
        <hr className="card__lineBreak" />
        <p className="card__description">{description}</p>
      </div>
      <button onClick={handleChangeStatus}>Next status</button>
    </div>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
