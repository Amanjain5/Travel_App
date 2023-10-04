import React from 'react';
import styles from './styles';

import {FlatList, Text, TouchableOpacity} from 'react-native';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      horizontal
      data={categories}
      style={{marginRight: -32}}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => {
        const selected = selectedCategory === item;

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.itemContainer,
              selected ? styles.selectedItemContainer : {},
            ]}>
            <Text
              style={[
                styles.item,
                selectedCategory === item ? styles.selectedCategory : {},
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);
