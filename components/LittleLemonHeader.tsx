import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.2,
    backgroundColor: '#F4CE14',
  },
  text: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});

const LittleLemonHeader = () => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>Little Lemon</Text>
    </View>
  );
};

export default LittleLemonHeader;
