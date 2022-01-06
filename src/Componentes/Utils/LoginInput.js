import React from "react";
import { TextInput,View } from 'react-native';
import {StyleSheet} from 'react-native'
import Colors from "./Colors";
export default function LoginInput(props) {


  const {text} = props

  return (
  <View style={styles.login_input_container}>
    
  <TextInput
  placeholder={text} 
  containerStyle={styles.login_input}
  placeholderTextColor={Colors.whiteTwo}
  inputStyle={{ color: Colors.whiteTwo,fontFamily:'MontserratSemiBold' }}
  color={'white'}
  fontFamily={'MontserratSemiBold'}
/>
</View>

  );
}

const styles = StyleSheet.create({
  login_input_container:{
    backgroundColor:'red',
    width:'80%',
    justifyContent:'center',
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    padding:10,
    margin:10,
    borderRadius:10,
    backgroundColor:'rgba(216,216,216,0.35)',
//    backgroundColor:Colors.fondoGris
  },
  login_input:{
     color:Colors.whiteTwo,
    fontFamily:'MontserratSemiBold'
    // width:'80%',
    // marginTop:20,
    // margin:'auto',
    // borderRadius:10,
    // backgroundColor:'red',
    // width:700
  }
})