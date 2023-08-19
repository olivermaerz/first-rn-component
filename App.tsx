/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';

function App(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
      }}>
      <LittleLemonHeader />
    </View>
  );
}

export default App;
