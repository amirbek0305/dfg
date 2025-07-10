import React, { useState } from 'react';
import Wrapper from './Wrapper';
import plusIcon from '../assets/image/icon-plus.svg';
import minusIcon from '../assets/image/icon-minus.svg';


function FaqItem({ question, answer }) {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <Wrapper className={`faq-item ${active ? 'active' : ''}`}>
      <Wrapper className="question" onClick={toggle}>
        <h3>{question}</h3>
        <span className="icon">
          <img
            src={active ? minusIcon : plusIcon}
            alt={active ? 'minus icon' : 'plus icon'}
          />
        </span>
      </Wrapper>
      {active && (
        <Wrapper className="answer">
          <p>{answer}</p>
        </Wrapper>
      )}
    </Wrapper>
  );
}

export default FaqItem;
