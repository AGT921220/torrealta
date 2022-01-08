import React from "react";
import { SvgXml } from "react-native-svg";  
export default function DownArrow(props){  
  const {fillColor} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<path d="m5 9 7 6 7-6" stroke="'+fillColor+'" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const DownArrow = () => <SvgXml xml={svgMarkup} 
  width={30} height={30} 
   rotateX= {'270deg' }
/>;  

  return <DownArrow />;
}