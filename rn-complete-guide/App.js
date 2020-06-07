import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';

import FlexboxTutorial from './FlexboxTutorial';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeGoalHandler = (goalKey) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== goalKey);
    });
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        // keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.key}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      ></FlatList>
    </View>
    // <FlexboxTutorial />
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
