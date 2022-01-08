import React, { useRef,useState } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import Footer from "../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import HeaderApp from "../Componentes/HeaderApp";
import Navbar from "../Componentes/Navbar";
import { Image, Text } from 'react-native-elements';
import LogoPrincipal from '../Componentes/Logos/LogoPrincipal';

export default function Inicio() {
  const navigation = useNavigation();



  let datas = [{ 'no': '12', 'nombre': 'Charro', 'guarismo': 12, 'sexo': 'M', 'codigo': 'UCI' },
  { 'no': '13', 'nombre': 'Raposo', 'guarismo': 3, 'sexo': 'M', 'codigo': 'UCI' },
  { 'no': '14', 'nombre': 'Belicoso', 'guarismo': 43, 'sexo': 'F', 'codigo': 'UCC' },
  { 'no': '15', 'nombre': 'Guerrero', 'guarismo': 43, 'sexo': 'F', 'codigo': 'UEH' },
  { 'no': '16', 'nombre': 'Guerrero', 'guarismo': 21, 'sexo': 'F', 'codigo': 'UCC' },
  { 'no': '17', 'nombre': 'Guerrero', 'guarismo': 43, 'sexo': 'F', 'codigo': 'UEH' },
  { 'no': '18', 'nombre': 'Guerrero', 'guarismo': 21, 'sexo': 'F', 'codigo': 'UEH' },
]

  const [data, setData] = useState(datas)
  const [ascending, setAscending] = useState(1)


  const sort = ()=>{
    
    if(ascending==1)
    {
      setAscending(0)
      setData(data.sort((a, b) => a.no < b.no ? 1 : -1).map(
        (item, i) => item
      ))
        return
    }
    setAscending(1)
    setData(data.sort((a, b) => a.no > b.no ? 1 : -1).map(
      (item, i) => item
    ))

  }

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

        <Text style={{ alignSelf: 'center', color: 'rgb(169,11,47)', fontSize: 26,fontFamily:'MontserratMedium' }}>Torrealta (7)</Text>
        <LogoPrincipal
          fillColor={'rgb(169,11,47)'}
        >
        </LogoPrincipal>
      </View>


      <View style={styles.ganaderia_top}>
        <Text  style={{ width: '10%', color:'#ffffff',textAlign:'center', fontFamily:'MontserratSemiBold' }} >
        N°
        </Text>
        <Text  style={{ width: '25%', color:'#ffffff',textAlign:'center', fontFamily:'MontserratSemiBold' }} 
          onPress={() => sort()}
        >
          Nombre
        </Text>
        <Text  style={{ width: '25%', color:'#ffffff',textAlign:'center', fontFamily:'MontserratSemiBold' }} >
          Guarismo
        </Text>
        <Text  style={{ width: '20%', color:'#ffffff',textAlign:'center', fontFamily:'MontserratSemiBold' }} >
          Sexo
        </Text>
        <Text  style={{ width: '20%', color:'#ffffff',textAlign:'center', fontFamily:'MontserratSemiBold' }} >
          Codigo
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
          <TouchableOpacity
          onPress={() => 
            navigation.navigate('detalle-ganaderia', {
              name:card.nombre,
            })
          }

          style={{ flexDirection: 'row', justifyContent: 'space-between',backgroundColor:colorTable,padding:10 }}>
            <Text   style={{ width: '10%', textAlign:'center', fontFamily:'MontserratSemiBold',color:'rgb(169,11,47)'}}>
              {card.no}
            </Text>
            <Text style={{ width: '25%' , textAlign:'center', fontFamily:'MontserratSemiBold',color:'rgb(169,11,47)'}} >
              {card.nombre}
            </Text>
            <Text style={{ width: '25%' , textAlign:'center', fontFamily:'MontserratSemiBold',color:'rgb(169,11,47)'}} >
              {card.guarismo}
            </Text>
            <Text style={{ width: '20%' , textAlign:'center', fontFamily:'MontserratSemiBold',color:'rgb(169,11,47)'}} >
              {card.sexo}
            </Text>
            <Text style={{ width: '20%' , textAlign:'center', fontFamily:'MontserratSemiBold',color:'rgb(169,11,47)'}} >
              {card.codigo}
            </Text>

          </TouchableOpacity>

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
  },
  head_table:{
    color:'#ffffff',
    textAlign:'center'
  },
  content_table:{
    textAlign:'center',
    margin:'auto',
  }
})