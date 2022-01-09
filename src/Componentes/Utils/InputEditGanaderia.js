import React from "react";
import { TextInput, View } from 'react-native';
import { StyleSheet } from 'react-native'
import Colors from "./Colors";
export default function InputEditGanaderia(props) {

  const { text, width,paddingBottom } = props

  return (
    <TextInput
      placeholder={text}
      containerStyle={styles.login_input}
      placeholderTextColor={Colors.grisOscuro}
      inputStyle={{ color: Colors.grisOscuro }}
      color={Colors.grisOscuro}
      backgroundColor={Colors.whiteTwo}
      padding={10}
      borderRadius={10}
      width={(width) ? width : '90%'}
      paddingBottom={(paddingBottom) ? paddingBottom:10}
      margin={'auto'}
      justifyContent={'center'}
      marginTop={10}
      fontFamily={'MontserratSemiBold'} />

  );
}

const styles = StyleSheet.create({
  
})