import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Nunito', sans-serif;
  background-color: #3a3a3a;
  font-weight: 200;
  opacity: 1;
  color: #f8f8f8;
  padding: 1rem 1rem;
  border: none;
  font-size: 1rem;
  max-width: 400px;
  cursor: pointer;
  border-radius: 20px;
  transition: background-color 0.3s ease, opacity 0.1s ease;

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
  padding: 1rem 0;
  height: 10vh;
`;

const SubmitButton = ({ text = "Submit", to = "/", type = "button" }) => {
  return (
    <CenteredWrapper>
      <Link to={to}>
        <Button type={type}>
          {text}
        </Button>
      </Link>
    </CenteredWrapper>
  );
};

export default SubmitButton;
