import { useState } from 'react'
import './App.css'
import Box from './components/Box';

const App = () => {
  const [boxes, setBoxes] = useState([1, 2, 3]);

  const addBox = () => {
    setBoxes([...boxes, boxes.length + 1]);
  };

  const removeBox = (boxNo) => {
    setBoxes(boxes.filter(box => box !== boxNo));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1> Box </h1>
      <button onClick={addBox} style={{ marginBottom: '20px' }}>
        Add new box
      </button>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {boxes.map(box => (
          <Box key={box} BoxNo={box} onRemove={removeBox} />
        ))}
      </div>
    </div>
  );
};

export default App;
