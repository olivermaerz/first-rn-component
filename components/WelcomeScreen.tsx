import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const welcomeStyles = StyleSheet.create({
  container: {
    flex: 0.3,
  },
  title: {
    padding: 20,
    color: '#ffffff',
    fontSize: 24,
  },
  text: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    color: '#ffffff',
    fontSize: 12,
  },
});

const WelcomeScreen = () => {
  return (
    <View
      style={welcomeStyles.container}>
      <Text
        style={welcomeStyles.title}>
        Welcome to Little Lemon
      </Text>
      <Text
        style={welcomeStyles.text}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear more about your experience with us!
      </Text>
    </View>
  );
};

export default WelcomeScreen;
