import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import Footer from "../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import HeaderApp from "../Componentes/HeaderApp";
import Navbar from "../Componentes/Navbar";
import { Image, Text } from 'react-native-elements';
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
  let colorTable = '#f4f4f4'
  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      {/* <HeaderApp
        title={'Ganadería'}
      ></HeaderApp> */}

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffffff', marginBottom: 0, padding: 10, paddingTop: 50 }}>
        <Image
          onPress={() =>
            navigation.navigate("filtros-ganaderia")
          }
          style={{ width: 35, height: 35 }}
          source={require('../../assets/filter.png')}
        >
        </Image>

        <Text style={{ alignSelf: 'center', color: 'rgb(169,11,47)', fontSize: 26 }}>Torrealta (7)</Text>
        <Image
          style={{ width: 35, height: 35 }}
          source={require('../../assets/logoRojo.png')}
        >
        </Image>
      </View>

{/* 
      <View style={{ flexDirection: 'row' }}>
        <Navbar></Navbar>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("filtros-ganaderia")
          }
        >
          <Icon

            style={{ resizeMode: "contain" }}
            name="dip-switch"
            size={50}
            type="material-community"
          />
        </TouchableOpacity>
      </View> */}

      <View style={styles.ganaderia_top}>
        <Text style={{ width: '10%',color:'#ffffff' }}>
          No
        </Text>
        <Text style={{ width: '20%',color:'#ffffff' }}>
          Nombre
        </Text>
        <Text style={{ width: '20%',color:'#ffffff' }}>
          Guarismo
        </Text>
        <Text style={{ width: '15%',color:'#ffffff' }}>
          Sexo
        </Text>
        <Text style={{ width: '15%',color:'#ffffff' }}>
          Nota
        </Text>
        <Text style={{ width: '10%',color:'#ffffff' }}>
          Lidia
        </Text>
      </View>


      {data.map((card, i) => {
        if(colorTable=='#f4f4f4'){
          colorTable='#ffffff'
        }
        else{
          colorTable='#f4f4f4'
        }
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between',backgroundColor:colorTable,padding:10 }}>
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
                style={{ resizeMode: "contain" }}
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
    backgroundColor:'#f4f4f4'
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
    justifyContent: 'space-between',
    backgroundColor:'#a91b2f',
    padding:10,
    
  }
})