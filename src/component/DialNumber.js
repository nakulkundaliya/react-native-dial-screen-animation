
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const DialNumber = (props) => {
  const { number, alphabatic } = props
  return (
    <TouchableOpacity style={styles.dialNumber} onPress={() => {}}>
      <Text style={styles.numberText}>{number}</Text>
      <Text style={styles.alphabaticText}>{alphabatic}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  dialNumber: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },  
  numberText: {
    fontSize: 20
  }
});
export default DialNumber;