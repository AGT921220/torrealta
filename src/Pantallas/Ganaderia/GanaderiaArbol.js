import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Text } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import HeaderGanaderia from './HeaderGanaderia';
import { Icon } from 'react-native-elements/dist/icons/Icon';


export default function GanaderiaArbol() {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  let data = [{ 'parte': 'Madre', 'abuelo': 'Perlita (6,16)', 'nota': 8.8, 'abuela': 'Perlita (6,16)', 'nota': 8.8 },
  { 'parte': 'Padre', 'abuelo': 'Jamoncito (7,14)', 'nota': 8.8,'abuela': 'Pantoja (7,14)', 'nota': 8.8 },]

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      <HeaderGanaderia>

      </HeaderGanaderia>

      <ScrollView>

        <View>
          <Text>Padre: <Text></Text>Machote(7,6)</Text>
          <Text>Madre: <Text></Text>Perlita (6,8)</Text>

        </View>


        <View style={styles.ganaderia_top}>
        <Text style={{ width: '10%' }}>
          Parte
        </Text>
        <Text style={{ width: '20%' }}>
          Abuelo
        </Text>
        <Text style={{ width: '20%' }}>
          Nota
        </Text>
        <Text style={{ width: '15%' }}>
          Abuela
        </Text>
        <Text style={{ width: '15%' }}>
          Nota
        </Text>
      </View>

      {data.map((card, i) => {
        return (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ width: '10%' }}>
              {card.parte}
            </Text>
            <Text style={{ width: '20%' }}>
              {card.abuelo}
            </Text>
            <Text style={{ width: '20%' }}>
              {card.nota}
            </Text>
            <Text style={{ width: '15%' }}>
              {card.abuela}
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