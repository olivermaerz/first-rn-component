/**
 * App for Coursera React Native course
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});

const App = () => {
  return (
    <View style={appStyles.container}>
      <LittleLemonHeader />
      <WelcomeScreen />
      <MenuItems />
      <LittleLemonFooter />
    </View>
  );
};

export default App;
