
import React from 'react';
import Container from './components/Container';
import './index.css';
import bgPattern from './assets/image/background-pattern-desktop.svg';

function App() {
  return (
    <div
      style={{
        backgroundColor: 'hsl(275, 100%, 97%)',
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'contain',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container />
    </div>
  );
}

export default App;
