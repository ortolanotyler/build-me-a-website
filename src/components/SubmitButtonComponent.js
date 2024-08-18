import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Nunito', sans-serif;
  background-color: #3a3a3a;
  font-weight: 300;
  opacity: 1;
  color: #f8f8f8;
  padding: 1rem 1rem;
  border: none;
  font-size: 1rem;
  max-width: 400px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease, opacity 0.1s ease;
  margin-top: 15rem; /* Move the button down */

  &:hover {
    background-color: #333333; /* Slightly lighter black on hover */
  }

  &:focus {
    outline: none; /* Remove default outline */
    box-shadow: 0 0 5px #aaa; /* Add a subtle shadow when focused */
  }

  &:active {
    opacity: 0.9; /* Make it fully opaque when clicked */
  }
`;

const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const SubmitButton = ({ text = "Submit", onClick, type = "submit" }) => {
  return (
    <CenteredWrapper>
      <Button type={type} onClick={onClick}>
        {text}
      </Button>
    </CenteredWrapper>
  );
};

export default SubmitButton;
