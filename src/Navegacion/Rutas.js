import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../Componentes/DrawerContent";

import Login from "../Pantallas/Login";
import Inicio from "../Pantallas/Inicio";
// import Peticiones from "../Pantallas/Peticiones";
// import Scroll from "../Pantallas/Scroll";
// import Map from "../Pantallas/Map";
// import Filtro from "../Pantallas/Filtro";
// import Imagen from "../Pantallas/Imagen";
// import VideoScreen from "../Pantallas/VideoScreen";
import FiltrosGanaderia from '../Pantallas/Filtros/FiltrosGanaderia';
import DetalleGanaderia from '../Pantallas/Ganaderia/DetalleGanaderia';
import GanaderiaHijos from '../Pantallas/Ganaderia/GanaderiaHijos';
import GanaderiaArbol from '../Pantallas/Ganaderia/GanaderiaArbol';
import GanaderiaVideo from '../Pantallas/Ganaderia/GanaderiaVideo';
import Informes from '../Pantallas/Informes';
import Tareas from '../Pantallas/Tareas';
import Generales from '../Pantallas/Generales';
import SinTerminar from '../Pantallas/SinTerminar';
import TareaDetail from '../Pantallas/TareaDetail';
import Forgot from "../Pantallas/Forgot";
import CrearTarea from "../Pantallas/CrearTarea";


const Drawer = createDrawerNavigator();

export default function Rutas() {

  return (
    <NavigationContainer>

      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
      >


        <Drawer.Screen
          name="login"
          component={Login}>
        </Drawer.Screen>


        <Drawer.Screen
          name="forgot"
          component={Forgot}>
        </Drawer.Screen>

        <Drawer.Screen
          name="inicio"
          component={Inicio}>
        </Drawer.Screen>





        <Drawer.Screen
          name="filtros-ganaderia"
          component={FiltrosGanaderia}>
        </Drawer.Screen>
        <Drawer.Screen
          name="detalle-ganaderia"
          component={DetalleGanaderia}>
        </Drawer.Screen>

        <Drawer.Screen
          name="ganaderia-hijos"
          component={GanaderiaHijos}>
        </Drawer.Screen>

        <Drawer.Screen
          name="ganaderia-arbol"
          component={GanaderiaArbol}>
        </Drawer.Screen>

        <Drawer.Screen
          name="ganaderia-video"
          component={GanaderiaVideo}>
        </Drawer.Screen>

        <Drawer.Screen
          name="informes"
          component={Informes}>
        </Drawer.Screen>

        <Drawer.Screen
          name="tareas"
          component={Tareas}>
        </Drawer.Screen>

        <Drawer.Screen
          name="crear-tarea"
          component={CrearTarea}>
        </Drawer.Screen>

        <Drawer.Screen
          name="generales"
          component={Generales}>
        </Drawer.Screen>

        <Drawer.Screen
          name="sinterminar"
          component={SinTerminar}>
        </Drawer.Screen>

        <Drawer.Screen
          name="tarea-detail"
          component={TareaDetail}>
        </Drawer.Screen>


      </Drawer.Navigator>

    </NavigationContainer>
  );
}
