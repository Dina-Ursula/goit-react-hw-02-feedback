import React, { Component } from 'react';

const Sections = ({ title, child }) => {
  return (
    <>
      <h3>{title}</h3>
      <div>{child}</div>
    </>
  );
};
export default Sections;
