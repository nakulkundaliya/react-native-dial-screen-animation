
import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AnimatedDialButton from './AnimatedDialButton'

const DialFab = (props) => {
  const { doAnimation, onPress } = props
  return (
    <View style={styles.bottom}>
      <AnimatedDialButton doAnimation={doAnimation}>
        <TouchableOpacity onPress={() => onPress()} style={{width: '100%', alignItems: 'center'}}>
          {doAnimation ? (
            <Ionicons name = "call" size = { 25 } color = "#fff" /> 
          ): (
            <Entypo name="dial-pad" size={25} color="#fff" /> 
          )}

        </TouchableOpacity>
      </AnimatedDialButton>
    </View>
  )
}

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    margin: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 0,
    right: 0,
    zIndex: 9999
  },
});
export default DialFab;