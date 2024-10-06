import React, { useState } from 'react';

const Box = ({ BoxNo, onRemove }) => {
  const [clicked, setClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClicked(!clicked);
    setClickCount(prevCount => prevCount + 1);

    if (clickCount === 1) {
      onRemove(BoxNo);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: clicked ? '#333' : '#d9d9d9',
        color: clicked ? '#fff' : '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #ccc',
        cursor: 'pointer',
        margin: '10px',
        transition: 'background-color 0.3s, color 0.3s'
      }}
    >
      {BoxNo}
    </div>
  );
};

export default Box;
