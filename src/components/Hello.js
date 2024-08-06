import React from "react";
import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: #007bff; /* Primary color */
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker shade of primary color */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5); /* Focus ring */
  }

  &:disabled {
    background-color: #c0c0c0; /* Disabled state color */
    cursor: not-allowed;
  }
`;

const Hello = ({ data }) => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <PrimaryButton>Hi {data?.title}</PrimaryButton>
    </div>
  );
};

export default Hello;
