import React, { useEffect, useState } from 'react';
import { View, Button } from 'react-native';

const TimerControls = ({ timer, onUpdate }) => {
  const [timeLeft, setTimeLeft] = useState(timer.duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      onUpdate({ ...timer, status: 'Completed' });
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <Button 
        title={isRunning ? 'Pause' : 'Start'} 
        onPress={() => setIsRunning(!isRunning)} 
      />
      <Button 
        title="Reset" 
        onPress={() => {
          setIsRunning(false);
          setTimeLeft(timer.duration);
        }} 
      />
    </View>
  );
};

export default TimerControls;
