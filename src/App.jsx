import { useState } from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  const [counts, setCounts] = useState([1, 4, 3]);

  const updateCount = (index, delta) => {
    const newCounts = [...counts];
    newCounts[index] += delta;
    setCounts(newCounts);
  };

  // Calculate total using reduce
  const totalCount = counts.reduce((sum, current) => sum + current, 0);

  return (
    <div className="App">
      <h1>Total Count: {totalCount}</h1>
      {counts.map((value, index) => (
        <Counter
          key={index}
          label={`Counter ${index + 1}`}
          value={value}
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
        />
      ))}
    </div>
  );
}

export default App;