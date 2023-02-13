import React from "react"
import {StyleSheet} from "react-native";
import * as Progress from 'react-native-progress';
const LineSection=()=>{
    return(
<>
<view style={style.body}>
<Progress.Bar style={style.progressStyle} />
</view>
</>
    )
}
const style = StyleSheet.create({
   progressStyle:{
    backgroundColor:'white',
       width:500,
       height:7,
     },
     body:{
        marginBottom:7,
        marginTop:7,
       
     }
     
   })
 
export default LineSection;