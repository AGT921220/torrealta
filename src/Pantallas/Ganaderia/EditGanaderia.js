import React, { useRef, useState } from 'react'
import { StyleSheet, View, StatusBar, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import Toast from "react-native-easy-toast";
import Colors from '../../Componentes/Utils/Colors';
import LeftArrow from '../../Componentes/Logos/LeftArrow';
import { Input, Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native-gesture-handler';
import InputEditGanaderia from '../../Componentes/Utils/InputEditGanaderia';
import Calendar from '../../Componentes/Logos/Calendar';
import Plus from '../../Componentes/Logos/Plus';
import DownArrow from '../../Componentes/Logos/DownArrow';
import GanaderiaCardDetail from '../../Componentes/GanaderiaCardDetail';


export default function EditGanaderia() {
  const toastRef = useRef();
  const navigation = useNavigation();


  const [cardCaballoDesc, setCardCaballoDesc] = useState(1)
  const [cardMuletaDesc, setCardMuletaDesc] = useState(0)
  const [cardDetallesDesc, setCardDetallesDesc] = useState(0)

  const heightSize = Dimensions.get("window").width * .3


  const toggleCaballoDesc = () => {
    if (cardCaballoDesc == 1) {
      setCardCaballoDesc(0)
      return
    }
    setCardCaballoDesc(1)
  }

  const toggleMuletaDesc = () => {
    if (cardMuletaDesc == 1) {
      setCardMuletaDesc(0)
      return
    }
    setCardMuletaDesc(1)
  }

  const toggleDetallesDesc = () => {
    if (cardDetallesDesc == 1) {
      setCardDetallesDesc(0)
      return
    }
    setCardDetallesDesc(1)
  }


  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>
      <View style={{ backgroundColor: 'red', backgroundColor: Colors.primario, marginBottom: 0, padding: 10, paddingTop: 30, justifyContent: 'center', alignItems: 'center', }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <TouchableOpacity onPress={() => navigation.navigate("detalle-ganaderia")}>
            <LeftArrow fillColor={Colors.whiteTwo}></LeftArrow>
          </TouchableOpacity>
          <Text style={{ alignSelf: 'center', color: Colors.whiteTwo, fontSize: 24, fontFamily: 'Montserrat' }}>Editar Guerrero</Text>
          <TouchableOpacity >
          </TouchableOpacity>
        </View>
      </View>




      <ScrollView style={{ paddingBottom: 100, backgroundColor: 'rgba(255,255,255,0)' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '90%', flexDirection: 'row' }}>
            <InputEditGanaderia text={'N° caballo'} width={'30%'}></InputEditGanaderia>
            <InputEditGanaderia text={'N° muleta'} width={'30%'}></InputEditGanaderia>
            <InputEditGanaderia text={'N° media'} width={'30%'}></InputEditGanaderia>
          </View>
          <InputEditGanaderia text={'Guarismo'}></InputEditGanaderia>
          <InputEditGanaderia text={'N°'}></InputEditGanaderia>
          <InputEditGanaderia text={'Sexo'}></InputEditGanaderia>
          <InputEditGanaderia text={'Pelo'}></InputEditGanaderia>
          <InputEditGanaderia text={'Madre o número'}></InputEditGanaderia>
          <InputEditGanaderia text={'Padre o número'}></InputEditGanaderia>

          <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '90%', flexDirection: 'row' }}>
            <InputEditGanaderia text={'Fecha de lidia'} width={'100%'}></InputEditGanaderia>
            <View style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', height: '100%', top: 5 }}>
              <Calendar fillColor={Colors.primario}></Calendar>
            </View>
          </View>


          <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '90%', flexDirection: 'row' }}>
            <InputEditGanaderia text={'Joselito Adame'} width={'85%'}></InputEditGanaderia>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Plus fillColor={Colors.primario}></Plus>
            </View>
          </View>

          <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '90%', flexDirection: 'row' }}>
            <InputEditGanaderia text={'Valencia'} width={'85%'}></InputEditGanaderia>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
              <Plus fillColor={Colors.primario}></Plus>
            </View>
          </View>


          <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>

            <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '45%', flexDirection: 'row' }}>
              <InputEditGanaderia text={'F. Alta'} width={'100%'}></InputEditGanaderia>
              <View style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', height: '100%', top: 5 }}>
                <Calendar fillColor={Colors.primario}></Calendar>
              </View>
            </View>

            <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '45%', flexDirection: 'row' }}>
              <InputEditGanaderia text={'F. Baja'} width={'100%'}></InputEditGanaderia>
              <View style={{ position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center', height: '100%', top: 5 }}>
                <Calendar fillColor={Colors.primario}></Calendar>
              </View>
            </View>

          </View>

          <InputEditGanaderia text={'Destino'}></InputEditGanaderia>
          <InputEditGanaderia text={'Crotal'}></InputEditGanaderia>


          {/* CARDS EDIT */}

          <View style={{ width: '90%', marginTop: 10 }}>
            <View style={(cardCaballoDesc == 1) ? styles.cardDescriptionActive : styles.cardDescriptionInactive}>
              <Text style={{ color: (cardCaballoDesc == 1) ? Colors.whiteTwo : Colors.primario, fontSize: 16, fontFamily: 'MontserratSemiBold' }}>Caballo</Text>
              <TouchableOpacity
                onPress={() => toggleCaballoDesc()}
                style={{
                  transform: [{ rotate: (cardCaballoDesc == 1) ? '180deg' : '0deg' }],
                }
                }>
                <DownArrow
                  fillColor={(cardCaballoDesc == 1) ? Colors.whiteTwo : Colors.primario}></DownArrow>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#e9e9e9', display: (cardCaballoDesc == 1) ? 'flex' : 'none', height: 280, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>

              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <InputEditGanaderia text={'Descripción'} paddingBottom={50}></InputEditGanaderia>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <InputEditGanaderia text={'Distancia'} width={'45%'}></InputEditGanaderia>
                  <InputEditGanaderia text={'Fijesa'} width={'45%'}></InputEditGanaderia>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <InputEditGanaderia text={'Prontitud'} width={'45%'}></InputEditGanaderia>
                  <InputEditGanaderia text={'Galope'} width={'45%'}></InputEditGanaderia>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <InputEditGanaderia text={'Humilla'} width={'45%'}></InputEditGanaderia>
                  <InputEditGanaderia text={'Empuja'} width={'45%'}></InputEditGanaderia>
                </View>
              </View>

            </View>

          </View>

          <View style={{ width: '90%', marginTop: 10 }}>
            <View style={(cardMuletaDesc == 1) ? styles.cardDescriptionActive : styles.cardDescriptionInactive}>
              <Text style={{ color: (cardMuletaDesc == 1) ? Colors.whiteTwo : Colors.primario, fontSize: 16, fontFamily: 'MontserratSemiBold' }}>Muleta</Text>
              <TouchableOpacity
                onPress={() => toggleMuletaDesc()}
                style={{
                  transform: [{ rotate: (cardMuletaDesc == 1) ? '180deg' : '0deg' }],
                }
                }>
                <DownArrow
                  fillColor={(cardMuletaDesc == 1) ? Colors.whiteTwo : Colors.primario}></DownArrow>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#e9e9e9', display: (cardMuletaDesc == 1) ? 'flex' : 'none', height: 280, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>

              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <InputEditGanaderia text={'Descripción'} paddingBottom={50}></InputEditGanaderia>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <InputEditGanaderia text={'Distancia'} width={'45%'}></InputEditGanaderia>
                  <InputEditGanaderia text={'Fijesa'} width={'45%'}></InputEditGanaderia>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <InputEditGanaderia text={'Prontitud'} width={'45%'}></InputEditGanaderia>
                  <InputEditGanaderia text={'Galope'} width={'45%'}></InputEditGanaderia>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <InputEditGanaderia text={'Humilla'} width={'45%'}></InputEditGanaderia>
                  <InputEditGanaderia text={'Empuja'} width={'45%'}></InputEditGanaderia>
                </View>
              </View>

            </View>


          </View>


          <View style={{ width: '90%', marginTop: 10 }}>
            <View style={(cardDetallesDesc == 1) ? styles.cardDescriptionActive : styles.cardDescriptionInactive}>
              <Text style={{ color: (cardDetallesDesc == 1) ? Colors.whiteTwo : Colors.primario, fontSize: 16, fontFamily: 'MontserratSemiBold' }}>Detalles</Text>
              <TouchableOpacity
                onPress={() => toggleDetallesDesc()}
                style={{
                  transform: [{ rotate: (cardDetallesDesc == 1) ? '180deg' : '0deg' }],
                }
                }>
                <DownArrow
                  fillColor={(cardDetallesDesc == 1) ? Colors.whiteTwo : Colors.primario}></DownArrow>
              </TouchableOpacity>
            </View>
            <View style={{ backgroundColor: '#e9e9e9', display: (cardDetallesDesc == 1) ? 'flex' : 'none', height: 280, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>

              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <InputEditGanaderia text={'Descripción'} paddingBottom={50}></InputEditGanaderia>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <InputEditGanaderia text={'Distancia'} width={'45%'}></InputEditGanaderia>
                  <InputEditGanaderia text={'Fijesa'} width={'45%'}></InputEditGanaderia>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <InputEditGanaderia text={'Prontitud'} width={'45%'}></InputEditGanaderia>
                  <InputEditGanaderia text={'Galope'} width={'45%'}></InputEditGanaderia>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                  <InputEditGanaderia text={'Humilla'} width={'45%'}></InputEditGanaderia>
                  <InputEditGanaderia text={'Empuja'} width={'45%'}></InputEditGanaderia>
                </View>
              </View>

            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:10,marginBottom:20 }}>
                <InputEditGanaderia text={'Observaciones de campo...'} width={'100%'} paddingBottom={50}></InputEditGanaderia>
            </View>        

          </View>




            <TouchableOpacity
                onPress={() => navigation.navigate("detalle-ganaderia")}
                style={styles.apply_button}
            >
                <Text style={{ color: Colors.whiteTwo, fontFamily: 'MontserratSemiBold' }}>
                    Aplicar
                </Text>
            </TouchableOpacity>



        </View>
      </ScrollView>


    </View >

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    marginTop: 50,
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardDescriptionActive: {
    backgroundColor: Colors.primario,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },
  cardDescriptionInactive: {
    backgroundColor: Colors.whiteTwo,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  apply_button: {
    backgroundColor: Colors.primario,
    width: '90%',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 'auto',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20
},
})