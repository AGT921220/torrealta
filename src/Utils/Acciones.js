//import { firebaseapp } from "./Firebase";
import { Platform, Linking,AsyncStorage } from "react-native";
import * as firebase from "firebase";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
//import "firebase/firestore";
import moment from "moment";


const BASE_URL = 'https://promocionalesaps.com.mx/api/'


export const getCategories = async (setCategories) => {

  let items = []
  await fetch(BASE_URL + 'categories', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseData) => {
      Object.entries(responseData.success).forEach(([key, value]) => {
        items.push(value)
        });
        
     setCategories(items)
    })
    .catch((error) => {
      console.error(error);
    })
}

export const getToken = async () => {
  let token = "";

  try {

    if (Constants.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        //alert('Failed to get push token for push notification!');
        return 'Failed to get';
      }
      //     token = (await Notifications.getExpoPushTokenAsync()).data;
      token = (await Notifications.getDevicePushTokenAsync()).data;
    } else {
      //alert('Must use physical device for Push Notifications');
      return 'Must use physival device';
    }
  } catch (error) {
    return error
  }

  try {
    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }
  }
  catch (error) {
    return error
  }
  return token;
};
