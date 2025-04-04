import React, { useContext } from 'react';
import { View, Text, FlatList } from 'react-native';
import { TimerContext } from '../context/TimerContext';

const HistoryScreen = () => {
  const { state } = useContext(TimerContext);

  return (
    <View>
      <Text>Completed Timers</Text>
      <FlatList
        data={state.history}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.name} - Completed at {item.completionTime}</Text>
        )}
      />
    </View>
  );
};

export default HistoryScreen;
