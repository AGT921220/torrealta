import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Muleta(props){  
  const {fillColor,width,height} = props

  

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g stroke="'+fillColor+'" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">'+
  '<path d="M14.5 4a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0h0z"/>'+
  '<path d="M7.5 11a4.5 4.5 0 0 1 9 0"/>'+
  '<path d="M12 21.556c5.458 0 8 1.444 8 1.444V10s-2.542 1.444-8 1.444S4 10 4 10v13s2.542-1.444 8-1.444h0z"/>'+
  '</g></svg>';
  const Muleta = () => <SvgXml xml={svgMarkup} 
  width={(width)?width:30} height={(height)? height:30} 
/>;  

  return <Muleta />;
}