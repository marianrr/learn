import { useState, useRef, useEffect } from 'react';

function DinamoComponent() {
  const [dinamo, setDinamo] = useState(10); // Valoare inițială
  const intervalRef = useRef(null);

  useEffect(() => {
    // Cleanup la demontare
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const startCountdown = () => {
    // Oprim orice interval existent
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDinamo(prev => {
        if (prev <= 0) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div>
      <button onClick={startCountdown}>Start Countdown</button>
      <p>{dinamo}</p>
    </div>
  );
}

export default DinamoComponent;