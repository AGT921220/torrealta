import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Tareas(props){  
  const {fillColor} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd">'+
      '<path stroke="'+fillColor+'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M19.009 5.486h-7.014M19.009 11.486h-7.014M19.009 17.986h-7.014"/>'+
      '<path d="M7.979 5.49a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM7.979 11.77a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0zM7.979 18.05a1.49 1.49 0 1 1-2.98 0 1.49 1.49 0 0 1 2.98 0z" fill="'+fillColor+'"/>'+
  '</g></svg>';
  const Tareas = () => <SvgXml xml={svgMarkup} 
  width={35} height={35} fill={'red'}
/>;  

  return <Tareas />;
}