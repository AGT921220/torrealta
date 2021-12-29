import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import Footer from "../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import HeaderApp from "../Componentes/HeaderApp";
import NavbarTareas from "../Componentes/NavbarTareas";
import { Text, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import ListTareas from '../Componentes/Utils/ListTareas';
import CurrentTask from '../Componentes/Utils/CurrentTask';


export default function SinTerminar() {
  const navigation = useNavigation();

  let data = [{'show':false, 'nombre': 'Tarea 1' },
  {'show':false, 'nombre': 'Tarea 2' },
  {'show':false, 'nombre': 'Tarea 3' },
  {'show':false, 'nombre': 'Tarea 4' },
  {'show':false, 'nombre': 'Tarea 5' },
  {'show':false, 'nombre': 'Tarea 6' },
  {'show':false, 'nombre': 'Tarea 7' },
  {'show':false, 'nombre': 'Tarea 8' },
  {'show':false, 'nombre': 'Tarea 9' },
  {'show':false, 'nombre': 'Tarea 10' },
  {'show':false, 'nombre': 'Tarea 11' },
  {'show':false, 'nombre': 'Tarea 12' },
  {'show':false, 'nombre': 'Tarea 13' },
  {'show':false, 'nombre': 'Tarea 14' },
  {'show':false, 'nombre': 'Tarea 15' },
  {'show':false, 'nombre': 'Tarea 16' },
  {'show':false, 'nombre': 'Tarea 17' },
  {'show':false, 'nombre': 'Tarea 18' },
  {'show':false, 'nombre': 'Tarea 19' },
  {'show':false, 'nombre': 'Tarea 20' },
  {'show':false, 'nombre': 'Tarea 21' },
  {'show':false, 'nombre': 'Tarea 22' },
  {'show':false, 'nombre': 'Tarea 23' },
  {'show':false, 'nombre': 'Tarea 24' },
  {'show':false, 'nombre': 'Tarea 25' },
  {'show':false, 'nombre': 'Tarea 26' },
  {'show':false, 'nombre': 'Tarea 27' },
  {'show':false, 'nombre': 'Tarea 28' },
  {'show':false, 'nombre': 'Tarea 29' },
  {'show':false, 'nombre': 'Tarea 30' },
]


  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      <HeaderApp
        title={'Sin Terminar'}
      ></HeaderApp>

      <NavbarTareas></NavbarTareas>

      <ListTareas
        data={data}
      >
      </ListTareas>



      <CurrentTask>
      </CurrentTask>


      <Toast ref={toastRef} position="center" opacity={0.8}></Toast>
      <Footer ></Footer>

    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#000000",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnHeader: {
    marginTop: "auto",
  },
  imgHeader: {
    width: "15%",
    flex: 1,
    backgroundColor: "gray"
  },
  textHeader: {
    color: "#FFFFFF",
    alignItems: "center",
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center"
  },
  ganaderia_top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})