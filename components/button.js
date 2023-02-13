import React from "react"
import {StyleSheet, Text} from "react-native"
import LineSection from "./line";
import { Linking } from 'react-native';
import { Button } from '@rneui/themed';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ButtonSection =()=>{
    return(
      <>
      <LineSection/>
      <view style={style.body}>
      <Button radius={'sm'} type="solid" style={style.text} color={"#f2bc0a"}>
         Download
      <MaterialCommunityIcons name="download" color={"white"} size={20} />
</Button>
      
      </view>
      </>
    )
}
const style = StyleSheet.create({
   text:{
    color:'white',
    fontWeight:'bold',
    marginBottom:10,
    fontSize:20,
    width:200,
    justifyContent:'center',
    marginLeft:130,
 

   },
    body:{
        backgroundColor:'#61605e',
      justifyContent: 'center',
      width:50,
      alignItems:'center',
      marginLeft:200,
    },
    
  })

export default ButtonSection;