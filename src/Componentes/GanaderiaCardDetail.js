import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Icon, Input, Text } from 'react-native-elements';
import Colors from './Utils/Colors';

export default function GanaderiaCardDetail(props) {

  const navigation = useNavigation();
  const toastRef = useRef();




  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
    <View style={styles.cardDescriptionContent}>
      <View style={styles.cardDescriptionItem}>
        <View>
          <Text style={styles.cardDescriptionItemNumber}>
            6,6
          </Text>
          <Text style={styles.cardDescriptionItemText}>
            Distancia
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescriptionItemNumber}>
            6,6
          </Text>
          <Text style={styles.cardDescriptionItemText}>
            Galope
          </Text>
        </View>
      </View>
    </View>



    <View style={styles.cardDescriptionContent}>
      <View style={styles.cardDescriptionItem}>
        <View>
          <Text style={styles.cardDescriptionItemNumber}>
              12
          </Text>
          <Text style={styles.cardDescriptionItemText}>
            Fijesa
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescriptionItemNumber}>
              12
          </Text>
          <Text style={styles.cardDescriptionItemText}>
            Humilla
          </Text>
        </View>
      </View>
    </View>


    <View style={styles.cardDescriptionContent}>
      <View style={styles.cardDescriptionItem}>
        <View>
          <Text style={styles.cardDescriptionItemNumber}>
            13
          </Text>
          <Text style={styles.cardDescriptionItemText}>
            Prontitud
          </Text>
        </View>
        <View>
          <Text style={styles.cardDescriptionItemNumber}>
            13
          </Text>
          <Text style={styles.cardDescriptionItemText}>
            Empuja
          </Text>
        </View>
      </View>
    </View>
  </View>



  )
}

const styles = StyleSheet.create({
  cardDescriptionItemNumber:{
    color:Colors.primario,
    textAlign:'center',
    fontFamily:'MontserratBold',
    fontSize:24
  },
  cardDescriptionItemText:{
    textAlign:'center',
    color:Colors.grisMedio,
    fontFamily:'MontserratSemiBold',
    fontSize:12
  }
})
