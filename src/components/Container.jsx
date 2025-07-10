import React from 'react';
import Header from './Header';
import FaqList from './FaqList';
import Wrapper from './Wrapper';

function Container() {
  return (
    <Wrapper className="container">
      <Header title="FAQs" />
      <FaqList />
    </Wrapper>
  );
}

export default Container;