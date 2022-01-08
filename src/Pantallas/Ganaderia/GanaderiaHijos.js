import React, { useRef, useState } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Text } from 'react-native-elements';
import Colors from '../../Componentes/Utils/Colors';
import Macho from '../../Componentes/Logos/Macho';

export default function GanaderiaHijos(props) {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  let datas = [{ 'no': '12', 'nombre': 'Charro','madre':'Perlita(465)', 'guarismo': 12, 'sexo': 'M', 'nota': '6,6' },
  { 'no': '12', 'nombre': 'Raposo','madre':'Perlita(465)', 'guarismo': 3, 'sexo': 'M', 'nota': '6,5' },
  { 'no': '12', 'nombre': 'Belicoso','madre':'Perlita(465)', 'guarismo': 43, 'sexo': 'F', 'nota': '7,5' },
  { 'no': '12', 'nombre': 'Guerrero','madre':'Perlita(465)', 'guarismo': 43, 'sexo': 'F', 'nota': '4,8' },
  { 'no': '12', 'nombre': 'Guerrero','madre':'Perlita(465)', 'guarismo': 21, 'sexo': 'F', 'nota': '9,3' },]

  const [data, setData] = useState(datas)
  let colorTable = '#f4f4f4'

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerSectionLeft}>

          <Macho fillColor={Colors.grisOscuro} width={24} height={24}></Macho>
          <View style={{marginLeft:5}}>
            <Text style={{fontSize:12,color:Colors.grisOscuro,fontFamily:'MontserratBold'}}>Machos</Text>
            <Text style={{fontSize:10,color:Colors.grisMedio,fontFamily:'MontserratMedium'}}>Media: 6,6</Text>
          </View>

        </View>
        <View style={{width:1,backgroundColor:Colors.grisOscuro}}>

        </View>
        <View style={styles.headerSectionRight}>
          <Macho fillColor={Colors.grisOscuro} width={24} height={24}></Macho>
          <View style={{marginLeft:5}}>
            <Text style={{fontSize:12,color:Colors.grisOscuro,fontFamily:'MontserratBold'}}>Machos</Text>
            <Text style={{fontSize:10,color:Colors.grisMedio,fontFamily:'MontserratMedium'}}>Media: 6,6</Text>
          </View>
        </View>
      </View>



      <View style={styles.ganaderia_top}>
        <Text  style={{ width: '5%', color:Colors.whiteTwo,textAlign:'center', fontFamily:'MontserratSemiBold',fontSize:12 }} >
        N°
        </Text>
        <Text  style={{ width: '25%', color:Colors.whiteTwo,textAlign:'center', fontFamily:'MontserratSemiBold',fontSize:12 }} 
        >
          Nombre
        </Text>
        <Text  style={{ width: '20%', color:Colors.whiteTwo,textAlign:'center', fontFamily:'MontserratSemiBold',fontSize:12 }} >
          Madre
        </Text>
        <Text  style={{ width: '20%', color:Colors.whiteTwo,textAlign:'center', fontFamily:'MontserratSemiBold',fontSize:12 }} >
          Guarismo
        </Text>
        <Text  style={{ width: '15%', color:Colors.whiteTwo,textAlign:'center', fontFamily:'MontserratSemiBold',fontSize:12 }} >
          Sexo
        </Text>
        <Text  style={{ width: '15%', color:Colors.whiteTwo,textAlign:'center', fontFamily:'MontserratSemiBold',fontSize:12 }} >
          Nota
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

          style={{ flexDirection: 'row', justifyContent: 'space-between',backgroundColor:colorTable,padding:10 }}>
            <Text   style={{ width: '5%', textAlign:'center', fontFamily:'MontserratSemiBold',color:Colors.primario,fontSize:10}}>
              {card.no}
            </Text>
            <Text style={{ width: '25%' , textAlign:'center', fontFamily:'MontserratSemiBold',color:Colors.primario,fontSize:10}} >
              {card.nombre}
            </Text>
            <Text style={{ width: '20%' , textAlign:'center', fontFamily:'MontserratSemiBold',color:Colors.primario,fontSize:10}} >
              {card.madre}
            </Text>
            <Text style={{ width: '20%' , textAlign:'center', fontFamily:'MontserratSemiBold',color:Colors.primario,fontSize:10}} >
              {card.guarismo}
            </Text>
            <Text style={{ width: '15%' , textAlign:'center', fontFamily:'MontserratSemiBold',color:Colors.primario,fontSize:10}} >
              {card.sexo}
            </Text>
            <Text style={{ width: '15%' , textAlign:'center', fontFamily:'MontserratSemiBold',color:Colors.primario,fontSize:10}} >
              {card.nota}
            </Text>

          </TouchableOpacity>

        );
      }
      )}











    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    backgroundColor: Colors.whiteTwo,
    width: '90%',
    flexDirection: 'row',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
    justifyContent: 'space-between'

  },
  headerSectionLeft: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: '50%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    paddingBottom:5,
    paddingTop:5
  },
  headerSectionRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: '50%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    paddingBottom:5,
    paddingTop:5
  },
  ganaderia_top: {
    marginTop:20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#a91b2f',
    padding:15,
  },


})