import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import Footer from "../../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import HeaderApp from "../../Componentes/HeaderApp";
import Navbar from "../../Componentes/Navbar";
import { Text, Icon } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';


export default function FiltrosGanaderia() {
    const navigation = useNavigation();


    const windowWidth = Dimensions.get('window').width;
    const toastRef = useRef();

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor="#000000"></StatusBar>

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Icon

                    style={{ resizeMode: "contain" }}
                    name="dip-switch"
                    size={50}
                    type="material-community"
                />
                <Text>Filtros</Text>
            </View>
            <Input placeholder='Filtro' ></Input>
            <Input placeholder='Filtro' ></Input><Input placeholder='Filtro' ></Input><Input placeholder='Filtro' ></Input><Input placeholder='Filtro' ></Input><Input placeholder='Filtro' ></Input><Input placeholder='Filtro' ></Input>

            <Toast ref={toastRef} position="center" opacity={0.8}></Toast>






            <View>

                <TouchableOpacity onPress={() => navigation.navigate("inicio")}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("inicio")}>
                    <Text>Reestablecer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("inicio")}>
                    <Text>Aplicar</Text>
                </TouchableOpacity>



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