import React from 'react';
import { View, Text, Button, StyleSheet, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const selectedCategoty = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Text>{selectedCategoty.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          // props.navigation.goBack();
          props.navigation.pop(); // 상위로 가기
        }}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategoty = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategoty.title,
    headerStyle: {
      backgroundColor:
        Platform.OS === 'android' ? Colors.primaryColor : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
