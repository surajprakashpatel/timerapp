import React, { createContext, useReducer, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimerContext = createContext();

const initialState = {
  timers: [],
  history: [],
};

const timerReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TIMER':
      return { ...state, timers: [...state.timers, action.payload] };
    case 'UPDATE_TIMER':
      return { 
        ...state, 
        timers: state.timers.map(timer =>
          timer.id === action.payload.id ? action.payload : timer
        ) 
      };
    case 'REMOVE_TIMER':
      return { ...state, timers: state.timers.filter(t => t.id !== action.payload) };
    case 'ADD_TO_HISTORY':
      return { ...state, history: [...state.history, action.payload] };
    case 'LOAD_STATE':
      return { ...action.payload };
    default:
      return state;
  }
};

const TimerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  useEffect(() => {
    const loadState = async () => {
      const storedState = await AsyncStorage.getItem('timerState');
      if (storedState) {
        dispatch({ type: 'LOAD_STATE', payload: JSON.parse(storedState) });
      }
    };
    loadState();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('timerState', JSON.stringify(state));
  }, [state]);

  return (
    <TimerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
