import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Icon, Image, Input, Text } from 'react-native-elements';
import HeaderGanaderia from './HeaderGanaderia';
import Colors from '../../Componentes/Utils/Colors';


export default function GanaderiaGeneral(props) {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  const heightSize = Dimensions.get("window").width*.35

  return (

    <View style={styles.container}>
      <ScrollView>

        <View
          style={{justifyContent:'center',alignItems:'center'}}
        >

          <View style={{ flexDirection: 'row', justifyContent: 'space-between',width:'90%' }}>

            <View style={{ width: '30%', height: heightSize, backgroundColor: Colors.whiteTwo,borderRadius:10 }}>

            </View>
            <View style={{ width: '30%', height: heightSize, backgroundColor: Colors.whiteTwo,borderRadius:10 }}>

            </View>
            <View style={{ width: '30%', height: heightSize, backgroundColor: Colors.whiteTwo,borderRadius:10 }}>

            </View>

          </View>
        </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

          <View>

            <Text>Guarismo: <Text></Text>013</Text>
            <Text>Numero: <Text></Text>002</Text>
            <Text>Sexo: <Text></Text>M</Text>
            <Text>Pelo: <Text></Text>Castaño</Text>
            <Text>Madre: <Text></Text>Adivino (085)</Text>
            <Text>Padre: <Text></Text>Charra (532)</Text>

          </View>

          <View>
            <Text>Fecha de lidia: <Text></Text>10/10/2021</Text>
            <Text>Torero: <Text></Text>Torero</Text>
            <Text>Lugar: <Text></Text>Toñalejo</Text>
            <Text><Text></Text></Text>
            <Text>F. Alta: <Text></Text>10/10/2021</Text>
            <Text>F. Baja: <Text></Text>10/10/2021</Text>

          </View>

        </View>




        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text>
            Caballo
          </Text>
          <View
            style={{ width: '70%' }}

          >

            <Input placeholder="Añadir"
              inputStyle={{ color: 'white' }}
              leftIcon={{
                type: "material-community",
                name: "plus",
                color: "gray",
              }}

            ></Input>
          </View>

          <Icon
            style={{ resizeMode: "contain" }}
            name="close"
            size={25}
            type="material-community"
          />
        </View>



        <View>
          <Input
            inputStyle={{ color: 'black' }}

            value='En general tiene una destreza natural cuando se juega con el animal'
          ></Input>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
              <View>
                <Text>Distancia</Text>
                <Text>7</Text>
              </View>
              <View>
                <Text>Fijesa</Text>
                <Text>7</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
              <View>
                <Text>Prontitud</Text>
                <Text>9</Text>
              </View>
              <View>
                <Text>Galope</Text>
                <Text>8</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
              <View>
                <Text>Humilla</Text>
                <Text>9</Text>
              </View>
              <View>
                <Text>Empuja</Text>
                <Text>8</Text>
              </View>
            </View>

          </View>



          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              Muleta
            </Text>
            <View
              style={{ width: '70%' }}

            >

              <Input placeholder="Añadir"
                inputStyle={{ color: 'white' }}
                leftIcon={{
                  type: "material-community",
                  name: "plus",
                  color: "gray",
                }}

              ></Input>
            </View>

            <Icon
              style={{ resizeMode: "contain" }}
              name="close"
              size={25}
              type="material-community"
            />
          </View>




          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>
              Detalles
            </Text>
            <View
              style={{ width: '70%' }}

            >

              <Input placeholder="Añadir"
                inputStyle={{ color: 'white' }}
                leftIcon={{
                  type: "material-community",
                  name: "plus",
                  color: "gray",
                }}

              ></Input>
            </View>

            <Icon
              style={{ resizeMode: "contain" }}
              name="close"
              size={25}
              type="material-community"
            />
          </View>


        </View>




        <View>
          <Text>
            Observaciones
          </Text>
          <Input
            inputStyle={{ color: 'black' }}

            value='En general tiene una destreza natural cuando se juega con el animal'
          ></Input>
        </View>

      </ScrollView>
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