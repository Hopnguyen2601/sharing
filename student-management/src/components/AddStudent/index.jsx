import React, { useState } from 'react';
import PropTypes from 'prop-types';

import InputText from '../common/InputText';

import './styles.scss';
import Button from '../common/Button';

const AddStudent = (props) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  });

  const hangeChangeValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = (e) => {
    // setFormValues({
    //   ...formValues,
    //   [e.target.name]: e.target.value,
    // });
  };

  return (
    <div>
      <h2 className="title">Add New Student</h2>
      <form className="form" onSubmit={handleAddStudent}>
        <InputText
          name="name"
          value={formValues.name}
          onChange={hangeChangeValue}
        />
        <InputText
          name="email"
          type="email"
          value={formValues.email}
          onChange={hangeChangeValue}
        />
        <Button type="submit" title="Add" />
      </form>
    </div>
  );
};

AddStudent.propTypes = {};

export default AddStudent;
