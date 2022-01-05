
import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native-elements";
import Info from "../Info";
import Pause from "../Pause";
import Start from "../Start";
import Check from "../Check";
import TareasPopup from "../TareasPopup";



export default function ListTareas(props) {

  const { data } = props

  const [visiblePopup, setVisiblePopup] = useState(false)

  const [titleTarea, setTitleTarea] = useState(null)
  const [descriptionTarea, setDescriptionTarea] = useState(null)

  const showTarea =(title, description) =>
  {
    setTitleTarea(title)
    setDescriptionTarea(description)
    setVisiblePopup(true)
  }

  const navigation = useNavigation();

  return (
    <View
    >
      <ScrollView
        style={{ height: '60%' }}
      >


        {data.map((card, i) => {
          return (
            <View
              style={{ justifyContent: 'center', alignItems: 'center' }}

            >


              <View style={(card.start) ? styles.container_tarea_start : styles.container_tarea}>
                <View
                  style={{ flexDirection: 'row', alignItems: 'center' }}
                >


              <TouchableOpacity
              onPress={() =>
                showTarea(card.nombre,card.description)
              }
              >

                  <Info
                     fillColor={'rgb(50,49,55)'}
                  />
              </TouchableOpacity>


                  <Text style={{ alignItems: 'flex-start', color: 'rgb(169,11,47)', fontWeight: 'bold' }}>
                    {card.nombre}
                  </Text>
                </View>

                {card.start ?
                  (<View
                    style={{ flexDirection: 'row' }}
                  >
                    <Pause
                      fillColor={'rgb(33,32,37)'}
                    />
                    <Check
                      fillColor={'rgb(169,11,47)'}
                    />
                  </View>)
                  :
                  (<View>
                    <Start
                      fillColor={'rgb(33,32,37)'}
                    />
                  </View>)
                }

              </View>
            </View>

          );
        }
        )}

      </ScrollView>

      <TareasPopup
        isVisible={visiblePopup}
        title={titleTarea}
        description={descriptionTarea}
        setVisiblePopup ={setVisiblePopup}

      >
      </TareasPopup>


    </View>

  );
}

const styles = StyleSheet.create({
  login_input: {
    color: 'red',
    width: '80%'
  },
  container_tarea:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10, alignItems: 'center',
    alignContent: 'center',
  },
  container_tarea_start:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 10, alignItems: 'center',
    alignContent: 'center',
    borderWidth: 1,
    borderColor: 'yellow'
  }
})
