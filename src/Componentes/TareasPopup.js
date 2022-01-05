import React, { useRef } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { Button, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TareasPopup(props) {

  const navigation = useNavigation();
  const toastRef = useRef();

  const {isVisible,title,description,setVisiblePopup} =props;

  return (

    <Overlay
    isVisible={isVisible} overlayStyle={styles.overlay}
>   
    <View style={styles.view}>
      <Text
        style={{color: "rgb(169,11,47)",fontWeight:'bold',fontSize:20,marginBottom:10}}
      >
        {title}
      </Text>
      <Text
        style={{color:'rgb(50,49,55)',textAlign:'center'}}
      >
        {description}
      </Text>

      <Text
              style={{color: "rgb(169,11,47)",fontSize:16,marginTop:20}}

            onPress={() =>
               setVisiblePopup(false)
            }
      >
        OK
      </Text>
    </View>


</Overlay>

  )
}

const styles = StyleSheet.create({

  overlay:{
      backgroundColor: "rgba(169,11,47,0.8)",
      backgroundColor:'#b73956',
      width:"100%",
      height:Dimensions.get("window").height,
      justifyContent:'center',
      alignItems:'center'
  },
  view:{
      justifyContent:"center",
      alignItems:"center",
      width:Dimensions.get("window").width*0.8,
      height:Dimensions.get("window").width*0.4,
      backgroundColor:'#ffffff',
      borderRadius:10
      // flex: 1,
      // justifyContent: "center",
      // alignItems: "center"
  },
  text:{
      color:"white",
      marginTop:20,
      fontSize:24,
      textTransform:"uppercase"
  }

})
