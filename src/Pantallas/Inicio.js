import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions,TouchableOpacity } from 'react-native'
import Footer from "../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import HeaderApp from "../Componentes/HeaderApp";
import Navbar from "../Componentes/Navbar";
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';


export default function Inicio() {
  const navigation = useNavigation();

  let data = [{ 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 }]

  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      <HeaderApp
        title={'Ganadería'}
      ></HeaderApp>

<View style={{flexDirection:'row'}}>
<Navbar></Navbar>

<TouchableOpacity
    onPress={() => 
      navigation.navigate("filtros-ganaderia")
    }
    >
    <Icon 
    
    style={{resizeMode: "contain"}}
                  name="dip-switch"
                  size={50}
                  type="material-community"
                />
    </TouchableOpacity>
</View>

      <View style={styles.ganaderia_top}>
        <Text style={{ width: '10%' }}>
          No
        </Text>
        <Text style={{ width: '20%' }}>
          Nombre
        </Text>
        <Text style={{ width: '20%' }}>
          Guarismo
        </Text>
        <Text style={{ width: '15%' }}>
          Sexo
        </Text>
        <Text style={{ width: '15%' }}>
          Nota
        </Text>
        <Text style={{ width: '10%' }}>
          Lidia
        </Text>
      </View>


      {data.map((card, i) => {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ width: '10%' }}>
              {card.no}
            </Text>
            <Text style={{ width: '20%' }}>
              {card.nombre}
            </Text>
            <Text style={{ width: '20%' }}>
              {card.guarismo}
            </Text>
            <Text style={{ width: '15%' }}>
              {card.sexo}
            </Text>
            <Text style={{ width: '15%' }}>
              {card.nota}
            </Text>
            <Text style={{ width: '10%' }}
            onPress={() => navigation.navigate("detalle-ganaderia")}
            >
            <Icon 
              style={{resizeMode: "contain"}}
                  name="plus"
                  size={20}
                  type="material-community"
                />            </Text>

          </View>

        );
      }
      )}



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