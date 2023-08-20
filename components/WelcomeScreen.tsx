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
      <Text
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 10,
          color: '#ffffff',
          fontSize: 12,
        }}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
};

export default WelcomeScreen;
