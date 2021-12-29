import React, { useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Icon, Input } from 'react-native-elements';

export default function HeaderApp(props) {

  const navigation = useNavigation();
  const toastRef = useRef();

  let { title } = props;



  return (

    <View style={styles.nabvar}>
<View style={{width:'80%'}}>
<Input placeholder="¿Buscas algo en particular?"
        inputStyle={{ color: 'black' }}

      ></Input>
</View>
    

    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nabvar: {
    backgroundColor: "#ffffff",
    height: 50,
    flexDirection: "row",
    marginTop:Platform.OS ==='ios' ? 20: 0,
    flexDirection:'row'
  }})
