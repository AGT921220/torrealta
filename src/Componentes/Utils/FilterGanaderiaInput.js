import React from "react";
import { TextInput,View } from 'react-native';
import {StyleSheet} from 'react-native'
import Colors from "./Colors";
export default function FilterInputGanaderia(props) {

  const {text} = props

  return (  
    <View
    style={{justifyContent:'center',alignItems:'center'}}
    >

  <TextInput
  placeholder={text} 
  containerStyle={styles.login_input}
  placeholderTextColor={Colors.grisMedio}
  inputStyle={{ color: Colors.grisMedio }}
  color={Colors.grisMedio}
  backgroundColor={Colors.whiteTwo}
  padding={10}
  borderRadius={10}
  width={'90%'}
  margin={'auto'}
  justifyContent={'center'}
  marginTop={10}
  fontFamily={'MontserratSemiBold'}/>
</View>  

  );
}

const styles = StyleSheet.create({
  filter_input_container:{
    width:'90%',
    marginBottom:20,
     backgroundColor:Colors.whiteTwo,
    justifyContent:'center',
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:10,
  },
  login_input:{
     color:Colors.grisMedio,
     width:'90%',
     backgroundColor:Colors.whiteTwo,
     borderRadius:10,
     marginTop:20

  }
})