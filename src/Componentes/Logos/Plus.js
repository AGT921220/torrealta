import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Plus(props){  
  const {fillColor,width,height} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g transform="translate(2 2)" stroke="#A90B2F" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">'+
  '    <rect width="20" height="20" rx="10"/>'+
  '    <path d="M10 4v11.31M15.655 9.655H4.345"/>'+
  '</g></svg>';
  const Plus = () => <SvgXml xml={svgMarkup} 
  width={(width)?width:30} height={(height)? height:30} 
/>;  

  return <Plus />;
}