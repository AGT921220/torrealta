import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Xls(props){  
  const {fillColor} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g stroke="'+fillColor+'" stroke-width="1.335" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">'+
  '<path d="M19.21 10.696V2H9.369L4 7.217V22h15.21v-2.609"/>'+
  '<path d="M4 7.217h5.368V2M8.474 12.435l3.579 5.217M12.053 12.435l-3.58 5.217M17.421 16.348c0 .72.8 1.304 1.79 1.304.988 0 1.789-.583 1.789-1.304 0-.72-.8-1.304-1.79-1.304-.988 0-1.789-.584-1.789-1.305 0-.72.8-1.304 1.79-1.304.988 0 1.789.584 1.789 1.304"/>'+
  '<g><path d="M13.842 12.463v4.783M16.527 17.567h-2.685"/></g></g></svg>';
  const Xls = () => <SvgXml xml={svgMarkup} 
  width={30} height={40} 
/>;  

  return <Xls />;
}