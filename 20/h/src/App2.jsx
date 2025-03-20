import { useState } from 'react';

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

function App() {
  const [initialCount, setInitialCount] = useState(0);

  return (
    <div>
      {/* Changing initialCount resets Counter's state */}
      <Counter key={initialCount} initialCount={initialCount} />
      <button onClick={() => setInitialCount(5)}>Reset to 5</button>
    </div>
  );
}

export default App