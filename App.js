import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { LogBox } from 'react-native';
import * as Notifications from "expo-notifications";
import Rutas from './src/Navegacion/Rutas';
import { useFonts, Font } from 'expo-font';


LogBox.ignoreLogs([
  "Each child in a list should have a unique"
]);

export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),

  });

  const primaryColor = 'rgb(169,11,47)'

  if (!loaded) {
    return null;
  }

  return <Rutas />;

}

const styles = StyleSheet.create({

});
