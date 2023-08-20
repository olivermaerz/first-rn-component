import {Text, View} from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text
        style={{
          padding: 20,
          color: '#ffffff',
          fontSize: 24,
        }}>
        Welcome to Little Lemon
      </Text>
    </View>
  );
};

export default WelcomeScreen;
