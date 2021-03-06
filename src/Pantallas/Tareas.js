import React, { useRef, useState } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import Footer from "../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Text, Image } from 'react-native-elements';
import ListTareas from '../Componentes/Utils/ListTareas';
import Info from '../Componentes/Info';
import Pause from '../Componentes/Pause';
import Check from '../Componentes/Check';
import Colors from '../Componentes/Utils/Colors';

export default function Tareas() {
  const navigation = useNavigation();


  let hoy = [{ 'start': true, 'nombre': 'Reparar tractor','description':'Debes saber cual es el momento correcto para sembrar y rociar' },
  { 'start': false, 'nombre': 'Alimentar el ganado','description':'Debes saber cual es el momento correcto para sembrar y rociar' },
  { 'start': false, 'nombre': 'Reparar la cerca del sector 29','description':'Debes saber cual es el momento correcto para sembrar y rociar' },
  ]

  let generales = [{ 'start': false, 'nombre': 'Reparar tractor','description':'Debes saber cual es el momento correcto para sembrar y rociar' },
  { 'start': false, 'nombre': 'Alimentar el ganado','description':'Debes saber cual es el momento correcto para sembrar y rociar' },
  { 'start': false, 'nombre': 'Reparar la cerca del sector 29','description':'Debes saber cual es el momento correcto para sembrar y rociar' },
  ]

  let sinterminar = [{ 'start': false, 'nombre': 'Reparar tractor','description':'Debes saber cual es el momento correcto para sembrar y rociar' },
  { 'start': false, 'nombre': 'Alimentar el ganado','description':'Debes saber cual es el momento correcto para sembrar y rociar' },
  { 'start': false, 'nombre': 'Reparar la cerca del sector 29','description':'Debes saber cual es el momento correcto para sembrar y rociar' },
  ]

  const [data, setData] = useState(hoy)


  const [actual, setActual] = useState('hoy')
  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();


  const changeTarea = (actual) => {
    setActual(actual)
    if (actual == 'hoy') {
      setData(hoy)
    }
    if (actual == 'generales') {
      setData(generales)
    }
    if (actual == 'sinterminar') {
      setData(sinterminar)
    }


  }


  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>


      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.whiteTwo, marginBottom: 20, padding: 10, paddingTop: 50 }}>
        <Image

onPress={() =>
  navigation.navigate("crear-tarea")
}
          style={{ width: 30, height: 30 }}
          source={require('../../assets/plus.png')}
        >
        </Image>
        <Text style={{ alignSelf: 'center', color: Colors.primario, fontSize: 26 }}>Tareas</Text>
        <Image
          onPress={() =>
            navigation.navigate("login")
          }
          style={{ width: 30, height: 30 }}
          source={require('../../assets/logout.png')}
        >
        </Image>
      </View>

      <View
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderRadius: 15, backgroundColor: 'white', width: '90%' }}>

          <TouchableOpacity onPress={() => changeTarea("hoy")}
            style={(actual == 'hoy') ? styles.active_tareas : styles.inactive_tareas}
          >
            <Text
              style={{ color: (actual == 'hoy') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}

            >Hoy</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => changeTarea("generales")}
            style={(actual == 'generales') ? styles.active_tareas : styles.inactive_tareas}
          >
            <Text
              style={{ color: (actual == 'generales') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}

            >Generales</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => changeTarea("sinterminar")}
            style={(actual == 'sinterminar') ? styles.active_tareas : styles.inactive_tareas}
          >
            <Text
              style={{ color: (actual == 'sinterminar') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}

            >Sin Terminar</Text>
          </TouchableOpacity>

        </View>
      </View>


      <ListTareas
        data={data}
      >
      </ListTareas>

      <View
        style={{ justifyContent: 'center', alignItems: 'center' }}
      >

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '90%',
          borderRadius: 10,
          backgroundColor: Colors.whiteTwo,
          padding: 5, alignItems: 'center',
          alignContent: 'center',
          backgroundColor: Colors.secundario,
          marginBottom: 80,

        }}>
          <View
            style={{ flexDirection: 'row', alignItems: 'center' }}
          >
            <Info
              fillColor={Colors.grisMedio}
            />
            <Text style={{ alignItems: 'flex-start' }}>
              Reparar Tractor
            </Text>
          </View>


          <View
            style={{ flexDirection: 'row' }}
          >
            <Pause
              fillColor={Colors.grisOscuro}
            />
            <Check
              fillColor={Colors.grisOscuro}
            />
          </View>

        </View>
      </View>


      
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
  },
  textHeader: {
    color: Colors.whiteTwo,
    alignItems: "center",
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center"
  },
  ganaderia_top: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  active_tareas: {
    backgroundColor: Colors.primario,
    padding: 10,
    borderRadius: 20,
    width: '33%',
  },
  inactive_tareas: {
    padding: 10,
    width: '33%',

  }
})