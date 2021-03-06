import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Text } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import HeaderGanaderia from './HeaderGanaderia';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import ArbolItem from '../../Componentes/ArbolItem';


export default function GanaderiaArbol() {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  let data = [{ 'parte': 'Madre', 'abuelo': 'Perlita (6,16)', 'nota': 8.8, 'abuela': 'Perlita (6,16)', 'nota': 8.8 },
  { 'parte': 'Padre', 'abuelo': 'Jamoncito (7,14)', 'nota': 8.8, 'abuela': 'Pantoja (7,14)', 'nota': 8.8 },]

  return (

    <View style={styles.container}>

      <ScrollView >
        <View style={{ justifyContent: 'center',alignItems:'center',marginTop:10 }}>
         
          <View style={styles.arbolContainer}>

            <View style={styles.arbolItemContainer}>
              <ArbolItem type={1}></ArbolItem>
              <ArbolItem type={1}></ArbolItem>
            </View>

            <View style={styles.arbolItemContainer}>
              <ArbolItem type={2}></ArbolItem>
              <ArbolItem type={2}></ArbolItem>
              <ArbolItem type={2}></ArbolItem>
              <ArbolItem type={2}></ArbolItem>
            </View>

            <View style={styles.arbolItemContainer}>
              <ArbolItem type={1}></ArbolItem>
              <ArbolItem type={2}></ArbolItem>
              <ArbolItem type={1}></ArbolItem>
              <ArbolItem type={2}></ArbolItem>
              <ArbolItem type={1}></ArbolItem>
              <ArbolItem type={2}></ArbolItem>
              <ArbolItem type={1}></ArbolItem>
              <ArbolItem type={2}></ArbolItem>
            </View>

          </View>

        </View>

      </ScrollView>


      <Toast ref={toastRef} position="center" opacity={0.8}></Toast>
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arbolContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  arbolItemContainer: {
    width: '30%',
    justifyContent:'space-around'
  },
  arbolItem: {
    textAlign:'center',
    height:120
  }

})