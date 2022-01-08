import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Macho(props){  
  const {fillColor,width,height} = props

  

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g transform="scale(1 -1) rotate(-45 -16.35 -9.45)" stroke="'+fillColor+'" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">'+
  '<rect width="11" height="10.418" rx="5.209"/>'+
  '<path d="M5.5 19v-7.93M8.412 16.242 5.5 19M5.5 19l-2.912-2.758"/></g></svg>';
  const Macho = () => <SvgXml xml={svgMarkup} 
  width={(width)?width:30} height={(height)? height:30} 
/>;  

  return <Macho />;
}