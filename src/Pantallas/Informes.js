import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, ScrollView } from 'react-native'
import Footer from "../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import HeaderApp from "../Componentes/HeaderApp";
import Navbar from "../Componentes/Navbar";
import { Image, Text } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Pdf from '../Componentes/Pdf';
import Xls from '../Componentes/Xls';


export default function Informes() {
  const navigation = useNavigation();

  let data = [{ 'nombre': 'Lotes y papa' },
  { 'nombre': 'Reducido' },
  { 'nombre': 'Vacas/Sementales' },
  { 'nombre': 'Libreta' }]


  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffffff', marginBottom: 20, padding: 10, paddingTop: 50 }}>
        <View></View>

        <Text style={{ alignSelf: 'center', color: 'rgb(169,11,47)', fontSize: 26 }}>Informes</Text>
        <Image
          onPress={() =>
            navigation.navigate("login")
          }
          style={{ width: 35, height: 35 }}
          source={require('../../assets/logout.png')}
        >
        </Image>
      </View>


      {data.map((card, i) => {
        return (
          <View
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >

            <View style={{
              flexDirection: 'row',
              width: '90%',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff', margin: 10, borderRadius: 10, padding: 15
            }}>

              <Text style={{ width: '65%' }}>
                {card.nombre}
              </Text>
              <View style={{ width: '35%', flexDirection: 'row',justifyContent:'space-between' }}>

                <View
                  style={{backgroundColor:'rgb(169,11,47)',
                  width:45,height:45,
                  borderRadius:5,
                  justifyContent:'center',
                  alignItems:'center'
                }}
                >
                <Pdf
                  fillColor={'#ffffff'}
                ></Pdf>
                </View>

                <View
                  style={{backgroundColor:'rgb(169,11,47)',
                  width:45,height:45,
                  borderRadius:5,
                  justifyContent:'center',
                  alignItems:'center'
                }}
                >
                <Xls
                  fillColor={'#ffffff'}
                ></Xls>
                </View>
              </View>

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
    backgroundColor: '#f4f4f4'
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