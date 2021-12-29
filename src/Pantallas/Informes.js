import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions,ScrollView } from 'react-native'
import Footer from "../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import HeaderApp from "../Componentes/HeaderApp";
import Navbar from "../Componentes/Navbar";
import { Text } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';


export default function Informes() {
  const navigation = useNavigation();

  let data = [{ 'nombre': 'Lotes y papa'},
  { 'nombre': 'Reducido'},
  { 'nombre': 'Vacas/Sementales'},
  { 'nombre': 'Libreta'}]


  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      <HeaderApp
        title={'Informes'}
      ></HeaderApp>

      <Navbar></Navbar>

      <View style={styles.ganaderia_top}>
        <Text style={{ width: '70%' }}>
          Informes Predefinidos
        </Text>
        <Text style={{ width: '30%' }}>
          Acciones
        </Text>
      </View>


      {data.map((card, i) => {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={{ width: '70%' }}>
              {card.nombre}
            </Text>
            <View style={{ width: '30%',flexDirection:'row' }}>
            <Icon 
              style={{resizeMode: "contain"}}
                  name="file-excel"
                  type="material-community"
                />
            <Icon 
              style={{resizeMode: "contain"}}
                  name="file-pdf"
                  type="material-community"
                />

            </View>

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