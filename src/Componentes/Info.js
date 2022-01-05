import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Info(props){  
  const {fillColor} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g transform="translate(2 2)" fill="none" fill-rule="evenodd">'+
  '<path stroke="'+fillColor+'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M10 10v4"/>'+
  '<path d="M11 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="'+fillColor+'"/>'+
  '<rect stroke="'+fillColor+'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" rx="10"/>'+
  '</g></svg>';
  const Info = () => <SvgXml xml={svgMarkup} 
  width={25} height={25} fill={'red'}
/>;  

  return <Info />;
}