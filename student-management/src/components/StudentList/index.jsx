import React, { useEffect, useState } from 'react';

import studentApis from '../../apis/studentApis';
import { STATUS_CODE } from '../../constants';
import StudentItem from '../StudentItem';

import './styles.scss';

const StudentList = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [isLoadData, setIsLoadData] = useState(false);

  const fetchData = async () => {
    const response = await studentApis.getAll();

    // Check status for post api
    if (response.status === STATUS_CODE.OK) {
      setStudentList(response.data);
    } else {
      alert('Get list failed.');
      console.log(response.status);
    }
  };

  // Handle delete student by id
  const handleDeleteStudent = async (studentId) => {
    const response = await studentApis.delete(studentId);
    // Check status for post api
    if (response.status === STATUS_CODE.OK) {
      alert('Congratulations!! Deleted successfully.');
      setIsLoadData(true);
    } else {
      alert('Sorry!! Please try again.');
      console.log(response.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoadData]); //This will run only once

  return (
    <div className="students">
      <h2 className="title">Student List</h2>
      <div className="students__list">
        {studentList.map((item) => (
          <StudentItem
            student={item}
            key={item.id}
            onHandleDelete={handleDeleteStudent}
            isUpdate="false"
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
