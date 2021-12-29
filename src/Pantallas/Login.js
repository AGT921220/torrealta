import React, { useRef } from 'react'
import {
  Text, StyleSheet, View, StatusBar, Dimensions, ImageBackground
} from 'react-native'
import Footer from "../Componentes/FooterApp";
import HeaderApp from "../Componentes/HeaderApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginInput from '../Componentes/Utils/LoginInput';
import { CheckBox, Button, Image } from 'react-native-elements';


export default function Login() {
  const navigation = useNavigation();

  const windowWidth = Dimensions.get('window').width;
  const toastRef = useRef();

  const login = () => {
    navigation.navigate("inicio")
  }

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>
      <ImageBackground
        source={require('../../assets/login_fondo.jpg')}
        resizeMode="cover"
        style={styles.login_image}>


        <Image
          style={styles.login_main_image}
          source={require('../../assets/logoBlanco.png')}
        >
        </Image>

        {/* <View
          style={styles.login_form}
        > */}

          <LoginInput style={{marginTop:427}} text="Usuario"></LoginInput>

          <LoginInput text="Clave"></LoginInput>

          <CheckBox
            style={styles.login_checkbox}
          />
          <Text >Recordar</Text>

          <Button
            style={styles.login_button}
            title="Acceder"
            onPress={() => login()}

          >
            Acceder
          </Button>
        {/* </View> */}

      </ImageBackground>

      <Toast ref={toastRef} position="center" opacity={0.8}></Toast>

    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  login_image: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
  login_form: {
    width: '70%',
    height: '40%',
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  login_checkbox: {
    alignSelf: "center",
    color: '#000000'
  },
  login_button: {
    color: '#000000'
  },
  login_main_image: {
    width: 123,
    height: 123,
    marginTop:89
  }
})