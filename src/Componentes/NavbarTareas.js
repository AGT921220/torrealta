import React, { useRef } from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Icon, Input, Text } from 'react-native-elements';

export default function NavbarTareas() {

  const navigation = useNavigation();
  const toastRef = useRef();




  return (

    <View style={{flexDirection:'row', justifyContent:'space-between'}}>

    <TouchableOpacity  onPress={() => navigation.navigate("tareas")}>
    <Text>Hoy</Text>
    </TouchableOpacity>            

    <TouchableOpacity  onPress={() => navigation.navigate("generales")}>
    <Text>Generales</Text>
    </TouchableOpacity>            


    <TouchableOpacity  onPress={() => navigation.navigate("sinterminar")}>
    <Text>Sin Terminar</Text>
    </TouchableOpacity>            



    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nabvar: {
    backgroundColor: "#ffffff",
    height: 50,
    flexDirection: "row",
    marginTop:Platform.OS ==='ios' ? 20: 0,
    flexDirection:'row'
  }})
