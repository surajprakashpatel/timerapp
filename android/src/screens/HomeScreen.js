import React, { useContext, useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { TimerContext } from '../context/TimerContext';
import TimerItem from '../components/TimerItem';

const HomeScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(TimerContext);

  return (
    <View>
      <Button title="Go to History" onPress={() => navigation.navigate('History')} />
      <FlatList
        data={state.timers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TimerItem timer={item} />}
      />
    </View>
  );
};

export default HomeScreen;
