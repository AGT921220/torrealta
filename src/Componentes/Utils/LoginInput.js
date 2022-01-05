import React from "react";
import { TextInput,View } from 'react-native';
import {StyleSheet} from 'react-native'
export default function LoginInput(props) {


  const {text} = props

  return (
  <View style={styles.login_input_container}>
    
  <TextInput
  placeholder={text} 
  containerStyle={styles.login_input}
  placeholderTextColor="#ffffff"
  inputStyle={{ color: '#ffffff' }}
  color={'white'}
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
    backgroundColor:'rgba(255,255,255,0.35)'
  },
  login_input:{
     color:'white',
    // width:'80%',
    // marginTop:20,
    // margin:'auto',
    // borderRadius:10,
    // backgroundColor:'red',
    // width:700
  }
})