const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  item: {
    fontSize: 17,
    color: 'rgba(0,0,0,0.5)',   
    paddingVertical: 2,
  },
  selectedItem:{
    color: '#000000'
  },
  selectedCategory: {
    // textDecorationLine: 'underline',
    color: '#000000',
  },
  itemContainer: {
    marginVertical: 14,
    marginRight: 17,
  },
  selectedItemContainer: {
    borderBottomColor: '#4681A3',
    borderBottomWidth: 2,
  },
});

export default styles;
