import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Pause(props){  
  const {fillColor} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
  '<g stroke="'+fillColor+'" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">'+
  '<path d="M12 22C6.516 22 2 17.323 2 12S6.516 2 12 2s10 4.677 10 10-4.516 10-10 10z"/>'+
  '<path d="M8 9.015C8 8.455 8.451 8 9.015 8h.431c.56 0 1.016.459 1.016 1.015v6.97c0 .56-.452 1.015-1.016 1.015h-.43C8.454 17 8 16.541 8 15.985v-6.97zM13.538 9.015c0-.56.452-1.015 1.016-1.015h.43C15.546 8 16 8.459 16 9.015v6.97c0 .56-.451 1.015-1.015 1.015h-.431c-.56 0-1.016-.459-1.016-1.015v-6.97z"/>'+
  '</g></svg>';
  const Pause = () => <SvgXml xml={svgMarkup} 
  width={30} height={30} 
/>;  

  return <Pause />;
}