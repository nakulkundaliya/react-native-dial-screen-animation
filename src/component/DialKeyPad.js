
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DialNumber from './DialNumber'
const windowHeight = Dimensions.get('window').height;
import { dialPadAnimation } from '../hook';
import keypadNumber from '../utils'

const DialKeyPad = (props) => {
  const { doAnimation, onClose } = props
  const {animation, visibility} = dialPadAnimation({ doAnimation, duration: 300 });

  const slideUp = {
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 2],
          outputRange: [0, -200],
          extrapolate: "clamp",
        }),
      },
      
    ],
  };
  const containerStyle = {
    opacity: visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };
  return (
    <Animated.View style={[styles.popup, slideUp, containerStyle]}>
      <View style={styles.headerView}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" color="#fff" size={20}/>
        </TouchableOpacity>
      </View>
      <View style={styles.keyboardView}>
        {keypadNumber.map(item => {
          return <DialNumber number={item.number} alphabatic={item.alphabatic}/>
        })}
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  popup: {
    minHeight: 80,
    alignItems: "center",
    justifyContent: "center",
    position: 'absolute',
    width: '100%',
    backgroundColor: 'transparent',
    top: 100,
    height: windowHeight - 200
  },
  closeButton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: '#22bc22',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 20
  },  
  headerView: {
    height: '50%',
    width: '100%',
    backgroundColor: '#48fb00'
  },
  keyboardView: {
    height: '50%',
    width: '100%', 
    backgroundColor: 'transparent',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent:'center'
  }
});
export default DialKeyPad;