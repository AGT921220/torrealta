import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native'
import { Overlay } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Icon } from 'react-native-elements/dist/icons/Icon';


export default function Overlaycomponent(props) {
    const { isVisible, setVisibleOverlay } = props;

    const navigation = useNavigation();

    return (
        <Overlay
            isVisible={isVisible} overlayStyle={styles.overlay}
        >
            <View style={styles.view}>

                <TouchableOpacity
                    onPress={() => setVisibleOverlay(false)}
                >
                    <Icon
                        style={{ resizeMode: "contain" }}
                        name="arrow-left"
                        size={50}
                        type="material-community"
                    />


                    <View style={{ width: 100 }}>
                        <Image
                            source={require('../../../assets/profile-empty.png')}
                        />
                    </View>

                    <Text
                        onPress={() => navigation.navigate("login")}

                    >
                        Cerrar Sesión
                    </Text>
                </TouchableOpacity>

            </View>
        </Overlay>

    )
}

const styles = StyleSheet.create({

    overlay: {
        //        backgroundColor: "rgba(0,0,0,0.6)",
        backgroundColor: "transparent",

        width: "100%",
        height: Dimensions.get("window").height,
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        marginTop: 20,
        fontSize: 24,
        textTransform: "uppercase"
    }

})
