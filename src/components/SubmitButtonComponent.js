import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Nunito', sans-serif;
  background-color: black;
  opacity: 0.8;
  color: #f8f8f8;
  border: none;
 
  font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease, opacity 0.3s ease;

  &:hover {
    background-color: #333333; /* Slightly lighter black on hover */
  }

  &:focus {
    outline: none; /* Remove default outline */
    box-shadow: 0 0 5px #aaa; /* Add a subtle shadow when focused */
  }

  &:active {
    opacity: 1; /* Make it fully opaque when clicked */
  }
`;

const SubmitButton = ({ text = "Submit", onClick, type = "submit" }) => {
  return (
    <Button type={type} onClick={onClick}>
      {text}
    </Button>
  );
};

export default SubmitButton;
