
import React from "react";
import { Input } from 'react-native-elements';

import { Text, View,TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native'
export default function CurrentTask() {


    return (
        <View>
            <Text
            >Tarea Actual</Text>


            <View
                style={{ flexDirection: 'row' }}
            >
                <Text
                    style={{ width: '70%' }}
                >
                    Reparar la cerca
                </Text>

                <View
                    style={{ flexDirection: 'row' }}
                >
                    <TouchableOpacity>
                        <Text>Pausar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Finalizar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    login_input: {
        color: 'red',
        width: '80%'
    }
})
