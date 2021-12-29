import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import Footer from "../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import HeaderApp from "../Componentes/HeaderApp";
import NavbarTareas from "../Componentes/NavbarTareas";
import { Text, Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import CurrentTask from '../Componentes/Utils/CurrentTask';
import ListTareas from '../Componentes/Utils/ListTareas';


export default function TareaDetail(props) {

  const { text } = props.route.params

  const navigation = useNavigation();
  const toastRef = useRef();

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>

      <Text>
        {text}

      </Text>

      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>


      <Button
        title="Cerrar"
        onPress={() => navigation.navigate("tareas")}
      >
        
      </Button>

      <Toast ref={toastRef} position="center" opacity={0.8}></Toast>
      <Footer ></Footer>

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
  }
})