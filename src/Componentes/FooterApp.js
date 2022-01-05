import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Linking, TouchableOpacity } from 'react-native'
import {useRoute} from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { Icon } from 'react-native-elements';


export default function Footer() {

    const navigation = useNavigation();
    const route = useRoute();

    return (
        <View style={styles.container} >



            <View style={styles.containerLinks}>

            <TouchableOpacity  onPress={() => navigation.navigate("informes")}>
            <Icon 
                style={{resizeMode: "contain"}}
                color={(route.name=='informes') ? 'red' : 'gray'}
                  name="poll"
                  size={50}
                  type="material-community"
                />
            </TouchableOpacity>            


            <TouchableOpacity  onPress={() => navigation.navigate("inicio")}>
            {/* <Icon 
                style={{resizeMode: "contain"}}
                color={(route.name=='inicio') ? 'red' : 'gray'}
                  name="cow"
                  size={50}
                  type="material-community"
                /> */}
                <Image
//                    color={(route.name=='inicio') ? 'blue' : 'gray'}
                    style={{ width: 35, height: 35,color:'red'}}
                    source={require('../../assets/vaca.svg')}
                >
                </Image>
            </TouchableOpacity>            

            <TouchableOpacity  onPress={() => navigation.navigate("tareas")}>
            <Icon 
                style={{resizeMode: "contain"}}
                color={(route.name=='tareas') ? 'red' : 'gray'}
                  name="view-list"
                  size={50}
                  type="material-community"
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
        height: 50,
        flex: 1,
        width: "100%",
        justifyContent: 'space-around', //Centered vertically
        alignItems: 'center', // Centered horizontally
    },
    containerLinks: {
        flexDirection: "row",
        bottom: 0,
        height: 50,
        flex: 1,
        width: "100%",
        backgroundColor: "#ffffff",
        justifyContent: 'space-around', //Centered vertically
        alignItems: 'center', // Centered horizontally

    },
    text:{
        color:'#ffffff'
    },
    active:
    {
        color:'green'
    }
})