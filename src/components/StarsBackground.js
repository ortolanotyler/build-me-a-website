import React from 'react';
import styled, { keyframes } from 'styled-components';

const animStar = keyframes`
  from { transform: translateY(0px); }
  to { transform: translateY(-2000px); }
`;

const generateBoxShadow = (n) => {
  const random = (num) => Math.floor(Math.random() * num);
  let value = `${random(1000)}px ${random(2000)}px #FFF`;
  for (let i = 1; i < n; i++) {
    value += `, ${random(2000)}px ${random(1000)}px #FFF`;
  }
  return value;
};

const shadowsSmall = generateBoxShadow(100);
const shadowsMedium = generateBoxShadow(100);
const shadowsBig = generateBoxShadow(100);

const Stars = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsSmall};
  animation: ${animStar} 50s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${shadowsSmall};
  }
`;

const Stars2 = styled.div`
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: ${shadowsMedium};
  animation: ${animStar} 100s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${shadowsMedium};
  }
`;

const Stars3 = styled.div`
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: ${shadowsBig};
  animation: ${animStar} 150s linear infinite;

  &:after {
    content: " ";
    position: absolute;
    top: 2000px;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${shadowsBig};
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;
  z-index: -1;
`;

const StarsBackground = () => (
  <Background>
    <Stars id="stars" />
    <Stars2 id="stars2" />
    <Stars3 id="stars3" />
  </Background>
);

export default StarsBackground;
