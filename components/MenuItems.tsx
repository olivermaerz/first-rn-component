import { View, Text, ScrollView, StyleSheet } from "react-native";

const green: string = '#495E57';
const yellow: string = '#F4CE14';
const menuItemsToDisplay: string[] = [
  ' Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    padding: 40,
    backgroundColor: green,
  },
  text: {
    fontSize: 20,
    paddingBottom: 40,
    color: yellow,
  },
});

const MenuItems = () => {
  return (
    <View
      style={menuStyles.container}>
      <ScrollView
        indicatorStyle={'white'}
        horizontal={false}
        style={menuStyles.innerContainer}>
        <Text
          style={menuStyles.text}>
          {menuItemsToDisplay[0]}
        </Text>
      </ScrollView>
    </View>

  );
};

export default MenuItems;
