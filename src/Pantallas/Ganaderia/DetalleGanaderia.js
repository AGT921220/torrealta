import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, Image,ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Text } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import HeaderGanaderia from './HeaderGanaderia';
import { Icon } from 'react-native-elements/dist/icons/Icon';


export default function DetalleGanaderia() {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>



      <HeaderGanaderia>

      </HeaderGanaderia>

      <ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
        <Image
          style={styles.detalle_ganaderia_image}
          source={require('../../../assets/main_icon.png')}
        >
        </Image>

        <Image
          style={styles.detalle_ganaderia_image}
          source={require('../../../assets/main_icon.png')}
        >
        </Image>

        <Image
          style={styles.detalle_ganaderia_image}
          source={require('../../../assets/main_icon.png')}
        >
        </Image>

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
          <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <View>
              <Text>Distancia</Text>
              <Text>7</Text>
            </View>
            <View>
              <Text>Fijesa</Text>
              <Text>7</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
            <View>
              <Text>Prontitud</Text>
              <Text>9</Text>
            </View>
            <View>
              <Text>Galope</Text>
              <Text>8</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',justifyContent:'space-between',margin:10}}>
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