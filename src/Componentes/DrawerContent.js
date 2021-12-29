import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Icon } from "react-native-elements";

export default function DrawerContent(props) {

  const windowWidth = Dimensions.get('window').width;

  return (
    <View style={{ flex: 1 }}>


      <DrawerContentScrollView {...props}>

        <View style={styles.drawerContent}>

          <View style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Inicio"
              onPress={() => {
                props.navigation.navigate("inicio");
              }}
            />

            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="web"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Peticiones"
              onPress={() => {
                props.navigation.navigate("peticiones");
              }}
            />



            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="arrow-down"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Scroll"
              onPress={() => {
                props.navigation.navigate("scroll");
              }}
            />






            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="google-maps"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Mapa"
              onPress={() => {
                props.navigation.navigate("map");
              }}
            />


            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="filter"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Filtro"
              onPress={() => {
                props.navigation.navigate("filtro");
              }}
            />


            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="video"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Video"
              onPress={() => {
                props.navigation.navigate("videoscreen");
              }}
            />



            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="image"
                  color={color}
                  size={size}
                  type="material-community"
                />
              )}
              label="Imagen"
              onPress={() => {
                props.navigation.navigate("imagen");
              }}
            />
          </View>
        </View>


      </DrawerContentScrollView>
      <View style={styles.bottomDrawerSection}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  drawerItem: { width: '80%', marginRight: 0 },
  drawerTotal: {
    fontWeight: 'bold', fontSize: 18, alignSelf: 'center', flex: 1, width: '20%', alignItems: 'flex-start', textAlign: 'center'
  },
  drawerTotalUnder: {
    color: 'red'
  }

});
