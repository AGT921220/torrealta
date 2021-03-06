import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Edit(props){  
  const {fillColor,width,height} = props

  

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g fill="none" fill-rule="evenodd">'+
  '<path d="M8.5 14.587c-1.226-1.226.118-2.946 3.458-6.287C15.3 4.959 16.274 4.36 17.5 5.587c1.226 1.226.628 2.2-2.713 5.54-3.341 3.343-5.061 4.686-6.287 3.46z" stroke="'+fillColor+'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>'+
  '<path d="M6.707 17.794a.999.999 0 1 1-1.414-1.414.999.999 0 1 1 1.414 1.414" fill="'+fillColor+'"/>'+
  '<path stroke="'+fillColor+'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="m9.648 10.734 2.704 2.705"/>'+
  '</g></svg>';
  const Edit = () => <SvgXml xml={svgMarkup} 
  width={(width)?width:30} height={(height)? height:30} 
/>;  

  return <Edit />;
}