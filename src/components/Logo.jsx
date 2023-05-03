import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <span role="img" aria-label="computer icon">
        💻
      </span>
      <h1
        style={{
          margin: 0,
          fontSize: '24px',
        }}
      ></h1>
    </div>
  );
};
