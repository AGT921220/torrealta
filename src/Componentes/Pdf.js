import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Pdf(props){  
  const {fillColor} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g stroke="'+fillColor+'" stroke-width="1.335" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">'+
  '<path d="M19.21 10.696V2H9.369L4 7.217V22h15.21v-2.609"/>'+
  '<path d="M4 7.217h5.368V2M8.474 17.652v-5.217h1.342c.74 0 1.342.584 1.342 1.304 0 .72-.601 1.305-1.342 1.305H8.474M12.947 17.652v-5.217h1.044c1.154 0 2.088.778 2.088 1.739v1.74c0 .96-.934 1.738-2.088 1.738h-1.044 0z"/>'+
  '<g><path d="M21 12.435h-2.684v5.217M18.316 15.044h1.789"/></g></g></svg>';
  const Pdf = () => <SvgXml xml={svgMarkup} 
  width={30} height={40} 
/>;  

  return <Pdf />;
}