import React, { useState, useEffect } from 'react';
import "./Timer.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="divTimer">
      <h1 className='Titulo'>Timer</h1>
      <p className='Segundos'>-{seconds}-</p>
      <p className='info'>SEGUNDOS PASSADOS.</p>
    </div>
  );
};

export default Timer;
