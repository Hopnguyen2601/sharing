import React from 'react';
// import { Link } from 'react-router-dom';
// import ContactCard from './ContactCard';

import './styles.scss';

const StudentList = ({ students }) => {
  console.log(students);

  // const deleteConactHandler = (id) => {
  //   props.getContactId(id);
  // };

  // const renderStudentList = props.students.map((contact) => {
  //   return (
  //     <p>Hello</p>
  //     // <ContactCard
  //     //   contact={contact}
  //     //   clickHander={deleteConactHandler}
  //     //   key={contact.id}
  //     // />
  //   );
  // });
  return (
    <div className="students">
      <h2 className="title">Student List</h2>
      <div className="students__list">
        {students.map((student, index) => (
          <div>
            <p>hello</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
