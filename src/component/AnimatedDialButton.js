
import React from 'react';
import {
  Animated,
  Dimensions
} from 'react-native';
import { dialButtonAnimation } from '../hook';
const windowWidth = Dimensions.get('window').width;

const AnimatedDialButton = (props) => {
  const { doAnimation } = props
  const animation = dialButtonAnimation({ doAnimation, duration: 300 });
  return (
    <Animated.View style={{
      width: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [50, windowWidth - 40],
      }),
      height: 50,
      borderRadius: 25,
      backgroundColor: "#48fb00",
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {props.children}
    </Animated.View>
  )
}

export default AnimatedDialButton;