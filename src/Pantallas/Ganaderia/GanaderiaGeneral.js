import React, { useRef, useState } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Icon, Image, Input, Text } from 'react-native-elements';
import HeaderGanaderia from './HeaderGanaderia';
import Colors from '../../Componentes/Utils/Colors';
import Caballo from '../../Componentes/Logos/Caballo';
import Muleta from '../../Componentes/Logos/Muleta';
import Vaca from '../../Componentes/Vaca';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LeftArrow from '../../Componentes/Logos/LeftArrow';
import DownArrow from '../../Componentes/Logos/DownArrow';
import GanaderiaCardDetail from '../../Componentes/GanaderiaCardDetail';


export default function GanaderiaGeneral(props) {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();


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
      <ScrollView>

        <View
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>

            <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center', height: heightSize, backgroundColor: Colors.whiteTwo, borderRadius: 10 }}>
              <Caballo fillColor={Colors.primario} width={40} height={40}></Caballo>
              <Text style={{ color: Colors.primario, fontSize: 28, fontFamily: 'MontserratBold' }}>8</Text>
              <Text style={{ color: Colors.primario, fontFamily: 'MontserratSemiBold', fontSize: 12 }}>Caballo</Text>
            </View>

            <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center', height: heightSize, backgroundColor: Colors.whiteTwo, borderRadius: 10 }}>
              <Muleta fillColor={Colors.primario} width={40} height={40}></Muleta>
              <Text style={{ color: Colors.primario, fontSize: 28, fontFamily: 'MontserratBold' }}>8</Text>
              <Text style={{ color: Colors.primario, fontFamily: 'MontserratSemiBold', fontSize: 12 }}>Muleta</Text>
            </View>

            <View style={{ width: '30%', justifyContent: 'center', alignItems: 'center', height: heightSize, backgroundColor: Colors.primario, borderRadius: 10 }}>
              <Vaca fillColor={Colors.whiteTwo} width={40} height={40}></Vaca>
              <Text style={{ color: Colors.whiteTwo, fontSize: 28, fontFamily: 'MontserratBold' }}>8</Text>
              <Text style={{ color: Colors.whiteTwo, fontFamily: 'MontserratSemiBold', fontSize: 12 }}>Media</Text>
            </View>

          </View>
        </View>


        <View
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderRadius: 10, backgroundColor: Colors.whiteTwo, width: '90%', marginTop: 10, marginBottom: 10 }}>

            <View
              style={{ justifyContent: 'center', width: '40%', marginLeft: 10, paddingTop: 10, paddingBottom: 10 }}
            >

              <Text style={styles.general_text_description}>Guarismo: <Text style={styles.general_text_description_sub}>013</Text></Text>
              <Text style={styles.general_text_description}>Numero: <Text style={styles.general_text_description_sub}>002</Text></Text>
              <Text style={styles.general_text_description}>Sexo: <Text style={styles.general_text_description_sub}>M</Text></Text>
              <Text style={styles.general_text_description}>Pelo: <Text style={styles.general_text_description_sub}>JA SU</Text></Text>
              <Text style={styles.general_text_description}>Madre: <Text style={styles.general_text_description_sub}>Adivino (085)</Text></Text>
              <Text style={styles.general_text_description}>Padre: <Text style={styles.general_text_description_sub}>Charra (543)</Text></Text>

            </View>

            <View
              style={{ justifyContent: 'center', width: '60%', marginLeft: 10, paddingTop: 10, paddingBottom: 10 }}
            >
              <Text style={styles.general_text_description}>F. de lidia: <Text style={styles.general_text_description_sub}>25/06/16</Text></Text>
              <Text style={styles.general_text_description}>Torero: <Text style={styles.general_text_description_sub}>Joselito Adame</Text></Text>
              <Text style={styles.general_text_description}>Lugar: <Text style={styles.general_text_description_sub}>Toñalejo</Text></Text>
              <Text style={styles.general_text_description}>F. Alta - Baja <Text style={styles.general_text_description_sub}>25/06/16 - 25/06/18</Text></Text>
              <Text style={styles.general_text_description}>F. Alta: <Text style={styles.general_text_description_sub}>10/10/2021</Text></Text>
              <Text style={styles.general_text_description}>F. Baja: <Text style={styles.general_text_description_sub}>10/10/2021</Text></Text>

            </View>

          </View>

        </View>



        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

          <View style={{ width: '90%', marginBottom: 10 }}>
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
            <View style={{ backgroundColor: Colors.whiteTwo, display: (cardCaballoDesc == 1) ? 'flex' : 'none', height: 180, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
              <Text style={{ fontFamily: 'MontserratMedium', color: 'rgb(100,100,100)', marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 10 }}>
                En general tiene una destreza natural cuando se juega con el animal...
              </Text>
              <GanaderiaCardDetail></GanaderiaCardDetail>
            </View>

          </View>

          <View style={{ width: '90%', marginBottom: 10 }}>
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
            <View style={{ backgroundColor: Colors.whiteTwo, display: (cardMuletaDesc == 1) ? 'flex' : 'none', height: 180, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
              <Text style={{ fontFamily: 'MontserratMedium', color: 'rgb(100,100,100)', marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 10 }}>
                En general tiene una destreza natural cuando se juega con el animal...
              </Text>
              <GanaderiaCardDetail></GanaderiaCardDetail>
            </View>

          </View>


          <View style={{ width: '90%', marginBottom: 10 }}>
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
            <View style={{ backgroundColor: Colors.whiteTwo, display: (cardDetallesDesc == 1) ? 'flex' : 'none', height: 180, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
              <Text style={{ fontFamily: 'MontserratMedium', color: 'rgb(100,100,100)', marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 10 }}>
                En general tiene una destreza natural cuando se juega con el animal...
              </Text>
              <GanaderiaCardDetail></GanaderiaCardDetail>

            </View>

          </View>




          <View style={{ width: '90%', marginBottom: 100 }}>
            <View style={{
              backgroundColor: Colors.grisOscuro,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              height: 50,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 5,
              paddingRight: 5,
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              alignItems:'center'
            }}>
              <Text style={{ color:Colors.whiteTwo, fontSize: 16, fontFamily: 'MontserratSemiBold',textAlign:'center'}}>Observaciones de campo</Text>

            </View>
            <View style={{ backgroundColor: Colors.whiteTwo, height: 50, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, }}>
              <Text style={{ fontFamily: 'MontserratMedium', color: 'rgb(100,100,100)', marginLeft: 20, marginRight: 20, marginTop: 10, marginBottom: 10 }}>
              En general es un toro bravo y se le nota en la mirada de killer
              </Text>

            </View>

          </View>


        </View>






      </ScrollView >




    </View >

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
  },
  general_text_description: {
    fontSize: 12,
    color: Colors.primario
  },
  general_text_description_sub: {
    fontSize: 12,
    color: Colors.grisOscuro
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
  cardDescriptionItemNumber: {
    color: Colors.primario,
    textAlign: 'center',
    fontFamily: 'MontserratBold',
    fontSize: 24
  },
  cardDescriptionItemText: {
    textAlign: 'center',
    color: Colors.grisMedio,
    fontFamily: 'MontserratSemiBold',
    fontSize: 12
  }

})