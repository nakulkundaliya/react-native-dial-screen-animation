/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import DialFab from './component/DialFab';
import DialKeyPad from './component/DialKeyPad';
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const [doAnimation, setDoAnimation] = useState(false);

  const dial = () => {
    if(!doAnimation){
      setDoAnimation(!doAnimation)
    }
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <DialFab doAnimation={doAnimation} onPress={dial} />
        <DialKeyPad doAnimation={doAnimation} onClose={() => { 
          setDoAnimation(!doAnimation)
        }}/>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalView: {
    height: windowHeight - 125, // Button Height + Button bottom space 
    backgroundColor: '#31c110'
  },
  closeButton: {
    height: 25,
    width: 25,
    borderRadius: 15,
    backgroundColor: '#198908',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    top: 30
  },
  popup: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    minHeight: 80,
    alignItems: "center",
    justifyContent: "center",
    height: '85%',
    position: 'absolute',
    width: '100%',
    backgroundColor: '#fff'
  },
  buttonText: {
    color: 'white'
  },
  MainContainer: {
    flex: 1,
    alignItems : 'center',
  },
  animatedBox: {
     width : 190,
     height: 190,
     backgroundColor : ('#2E7D32')
  },
});

export default App;
