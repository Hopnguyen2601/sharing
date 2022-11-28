import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../common/Button';

import './styles.scss';

function UserItem({ user, onHandleDelete }) {
  // Push user id to delete user
  const handleDelete = async () => {
    onHandleDelete(user.id);
  };

  return (
    <div className="user">
      <img className="user__avatar" src={user.image} alt="user avatar" />
      <p className="user__name">{user.name}</p>
      <p>{user.email}</p>

      <div className="user__action">
        <Link to={`/edit/${user.id}`} state={{ user: user }}>
          <Button title="Edit" />
        </Link>
        <Button title="Delete" onHanleClick={handleDelete} />
      </div>
    </div>
  );
}

export default UserItem;
