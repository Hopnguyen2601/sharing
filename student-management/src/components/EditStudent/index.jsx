import React, { useState } from 'react';
import Button from '../common/Button';
import InputText from '../common/InputText';
import { useLocation, useNavigate } from 'react-router-dom';
import studentApis from '../../apis/studentApis';
import { STATUS_CODE } from '../../constants';

const EditStudent = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { student } = location.state;

  const [formValues, setFormValues] = useState(student);

  const hangeChangeValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();

    // Handle edit student
    if (formValues === student) {
      alert('Please change before updating!');
    } else {
      const response = await studentApis.update(formValues);

      // Check status for post api
      if (response.status === STATUS_CODE.OK) {
        alert('Congratulations!! Updated successfully.');
        // Go back student list
        navigate('/');
      } else {
        alert('Sorry!! Please try again.');
        console.log(response.status);
      }
    }
  };

  return (
    <div>
      <h2 className="title">Edit Student</h2>
      <form className="form" onSubmit={handleUpdateStudent}>
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
        <Button type="submit" title="Update" />
      </form>
    </div>
  );
};

EditStudent.propTypes = {};

export default EditStudent;
