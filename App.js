import React, {useRef, useEffect, useState} from 'react';
import { StyleSheet} from 'react-native';
import { LogBox } from 'react-native';
import * as Notifications from "expo-notifications";
import Rutas from './src/Navegacion/Rutas';

LogBox.ignoreLogs([
"Each child in a list should have a unique"
]);

export default function App () {
    
  return <Rutas/>;

}

const styles = StyleSheet.create({

});
