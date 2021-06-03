/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Book.css';

function Book({ title, validateAnswer }) {
  return <li onClick={() => validateAnswer(title)}>{title}</li>;
}

export default Book;
