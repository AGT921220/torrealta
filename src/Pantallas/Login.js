import React, { useRef } from 'react'
import {Text, StyleSheet, View, StatusBar, ImageBackground, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import LoginInput from '../Componentes/Utils/LoginInput';
import LogoPrincipal from '../Componentes/Logos/LogoPrincipal';
import Colors from '../Componentes/Utils/Colors';

export default function Login() {

  const navigation = useNavigation();

  const toastRef = useRef();
  const login = () => {
    navigation.navigate("inicio")
  }

  const forgotPassword = () => {
    navigation.navigate("forgot")
  }
  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>
      <ImageBackground
        source={require('../../assets/img-fondo.jpg')}
        resizeMode="cover"
        style={styles.login_image}>

        <View
          style={styles.login_main_image}

        >

          <LogoPrincipal
            fillColor={Colors.whiteTwo}
            width={150}
            height={150}
          >

          </LogoPrincipal>
        </View>



        <LoginInput text="Email"></LoginInput>

        <LoginInput text="Contraseña"></LoginInput>


        <TouchableOpacity
          onPress={() => login()}
          style={styles.login_button}
        >
          <Text style={{ color: '#ffffff',fontFamily:'MontserratSemiBold' }}>
            Acceder
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          onPress={() => forgotPassword()}
          style={styles.recover_button}
        >
          <Text style={{ color: '#ffffff',fontFamily:'MontserratMedium' }}>
            Olvidé la contraseña
          </Text>
        </TouchableOpacity>


      </ImageBackground>

      <Toast ref={toastRef} position="center" opacity={0.8}></Toast>

    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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
  },
  login_button: {
    backgroundColor: Colors.primario,
    width: '80%',
    textAlign: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: 'auto',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 30
  },
  recover_button: {
    marginTop: 20
  },
  login_main_image: {
    width: 125,
    height: 125,
    marginTop: 90,
    marginBottom: 120
  }
})