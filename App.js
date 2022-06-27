import React from 'react';
import {SafeAreaView,StyleSheet,Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';

const App = ()=>{
  return (
    <SafeAreaView style={StyleSheet.root}>
     
      {/* <SignUpScreen/> */}
      <SignInScreen/>
    </SafeAreaView>
  );
};

const Styles=StyleSheet.create({
  root: {
    flex:1
 
  }
});;

export default App;
