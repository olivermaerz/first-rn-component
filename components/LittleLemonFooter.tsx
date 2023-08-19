import {View, Text} from 'react-native';

const LittleLemonFooter = () => {
  return (
    <View style={{flex: 0.15, backgroundColor: '#F4CE14'}}>
      <Text
        style={{
          padding: 10,
          fontSize: 10,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Little Lemon, 2023
      </Text>
    </View>
  );
};

export default LittleLemonFooter;
