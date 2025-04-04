import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const TimerItem = ({ timer }) => {
  const [timeLeft, setTimeLeft] = useState(timer.duration);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [running, timeLeft]);

  return (
    <View>
      <Text>{timer.name} - {timeLeft}s</Text>
      <Button title={running ? "Pause" : "Start"} onPress={() => setRunning(!running)} />
      <Button title="Reset" onPress={() => setTimeLeft(timer.duration)} />
    </View>
  );
};

export default TimerItem;
