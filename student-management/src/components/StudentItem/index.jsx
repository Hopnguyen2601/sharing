import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../common/Button';

import './styles.scss';

function StudentItem({ student, onHandleDelete }) {
  // Push student id to delete student
  const handleDelete = async () => {
    onHandleDelete(student.id);
  };

  return (
    <div className="student">
      <img
        className="student__avatar"
        src={student.image}
        alt="student avatar"
      />
      <p className="student__name">{student.name}</p>
      <p>{student.email}</p>

      <div className="student__action">
        <Link to={`/edit/${student.id}`} state={{ student: student }}>
          <Button title="Edit" />
        </Link>
        <Button title="Delete" onHanleClick={handleDelete} />
      </div>
    </div>
  );
}

export default StudentItem;
