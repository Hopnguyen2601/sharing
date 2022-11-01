import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { status, statuses } from '../const';
import Card from '../card';

function Form() {
  const [taskInfo, setTask] = useState({
    title: '',
    status: 'new',
    desc: '',
  });

  function handleChangeInfo(e) {
    setTask({
      ...taskInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleCreateTask(event) {
    event.preventDefault();

    let data = JSON.parse(localStorage.getItem('todoList'));
    data.push(taskInfo);
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  return (
    <div>
      <form onSubmit={handleCreateTask}>
        <label htmlFor="title">Title:</label>
        <input
          name="title"
          onChange={handleChangeInfo}
          type="text"
          id="title"
        />
        <br />
        <label htmlFor="desc">Description:</label>
        <input name="decs" onChange={handleChangeInfo} type="text" />
        <br />
        <button type="submit">Create !</button>
      </form>
    </div>
  );
}

export default Form;
