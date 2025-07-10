import React from 'react';
import Wrapper from './Wrapper';
import starIcon from '../assets/image/icon-star.svg';

function Header({ title }) {
  return (
    <Wrapper className="item-1">
      <img src={starIcon} alt="icon" />
      <h1>{title}</h1>
    </Wrapper>
  );
}

export default Header;
