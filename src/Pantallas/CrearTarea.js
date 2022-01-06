import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-easy-toast";
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import LeftArrow from '../Componentes/Logos/LeftArrow';
import Colors from '../Componentes/Utils/Colors';

export default function CrearTarea() {
    const navigation = useNavigation();


    const windowWidth = Dimensions.get('window').width;
    const toastRef = useRef();

    return (

        <View style={styles.container}>

            <StatusBar backgroundColor="#000000"></StatusBar>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.whiteTwo, marginBottom: 0, padding: 10, paddingTop: 50 }}>

                <TouchableOpacity
                    onPress={() => navigation.navigate("tareas")
                    }
                >
                    <LeftArrow
                        fillColor={Colors.primario}
                    >
                    </LeftArrow>
                </TouchableOpacity>

                <Text style={{ alignSelf: 'center', color: Colors.primario, fontSize: 24, fontFamily: 'MontserratMedium' }}>Crear Tarea</Text>
                <View style={{ width: 50 }}></View>
            </View>


            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder='Título'
                        containerStyle={styles.login_input}
                        placeholderTextColor={Colors.grisMedio}
                        inputStyle={{ color: Colors.grisMedio }}
                        color={Colors.grisMedio}
                        backgroundColor={Colors.whiteTwo}
                        padding={10}
                        borderRadius={10}
                        width={'90%'}
                        margin={'auto'}
                        justifyContent={'center'}
                        marginTop={10}
                        fontFamily={'MontserratSemiBold'} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder='Fecha'
                        containerStyle={styles.login_input}
                        placeholderTextColor={Colors.grisMedio}
                        inputStyle={{ color: Colors.grisMedio }}
                        color={Colors.grisMedio}
                        backgroundColor={Colors.whiteTwo}
                        padding={10}
                        borderRadius={10}
                        width={'90%'}
                        margin={'auto'}
                        justifyContent={'center'}
                        marginTop={10}
                        fontFamily={'MontserratSemiBold'} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder='Empleado'
                        containerStyle={styles.login_input}
                        placeholderTextColor={Colors.grisMedio}
                        inputStyle={{ color: Colors.grisMedio }}
                        color={Colors.grisMedio}
                        backgroundColor={Colors.whiteTwo}
                        padding={10}
                        borderRadius={10}
                        width={'90%'}
                        margin={'auto'}
                        justifyContent={'center'}
                        marginTop={10}
                        fontFamily={'MontserratSemiBold'} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput
                        placeholder='Descripción'
                        containerStyle={styles.login_input}
                        placeholderTextColor={Colors.grisMedio}
                        inputStyle={{ color: Colors.grisMedio }}
                        color={Colors.grisMedio}
                        backgroundColor={Colors.whiteTwo}
                        padding={10}
                        paddingBottom={50}
                        borderRadius={10}
                        width={'90%'}
                        margin={'auto'}
                        justifyContent={'center'}
                        marginTop={10}
                        fontFamily={'MontserratSemiBold'} />
                </View>
            </View>


            <Toast ref={toastRef} position="center" opacity={0.8}></Toast>




            <TouchableOpacity
                onPress={() => navigation.navigate("tareas")}
                style={styles.apply_button}
            >
                <Text style={{ color: Colors.whiteTwo, fontFamily: 'MontserratSemiBold' }}>
                    Crear
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
        marginBottom: 20,
        position: "absolute",
        flexDirection: "column",
        bottom: 0,
    },
})