import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

const icons = {
  c1: require('../assets/icons/c1.png'),
  c2: require('../assets/icons/c2.png'),
  c3: require('../assets/icons/c3.png'),
  c4: require('../assets/icons/c4.png'),
  c5: require('../assets/icons/c5.png'),
  c6: require('../assets/icons/c6.png'),
  c7: require('../assets/icons/c7.png'),
  c8: require('../assets/icons/c8.png'),
  c9: require('../assets/icons/c9.png'),
  c10: require('../assets/icons/c10.png'),
};

const CategotyGridTile = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <View style={styles.imageContainer}>
            <Image
              source={icons[props.id]}
              style={styles.image}
              resizeMode="contain"
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title} numberOfLines={2}>
              {props.title}
            </Text>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible', // android에서 ripple effect에 round가 적용 안되서 hidden 속성 줘야함
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  image: {
    width: '50%',
    height: '100%',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right',
  },
});

export default CategotyGridTile;
