import React from "react";

const Label = ({ name, id }) => {
  return <label htmlFor={id}>{name}</label>;
};

export default Label;
