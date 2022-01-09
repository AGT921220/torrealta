import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Calendar(props){  
  const {fillColor,width,height} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g fill="none" fill-rule="evenodd">'+
  '<path d="M12 21c-6.934 0-8-1.875-8-7.5S5.066 6 12 6s8 1.875 8 7.5-1.066 7.5-8 7.5zM5 11h14M9 4v4M15 4v4" stroke="#A90B2F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+
  '<path d="M10 15a1 1 0 1 1-2 0 1 1 0 1 1 2 0M13 15a1 1 0 1 1-2 0 1 1 0 1 1 2 0M16 15a1 1 0 1 1-2 0 1 1 0 1 1 2 0" fill="#A90B2F"/>'+
  '</g></svg>';
  const Calendar = () => <SvgXml xml={svgMarkup} 
  width={(width)?width:30} height={(height)? height:30} 
/>;  

  return <Calendar />;
}