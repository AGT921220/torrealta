import React from "react";
import { SvgXml } from "react-native-svg";  
export default function Vaca(props){  
  const {fillColor} = props

  const svgMarkup = '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">'+
 '<g fill="none" fill-rule="evenodd">'+
 '      <path d="M8.957 17.522c.584 0 .87.5.87.5M8.957 5.478C7.907 5.478 4.01 4.744 2.87 2c.253 1.304.67 5.217 4.782 5.217" stroke="'+fillColor+'" stroke-width="1.335" stroke-linecap="round" stroke-linejoin="round"/>'+
  '<path d="M6.348 10.696C4.39 10.696 2 8.956 2 8.956 3.358 6.81 5.804 7.218 7.217 7.218M16.348 16.783l-.435-1.74c0-1.593 1.74-2.21 1.74-3.478 0-1.268-.87-1.558-.87-2.608 0-2.174-2.428-4.348-4.348-4.348h-.87c-1.92 0-4.348 2.174-4.348 4.348 0 1.05-.87 1.34-.87 2.608s1.74 1.885 1.74 3.478l-.435 1.74" stroke="'+fillColor+'" stroke-width="1.335" stroke-linecap="round" stroke-linejoin="round"/>'+
  '<path d="M12 14.174c1.549 0 1.522 1.087 2.174 1.739.652.652 2.609-.055 2.609 2.609 0 1.548-1.658 1.739-2.61 1.739-.95 0-1.14-.87-2.173-.87-1.033 0-1.223.87-2.174.87-.951 0-2.609-.19-2.609-1.74 0-2.663 1.957-1.956 2.61-2.608.651-.652.624-1.74 2.173-1.74h0z" stroke="'+fillColor+'" stroke-width="1.335" stroke-linecap="round" stroke-linejoin="round"/>'+
  '<path d="M15.043 20.26C14.242 21.064 13.766 22 12 22c-1.766 0-2.242-.937-3.043-1.74M15.043 17.522c-.584 0-.87.5-.87.5M15.043 5.478c1.05 0 4.946-.734 6.087-3.478-.253 1.304-.67 5.217-4.782 5.217" stroke="'+fillColor+'" stroke-width="1.335" stroke-linecap="round" stroke-linejoin="round"/>'+
  '<path d="M17.652 10.696c1.957 0 4.348-1.74 4.348-1.74-1.36-2.146-3.804-1.739-5.217-1.739" stroke="'+fillColor+'" stroke-width="1.335" stroke-linecap="round" stroke-linejoin="round"/>'+
  '<path d="M9.826 11.565a.87.87 0 1 1-1.74 0 .87.87 0 0 1 1.74 0zM15.913 11.565a.87.87 0 1 1-1.74 0 .87.87 0 0 1 1.74 0z" fill="'+fillColor+'"/>'+
  '</g></svg>';
  const Vaca = () => <SvgXml xml={svgMarkup} 
  width={35} height={35} fill={'red'}
/>;  

  return <Vaca />;
}