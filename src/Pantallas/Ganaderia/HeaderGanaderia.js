import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Linking, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Icon } from 'react-native-elements/dist/icons/Icon';

export default function HeaderGanaderia() {

    const navigation = useNavigation();

    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', width: '70%' }}>
                <Icon
                    onPress={() => navigation.navigate("inicio")}

                    style={{ resizeMode: "contain" }}
                    name="arrow-left"
                    size={50}
                    type="material-community"
                />

                <Text>
                    CHARRO
                </Text>
            </View>

            <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', width: '30%' }}>

                <TouchableOpacity onPress={() => navigation.navigate("ganaderia-hijos")}>
                    <Icon

                        style={{ resizeMode: "contain" }}
                        name="cow"
                        size={25}
                        type="material-community"
                    />
                    <Text>
                        Hijos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("ganaderia-arbol")}>
                    <Icon

                        style={{ resizeMode: "contain" }}
                        name="cow"
                        size={25}
                        type="material-community"
                    />
                    <Text>
                        Arbol
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("ganaderia-video")}>
                    <Icon

                        style={{ resizeMode: "contain" }}
                        name="cow"
                        size={25}
                        type="material-community"
                    />
                    <Text>
                        Video
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}