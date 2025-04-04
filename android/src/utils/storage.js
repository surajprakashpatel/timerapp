import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'timers_data';

export const saveTimers = async (timers) => {
  try {
    const jsonValue = JSON.stringify(timers);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving timers:', error);
  }
};

export const loadTimers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Error loading timers:', error);
    return [];
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log('Storage cleared');
  } catch (error) {
    console.error('Error clearing storage:', error);
  }
};
