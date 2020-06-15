import React from 'react';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    // <View style={styles.screen}>
    //   <Text>The Category Meal Screen!</Text>
    //   <Text>{selectedCategoty.title}</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() => {
    //       props.navigation.navigate({ routeName: 'MealDetail' });
    //     }}
    //   />
    //   <Button
    //     title="Go Back"
    //     onPress={() => {
    //       // props.navigation.goBack();
    //       props.navigation.pop(); // 상위로 가기
    //     }}
    //   />
    // </View>
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategoty = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategoty.title,
  };
};

export default CategoryMealsScreen;
