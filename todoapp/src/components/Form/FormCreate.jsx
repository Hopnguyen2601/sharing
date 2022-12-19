import React, { useState, useEffect } from 'react';
import { TextareaAutosize } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

import { STATUS } from '../../constants';
import InputText from '../common/InputText';

import './styles.scss';
import { useNavigate } from 'react-router-dom';
import { localStorageUlti } from '../../functions/localStorage';

const { get, set } = localStorageUlti('todoList', []);

const FormCreate = (props) => {
  let navigate = useNavigate();

  const [formValue, setFormValue] = useState({
    id: uuidv4(),
    title: '',
    author: '',
    description: '',
    status: STATUS.NEW,
  });

  const [validData, setValidData] = useState({
    title: '',
    author: '',
    description: '',
  });
  const [isValid, setIsValid] = useState(false);

  const handleChangeFile = (event) => {
    const { value, name } = event.target;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if input value is Empty
    console.log('value=', formValue);

    if (!formValue['title']) {
      setValidData({
        ...validData,
        ['title']: `Please fill out this field! Title cannot be empty.`,
      });
      setIsValid(false);
    } else {
      setValidData({
        ...validData,
        ['title']: '',
      });
      setIsValid(true);
    }

    if (setIsValid) {
      // Save todo item to localStorage
      const todoListLocalStorage = get();
      set([...todoListLocalStorage, formValue]);

      // Go back todo list
      navigate('/');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-30">
          <label htmlFor="title">Title: </label>
        </div>
        <div className="col-70">
          <InputText
            inputName="title"
            placeholder="Title of task.."
            error={validData['title']}
            inputValue={formValue.title}
            onHandleChange={handleChangeFile}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-30">
          <label htmlFor="author">Author: </label>
        </div>
        <div className="col-70">
          <InputText
            inputName="author"
            placeholder="Author of task.."
            inputValue={formValue.author}
            isValid={isValid}
            error={validData['author']}
            onHandleChange={handleChangeFile}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-30">
          <label htmlFor="description">Description: </label>
        </div>
        <div className="col-70">
          <textarea
            name="description"
            placeholder="Write something.."
            style={{ height: '100px' }}
            value={formValue.description}
            onChange={handleChangeFile}
          ></textarea>
          {!isValid && (
            <p className="input-text__error">{validData['description']}</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-30">
          <label htmlFor="status">Status: </label>
        </div>
        <div className="col-70">
          <select
            id="status"
            name="status"
            className="form__select"
            value={formValue.status}
            label="Status"
            onChange={handleChangeFile}
          >
            <option value={STATUS.NEW}>{STATUS.NEW}</option>
            <option value={STATUS.DOING}>{STATUS.DOING}</option>
            <option value={STATUS.DONE}>{STATUS.DONE}</option>
          </select>
        </div>
      </div>
      <div className="row text-center">
        <button type="submit" value="submit" className="form__btn">
          Save
        </button>
      </div>
    </form>
  );
};

export default FormCreate;
