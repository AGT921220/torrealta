import React from "react";
import { TextInput,View } from 'react-native';
import {StyleSheet} from 'react-native'
export default function FilterInputGanaderia(props) {


  const {text} = props
console.log(text)
  return (  
    <View
    style={{justifyContent:'center',alignItems:'center'}}
    >

  <TextInput
  placeholder={text} 
  containerStyle={styles.login_input}
  placeholderTextColor="rgb(33,32,37)"
  inputStyle={{ color: 'rgb(33,32,37)' }}
  color={'rgb(33,32,37)'}
  backgroundColor={'#ffffff'}
  padding={10}
  borderRadius={10}
  width={'90%'}
  margin={'auto'}
  justifyContent={'center'}
  marginTop={10}

/>
</View>  

  );
}

const styles = StyleSheet.create({
  filter_input_container:{
    width:'90%',
    marginBottom:20,
     backgroundColor:'#ffffff',
    justifyContent:'center',
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:10,
  },
  login_input:{
     color:'rgb(33,32,37)',
     width:'90%',
     backgroundColor:'#ffffff',
     borderRadius:10,
     marginTop:20

  }
})