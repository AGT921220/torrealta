import React, { useRef, useState } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Text } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import LeftArrow from '../../Componentes/Logos/LeftArrow';
import LogoPrincipal from '../../Componentes/Logos/LogoPrincipal';
import Edit from '../../Componentes/Logos/Edit';
import Colors from '../../Componentes/Utils/Colors';
import { useRoute } from '@react-navigation/native';
import HeaderGanaderia from './HeaderGanaderia';
import GanaderiaGeneral from './GanaderiaGeneral';
import GanaderiaHijos from './GanaderiaHijos';
import GanaderiaArbol from './GanaderiaArbol';

export default function DetalleGanaderia(props) {

  const { name } = props.route.params
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();
  const route = useRoute();
  const [active, setActive] = useState('general')

  const renderSwitch = (param) => {
    switch (param) {
      case 'general':
        return 'general';
      default:
        return 'foo';
    }
  }
  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      <View style={{ backgroundColor: 'red', backgroundColor: Colors.primario, marginBottom: 0, padding: 10, paddingTop: 30, justifyContent: 'center', alignItems: 'center', }}>
        <LogoPrincipal fillColor={Colors.whiteTwo} width={25} height={25}></LogoPrincipal>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <TouchableOpacity onPress={() => navigation.navigate("inicio")}>
            <LeftArrow fillColor={Colors.whiteTwo}></LeftArrow>
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', color: Colors.whiteTwo, fontSize: 24, fontFamily: 'Montserrat' }}>{name}</Text>
          <TouchableOpacity onPress={() => navigation.navigate("inicio")}>
            <Edit fillColor={Colors.whiteTwo}></Edit>
          </TouchableOpacity>
        </View>
      </View>


      <View
        style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10, marginTop: 10 }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderRadius: 15, backgroundColor: 'white', width: '90%' }}>
          <TouchableOpacity onPress={() => setActive('general')} style={(active == 'general') ? styles.active_ganaderia : styles.inactive_ganaderia}>
            <Text style={{ color: (active == 'general') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}>General</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActive('hijos')} style={(active == 'hijos') ? styles.active_ganaderia : styles.inactive_ganaderia}>
            <Text style={{ color: (active == 'hijos') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}>Hijos</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActive('arbol')} style={(active == 'arbol') ? styles.active_ganaderia : styles.inactive_ganaderia}>
            <Text style={{ color: (active == 'arbol') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}>Árbol</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setActive('video')} style={(active == 'video') ? styles.active_ganaderia : styles.inactive_ganaderia}>
            <Text style={{ color: (active == 'video') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}>Video</Text>
          </TouchableOpacity>
        </View>
      </View>

      {(() => {
        switch (active) {
          case 'general':
            return (
              <GanaderiaGeneral></GanaderiaGeneral>
            )
            break;
          case 'hijos':
            return (
              <GanaderiaHijos></GanaderiaHijos>
            )
            break;
          case 'arbol':
            return (
              <GanaderiaArbol></GanaderiaArbol>
            )
            break;
          case 'video':
            return (
              <View>
                <Text>
                  Video
                </Text>
              </View>
            )
            break;
          default:
            break;
        }

      })()}


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
  detalle_ganaderia_image: {
    width: 75,
    height: 75
  },
  active_ganaderia: {
    backgroundColor: Colors.primario,
    padding: 10,
    borderRadius: 20,
    width: '25%',
  },
  inactive_ganaderia: {
    padding: 10,
    width: '25%',
  }

})