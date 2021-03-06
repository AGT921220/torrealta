import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Check(props){  
  const {fillColor} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g transform="translate(2 2)" stroke="'+fillColor+'" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">'+
  '<rect width="20" height="20" rx="10"/>'+
  '<path d="m14.923 7-5.8 5.8L6 9.677"/></g></svg>';
  const Check = () => <SvgXml xml={svgMarkup} 
  width={30} height={30} 
/>;  

  return <Check />;
}