import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Linking, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useRoute } from '@react-navigation/native';
import Colors from '../../Componentes/Utils/Colors';
import LogoPrincipal from '../../Componentes/Logos/LogoPrincipal';
import LeftArrow from '../../Componentes/Logos/LeftArrow';
import Edit from '../../Componentes/Logos/Edit';
export default function HeaderGanaderia(props) {
    const route = useRoute();
    const { name } = props

    const navigation = useNavigation();

    return (
        <View>
    
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
      style={{justifyContent:'center',alignItems:'center',marginBottom:10,marginTop:10}}
      >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderRadius: 15, backgroundColor: 'white', width: '90%' }}>
        <TouchableOpacity onPress={() =>  navigation.navigate("detalle-ganaderia")} style={(route.name == 'detalle-ganaderia') ? styles.active_ganaderia : styles.inactive_ganaderia}>
          <Text style={{ color: (route.name == 'detalle-ganaderia') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}>General</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>  navigation.navigate("ganaderia-hijos")} style={(route.name == 'ganaderia-hijos') ? styles.active_ganaderia : styles.inactive_ganaderia}>
          <Text style={{ color: (route.name == 'ganaderia-hijos') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}>Hijos</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() =>  navigation.navigate("ganaderia-arbol")} style={(route.name == 'arbol-ganaderia') ? styles.active_ganaderia : styles.inactive_ganaderia}>
          <Text style={{ color: (route.name == 'arbol-ganaderia') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}>Árbol</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() =>  navigation.navigate("ganaderia-video")} style={(route.name == 'video-ganaderia') ? styles.active_ganaderia : styles.inactive_ganaderia}>
          <Text style={{ color: (route.name == 'video-ganaderia') ? Colors.whiteTwo : '#000000', textAlign: 'center' }}>Video</Text>
        </TouchableOpacity>
      </View>
      </View>


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