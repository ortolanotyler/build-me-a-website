import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Nunito', sans-serif;
  background-color: #3a3a3a;
  font-weight: 200;
  opacity: 1;
  color: #f8f8f8;
  padding: 15px ;
  border: none;
  font-size: 14px;
  max-width: 400px;
  cursor: pointer;
  border-radius: 50px;
      box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25), 0 3px 5px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */

  transition: background-color 0.3s ease, opacity 0.1s ease, box-shadow 0.3s ease;

  /* Adding box shadow */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #333333; /* Slightly lighter black on hover */
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.25), 0 3px 5px rgba(0, 0, 0, 0.15); /* Stronger shadow on hover */
  }

  &:focus {
    outline: none; /* Remove default outline */
    box-shadow: 0 0 5px #aaa, 0 4px 6px rgba(0, 0, 0, 0.2); /* Add a subtle shadow when focused */
  }

  &:active {
    opacity: 0.9; /* Slightly less opaque when clicked */
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.3), 0 1px 2px rgba(0, 0, 0, 0.2); /* Slightly reduced shadow on active state */
  }
`;
const CenteredWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 10px;
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
