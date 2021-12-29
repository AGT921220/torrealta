import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, Linking, TouchableOpacity, AsyncStorage } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import Overlaycomponent from './Utils/OverlayComponent';

export default function HeaderApp(props) {

  const navigation = useNavigation();
  const toastRef = useRef();

  const [visibleOverlay, setVisibleOverlay] = useState(false)

  let { title } = props;


  const toggleOverlay = ()=>{
      setVisibleOverlay(true)
  }

  return (

    <View style={styles.header}>

          <Image style={styles.imgHeader}
            source={require('../../assets/main_icon.png')}
          />        

      <View style={{width:'80%',flex:1,justifyContent:'center'}}>
      <Text style={styles.textHeader}>{title}</Text>
      </View>

    <View style={styles.header_user}>
     <Image
         source={require('../../assets/profile-empty.png')}
        />

      <Text
      onPress={() => toggleOverlay()}

      >
        Alfredo
      </Text>
    </View>

 <Overlaycomponent
 isVisible={visibleOverlay}
 setVisibleOverlay ={setVisibleOverlay}
 >

 </Overlaycomponent>
    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#555555",
    height: 50,
    flexDirection: "row",
    marginTop:Platform.OS ==='ios' ? 20: 0,
  },
  imgHeader: {
    width: "15%",
    height:'100%',
    backgroundColor:'red'

  },
  textHeader: {
    color: "#FFFFFF",
    alignItems: "center",
    fontSize: 18,
    textAlign: "center",
    alignSelf: "center",
  },
  header_user:{
    width:'25%'
  }
})
