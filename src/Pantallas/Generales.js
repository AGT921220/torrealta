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


export default function Generales() {
  const navigation = useNavigation();

  let data = [{'show':false, 'nombre': 'Montar la plancha de la parcela 14' },
  {'show':false, 'nombre': 'Reparar la cerca del sector 29' },
  {'show':false, 'nombre': 'Montar la plancha de la parcela 14' },
  {'show':false, 'nombre': 'Reparar la cerca del sector 29' }]


  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      <HeaderApp
        title={'Generales'}
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