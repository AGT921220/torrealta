import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import Footer from "../../Componentes/FooterApp";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import HeaderApp from "../../Componentes/HeaderApp";
import Navbar from "../../Componentes/Navbar";
import { Text, Icon, Image } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import FilterInputGanaderia from '../../Componentes/Utils/FilterGanaderiaInput';
import { ScrollView } from 'react-native-gesture-handler';


export default function FiltrosGanaderia() {
    const navigation = useNavigation();


    const windowWidth = Dimensions.get('window').width;
    const toastRef = useRef();

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor="#000000"></StatusBar>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffffff', marginBottom: 0,padding:10 }}>
                {/* <Icon
                onPress={() => navigation.navigate("inicio")}
                    style={{ resizeMode: "contain",marginLeft:0}}
                    name="chevron-left"
                    color={'rgb(169,11,47)'}
                    size={50}
                    type="material-community"
                /> */}

                <Image
                    onPress={() => navigation.navigate("inicio")}
                    style={{ width: 35, height: 35 }}
                    source={require('../../../assets/left-arrow.png')}
                >
                </Image>

                <Text style={{ alignSelf: 'center', color: 'rgb(169,11,47)', fontSize: 26 }}>Filtros</Text>
                <View style={{ width: 50 }}></View>
            </View>
            <ScrollView
                style={{ paddingBottom: 100 }}
            >

                <FilterInputGanaderia text="N°" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Ganadería" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Guarismo" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Nombre" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Sexo" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Crotal" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Madre o número" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Padre o número" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Pelo" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Estado" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Destino" style={styles.filtro_input}  ></FilterInputGanaderia>
                <FilterInputGanaderia text="Plaza" style={styles.filtro_input}  ></FilterInputGanaderia>

            </ScrollView>

            <View
                style={{ justifyContent: 'center', alignItems: 'center', marginTop: 50 }}
            >
                <Text
                    style={{ width: '90%', textAlign: 'center', backgroundColor: 'yellow', padding: 10, borderRadius: 10 }}
                >
                    328 animales encontrados
                </Text>
            </View>

            <Toast ref={toastRef} position="center" opacity={0.8}></Toast>



            <TouchableOpacity
                onPress={() => navigation.navigate("inicio")}
                style={styles.apply_button}
            >
                <Text style={{ color: '#ffffff' }}>
                    Aplicar
                </Text>
            </TouchableOpacity>


            {/* <View>

                <TouchableOpacity onPress={() => navigation.navigate("inicio")}>
                    <Text>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("inicio")}>
                    <Text>Reestablecer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("inicio")}>
                    <Text>Aplicar</Text>
                </TouchableOpacity>



            </View> */}


        </View>






    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#f4f4f4',
    },
    filtro_input: {
        backgroundColor: '#ffffff'
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
    apply_button: {
        backgroundColor: 'rgb(169,11,47)',
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