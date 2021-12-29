import React from "react";
import { Input } from 'react-native-elements';

import { Text,View } from 'react-native';
import {StyleSheet} from 'react-native'
export default function LoginInput(props) {


  const {text} = props

  console.log(text)
  return (
  <Input placeholder={text} containerStyle={styles.login_input}></Input>

  );
}

const styles = StyleSheet.create({
  login_input:{
    color:'red',
    width:'80%',
    marginTop:20,
    backgroundColor: 'rgb(33, 32, 37)'
  }
})