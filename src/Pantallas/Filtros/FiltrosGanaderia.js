import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Text } from 'react-native-elements';
import FilterInputGanaderia from '../../Componentes/Utils/FilterGanaderiaInput';
import { ScrollView } from 'react-native-gesture-handler';
import LeftArrow from '../../Componentes/Logos/LeftArrow';
import Colors from '../../Componentes/Utils/Colors';

export default function FiltrosGanaderia() {
    const navigation = useNavigation();


    const windowWidth = Dimensions.get('window').width;
    const toastRef = useRef();

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor="#000000"></StatusBar>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.whiteTwo, marginBottom: 0, padding: 10, paddingTop: 50 }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("inicio")
                    }
                >
                    <LeftArrow
                        fillColor={Colors.primario}
                    >
                    </LeftArrow>
                </TouchableOpacity>

                <Text style={{ alignSelf: 'center', color: Colors.primario, fontSize: 24, fontFamily: 'MontserratMedium' }}>Filtros</Text>
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
                    style={{ width: '90%', textAlign: 'center', backgroundColor: 'yellow', padding: 10, borderRadius: 10, fontFamily: 'MontserratSemiBold' }}
                >
                    328 animales encontrados
                </Text>
            </View>

            <Toast ref={toastRef} position="center" opacity={0.8}></Toast>



            <TouchableOpacity
                onPress={() => navigation.navigate("inicio")}
                style={styles.apply_button}
            >
                <Text style={{ color: Colors.whiteTwo, fontFamily: 'MontserratSemiBold' }}>
                    Aplicar
                </Text>
            </TouchableOpacity>



        </View>






    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: Colors.fondoGris,
    },
    filtro_input: {
        backgroundColor: Colors.whiteTwo,
        fontFamily: 'MontserratSemiBold'
    },
    header: {
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
        color: Colors.whiteTwo,
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