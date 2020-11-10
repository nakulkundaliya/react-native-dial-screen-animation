import { Animated } from 'react-native';
import { useState, useEffect } from 'react';

export const dialButtonAnimation = ({ doAnimation, duration }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  
  useEffect(() => {
    Animated.timing(animation, {
      toValue: doAnimation ? 1 : 0,
      duration,
      // useNativeDriver: true  
    }).start();
  }, [doAnimation]);

  return animation;
}

export const dialPadAnimation = ({ doAnimation, duration }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [visibility, setVisibility] = useState(new Animated.Value(0));
  
  useEffect(() => {
    Animated.timing(animation, {
      toValue: doAnimation ? 1 : 0,
      duration,
      // useNativeDriver: true  
    }).start();
    Animated.timing(visibility, {
      toValue: doAnimation ? 1 : 0,
      duration,
      // useNativeDriver: true  
    }).start();
  }, [doAnimation]);

  return {animation, visibility};
}