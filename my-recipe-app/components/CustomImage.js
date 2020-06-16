import React from 'react';
import { Image } from 'react-native';

const CustomImage = (props) => {
  console.log(props.source);
  return (
    <Image
      resizeMode="contain"
      style={props.style}
      source={require(props.source)}
      fadeDuration={300} // default value is 300
    />
  );
};

export default CustomImage;
