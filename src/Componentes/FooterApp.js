import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { Icon } from 'react-native-elements';
import Vaca from './Vaca'
import Tareas from './Tareas';


export default function Footer() {

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container} >



            <View style={styles.containerLinks}>

                <TouchableOpacity onPress={() => navigation.navigate("informes")}>
                    <Icon
                        style={{ resizeMode: "contain" }}
                        color={(route.name == 'informes') ? '#A90B2F' : 'rgb(33,32,37)'}
                        name="poll"
                        size={35}
                        type="material-community"
                    />
                    <Text
                        style={{color:(route.name == 'informes') ? 'rgb(169,11,47)' : 'rgb(33,32,37)'}}
                    >
                        Informes
                    </Text>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => navigation.navigate("inicio")}>
                    <Vaca
                        fillColor={(route.name == 'inicio') ? '#A90B2F' : 'rgb(33,32,37)'}
                    />

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("tareas")}>
                    <Tareas
                        fillColor={(route.name == 'tareas') ? '#A90B2F' : 'rgb(33,32,37)'}
                    />

                </TouchableOpacity>



            </View>


        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flexDirection: "column",
        bottom: 0,
        height: 100,
        flex: 1,
        width: "100%",
        justifyContent: 'space-around', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
    containerLinks: {
        flexDirection: "row",
        paddingBottom: 30,
        bottom: 0,
        height: 50,
        flex: 1,
        width: "100%",
        backgroundColor: "#ffffff",
        justifyContent: 'space-around', //Centered vertically
        alignItems: 'center', // Centered horizontally

    },
    text: {
        color: '#ffffff'
    },
    active:
    {
        color: 'green'
    }
})