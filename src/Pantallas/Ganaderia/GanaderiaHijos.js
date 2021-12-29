import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Text } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import HeaderGanaderia from './HeaderGanaderia';
import { Icon } from 'react-native-elements/dist/icons/Icon';


export default function GanaderiaHijos() {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  let data = [{ 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 },
  { 'no': '12', 'nombre': 'CHARRO', 'guarismo': 12, 'sexo': 'M', 'nota': 8.8 }]

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      <HeaderGanaderia>

      </HeaderGanaderia>

      <ScrollView>

        <View>
          <Text>Media machos: <Text></Text>7,6</Text>
          <Text>Media hembras: <Text></Text>6,8</Text>

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


          </View>

        );
      }
      )}






      </ScrollView>


      <Toast ref={toastRef} position="center" opacity={0.8}></Toast>
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
  },
  detalle_ganaderia_image: {
    width: 75,
    height: 75
  }
})