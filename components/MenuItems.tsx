import {View, Text, StyleSheet, FlatList} from 'react-native';

const green: string = '#495E57';
const yellow: string = '#F4CE14';
const menuItemsToDisplay: {name: string; id: string}[] = [
  {name: 'Hummus', id: '1A'},
  {name: 'Moutabal', id: '2B'},
  {name: 'Falafel', id: '3C'},
  {name: 'Marinated Olives', id: '4D'},
  {name: 'Kofta', id: '5E'},
  {name: 'Eggplant Salad', id: '6F'},
  {name: 'Lentil Burger', id: '7G'},
  {name: 'Smoked Salmon', id: '8H'},
  {name: 'Kofta Burger', id: '9I'},
  {name: 'Turkish Kebab', id: '10J'},
  {name: 'Fries', id: '11K'},
  {name: 'Buttered Rice', id: '12L'},
  {name: 'Bread Sticks', id: '13M'},
  {name: 'Pita Pocket', id: '14N'},
  {name: 'Lentil Soup', id: '15O'},
  {name: 'Greek Salad', id: '16Q'},
  {name: 'Rice Pilaf', id: '17R'},
  {name: 'Baklava', id: '18S'},
  {name: 'Tartufo', id: '19T'},
  {name: 'Tartufo', id: '20U'},
  {name: 'Tiramisu', id: '21V'},
  {name: 'Panna Cotta', id: '22W'},
];

const menuStyles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    paddingLeft: 10,
    backgroundColor: green,
  },
  text: {
    fontSize: 20,
    paddingBottom: 5,
    color: yellow,
  },
});

const Item = ({name}: {name: string}) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.text}>{name}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({item}: {item: {name: string; id: string}}) => (
    <Item name={item.name} />
  );
  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.text}>View Menu: </Text>
      <FlatList
        data={menuItemsToDisplay}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default MenuItems;
