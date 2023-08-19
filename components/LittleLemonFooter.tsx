import {View, Text} from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{flex: 0.15, backgroundColor: '#F4CE14'}}>
      <Text
        style={{
          marginTop: 10,
          padding: 10,
          fontSize: 10,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2023
      </Text>
    </View>
  );
}
