import React from 'react';git 
import { View } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View 
      style={{
        height: 10,
        width: '100%',
        backgroundColor: '#ddd',
        borderRadius: 5,
        overflow: 'hidden',
        marginVertical: 5,
      }}
    > 
      <View 
        style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: progress > 50 ? 'green' : 'red',
        }} 
      />
    </View>
  );
};

export default ProgressBar;
