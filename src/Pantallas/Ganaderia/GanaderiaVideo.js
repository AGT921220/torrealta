import React, { useRef } from 'react'
import { StyleSheet, View, StatusBar, Dimensions, Image, ScrollView } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Text } from 'react-native-elements';
import { Input } from 'react-native-elements/dist/input/Input';
import HeaderGanaderia from './HeaderGanaderia';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import Toast from "react-native-easy-toast";
import { Video, AVPlaybackStatus } from 'expo-av';


export default function GanaderiaVideo() {
  const toastRef = useRef();
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (

    <View style={styles.container}>

      <StatusBar backgroundColor="#000000"></StatusBar>
      <HeaderGanaderia>

      </HeaderGanaderia>



<Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />

      <Toast ref={toastRef} position="center" opacity={0.8}></Toast>

    </View >

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    marginTop:50,
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})