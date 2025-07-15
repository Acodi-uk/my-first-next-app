'use client';

import { useState } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    background: '#f0f0f0'
  };

  const buttonStyle = {
    padding: '12px 24px',
    fontSize: '18px',
    cursor: 'pointer',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  };

  return (
    <main style={containerStyle}>
      <h1>Welcome to Your First Next.js App!</h1>
      <p>This is a live, interactive application hosted on Vercel.</p>
      <div style={{ margin: '25px' }}>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{count}</p>
        <button onClick={() => setCount(count + 1)} style={buttonStyle}>
          Click Me
        </button>
      </div>
    </main>
  );
}