import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Start(props){  
  const {fillColor} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g stroke="'+fillColor+'" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">'+
      '<path d="M12 22C6.516 22 2 17.323 2 12S6.516 2 12 2s10 4.677 10 10-4.516 10-10 10z"/>'+
      '<path d="M9 7.479c0-.442.304-.608.676-.371l7.044 4.463c.374.237.373.621 0 .857l-7.044 4.464c-.373.237-.676.072-.676-.371V7.479z"/>'+
  '</g></svg>';
  const Start = () => <SvgXml xml={svgMarkup} 
  width={30} height={30} 
/>;  

  return <Start />;
}