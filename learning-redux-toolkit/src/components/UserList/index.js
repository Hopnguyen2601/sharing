import React, { useEffect, useState } from 'react';

import studentApis from '../../apis/studentApis';
import { STATUS_CODE } from '../../constants';
import UserItem from '../UserItem';

import './styles.scss';

const StudentList = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [isLoadData, setIsLoadData] = useState(true);

  const fetchData = async () => {
    setIsLoadData(true);
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
      setIsLoadData(false);
    } else {
      alert('Sorry!! Please try again.');
      console.log(response.status);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isLoadData]);

  return (
    <div className="students">
      <h2 className="title">Student List</h2>
      <div className="students__list">
        {!studentList.length ? (
          <p className="students__not-found">No results found!</p>
        ) : (
          studentList.map((item) => (
            <UserItem
              student={item}
              key={item.id}
              onHandleDelete={handleDeleteStudent}
              isUpdate="false"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default StudentList;
