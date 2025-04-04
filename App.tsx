import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TimerProvider } from './src/context/TimerContext';  // Ensure correct path
import HomeScreen from './src/screens/HomeScreen';  // Main screen
import HistoryScreen from './src/screens/HistoryScreen'; // History screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <TimerProvider> 
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TimerProvider>
  );
};

export default App;
