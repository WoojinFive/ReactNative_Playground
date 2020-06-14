import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategotyGridTile';

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    // <View style={styles.screen}>
    //   <Text>The Categories Screen!</Text>
    //   <Button
    //     title="Go to Meals!"
    //     onPress={() => {
    //       props.navigation.navigate({ routeName: 'CategoryMeals' });
    //       // props.navigation.replace('CategoryMeals'); // 새로운 stack
    //       // props.navigation.push('CategoryMeals');
    //     }}
    //   />
    // </View>
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
