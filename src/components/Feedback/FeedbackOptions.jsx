import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ProtoType from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => (
        <li key={option}>
          <button value={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default FeedbackOptions;
