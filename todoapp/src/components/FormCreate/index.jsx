import React, { useState } from 'react';
import { TextareaAutosize } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { STATUS } from '../../constants';
import InputText from '../../components/common/InputText';

const FormCreate = (props) => {
  let todoList = [];
  localStorage.setItem('todoList', JSON.stringify(todoList));

  const [formValue, setFormValue] = useState({
    id: uuidv4(),
    title: '',
    author: '',
    description: '',
    status: STATUS.NEW,
  });

  const handleChangeFile = (event) => {
    // Call post API
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreateTask = (event) => {
    event.preventDefault();
    // Get all value
    todoList.push(formValue);

    localStorage.setItem('todoList', JSON.stringify(todoList));
  };

  return (
    <form className="form" onSubmit={handleCreateTask}>
      <label htmlFor="title">Title: </label>
      <InputText
        inputName="title"
        inputValue={formValue.title}
        onHandleChange={handleChangeFile}
      />
      <label htmlFor="author">Author: </label>
      <InputText
        inputName="author"
        inputValue={formValue.author}
        onHandleChange={handleChangeFile}
      />
      <label htmlFor="description">Description: </label>
      <TextareaAutosize
        className="form__desc"
        aria-label="minimum height"
        minRows={3}
        name="description"
        placeholder="Minimum 3 rows"
        value={formValue.decs}
        style={{ width: 200 }}
        onChange={handleChangeFile}
      />
      <label htmlFor="status">Status: </label>
      <select
        className="form__select"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name="status"
        value={formValue.status}
        label="Status"
        onChange={handleChangeFile}
      >
        <option value={STATUS.NEW}>{STATUS.NEW}</option>
        <option value={STATUS.DOING}>{STATUS.DOING}</option>
        <option value={STATUS.DONE}>{STATUS.DONE}</option>
      </select>

      <button type="submit">Save</button>
    </form>
  );
};

export default FormCreate;
