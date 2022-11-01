import React, { useState } from 'react';
import './style.css';
import { status, statuses } from '../const';

function Card({ todo }) {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">Title: {todo.title}</h5>
        <h5 className="card-status">
          <button>Status:</button> {todo.status}
        </h5>
      </div>
      <h5>Description: {todo.desc}</h5>
    </div>
  );
}

export default Card;
