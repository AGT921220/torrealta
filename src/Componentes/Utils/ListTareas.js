
import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from "@react-navigation/native";



export default function ListTareas(props) {

  const { data } = props

  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.ganaderia_top}>
        <Text style={{ width: '80%' }}>
          Tareas
        </Text>
        <Text style={{ width: '20%' }}>
          Accion
        </Text>
      </View>

      <ScrollView
        style={{ height: '60%' }}
      >


        {data.map((card, i) => {
          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <Text style={{ width: '80%' }}>
                {card.show ? (
                  <Icon
                  onPress={() => {
                    navigation.navigate('tarea-detail', {
                       text:card.nombre,
                     });
      
                     //switchShowVideos()
                   }}
     
                    style={{ resizeMode: "contain" }}
                    name="view-list"
                    size={25}
                    type="material-community"
                  />
                ) :
                  <Icon
                    style={{ resizeMode: "contain" }}
                    name="view-list"
                    size={25}
                    color='gray'
                    type="material-community"
                  />

                }
                {card.nombre}
              </Text>
              <View style={{ width: '20%', flexDirection: 'row' }}>
                <TouchableOpacity>
                  <Text>Empezar</Text>
                </TouchableOpacity>
              </View>

            </View>

          );
        }
        )}

      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  login_input: {
    color: 'red',
    width: '80%'
  }
})
