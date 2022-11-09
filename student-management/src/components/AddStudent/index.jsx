import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import InputText from '../common/InputText';
import Button from '../common/Button';
import studentApis from '../../apis/studentApis';
import { STATUS_CODE } from '../../constants';

import './styles.scss';

const AddStudent = (props) => {
  const defaultValues = {
    id: uuidv4(),
    name: '',
    email: '',
    image: '',
  };
  const [formValues, setFormValues] = useState(defaultValues);

  const hangeChangeValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();

    // Handle save new student to list
    const response = await studentApis.add(formValues);
    // Check status for post api
    if (response.status === STATUS_CODE.CREATED) {
      alert('Congratulations!! Added successfully.');
    } else {
      alert('Sorry!! Please try again.');
      console.log(response.status);
    }

    // reset form values
    setFormValues(defaultValues);
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
        <InputText
          name="image"
          value={formValues.image}
          onChange={hangeChangeValue}
        />
        <Button type="submit" title="Add" />
      </form>
    </div>
  );
};

AddStudent.propTypes = {};

export default AddStudent;
