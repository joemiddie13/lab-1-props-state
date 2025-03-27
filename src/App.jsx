import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [counts, setCounts] = useState([1, 4, 3]);

  const updateCount = (index, delta) => {
    const newCounts = [...counts];
    const newValue = newCounts[index] + delta;
    
    if (newValue >= 0 && newValue <= 10) {
      newCounts[index] = newValue;
      setCounts(newCounts);
    }
  };

  const resetAll = () => {
    setCounts(counts.map(() => 0));
  };

  const addCounter = () => {
    setCounts([...counts, 0]);
  };

  const removeCounter = (index) => {
    const newCounts = [...counts];
    newCounts.splice(index, 1);
    setCounts(newCounts);
  };

  const totalCount = counts.reduce((sum, current) => sum + current, 0);

  return (
    <div className="App">
      <h1>Total Count: {totalCount}</h1>
      <div className="controls">
        <button onClick={resetAll}>Reset All</button>
        <button onClick={addCounter}>➕ Add Counter</button>
      </div>
      {counts.map((value, index) => (
        <Counter
          key={index}
          label={`Counter ${index + 1}`}
          value={value}
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
          remove={() => removeCounter(index)}
        />
      ))}
    </div>
  );
}

export default App;