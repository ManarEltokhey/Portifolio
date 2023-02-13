import React from "react"
import {Text,Image,StyleSheet,Linking} from "react-native"

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const HeroSection = () => {

  return (
    <>
    <view style={style.body}> 
<Image source={require('../assets/pperson.jpg')} style={style.img}/>
        <Text style={style.text}> Manar Ahmed Shawqy </Text>
        <Text style={style.text2}> Frontend Developer </Text> 
        <view style={style.icons}>
      <MaterialCommunityIcons name="facebook" color={"#f2bc0a"} size={30} onPress={() => Linking.openURL('https://www.facebook.com/')} />
        <MaterialCommunityIcons name="twitter" color={"#f2bc0a"} size={30} onPress={() => Linking.openURL('https://www.twitter.com/')} />
        <MaterialCommunityIcons name="instagram" color={"#f2bc0a"} size={30} onPress={() => Linking.openURL('https://www.instagram.com/')}/>
        <MaterialCommunityIcons name="linkedin" color={"#f2bc0a"} size={30}  onPress={() => Linking.openURL('https://www.linkedin.com/')}/>
        <MaterialCommunityIcons name="whatsapp" color={"#f2bc0a"} size={30} onPress={() => Linking.openURL('https://www.whatsapp.com/')} />
        </view>
        
  
  </view>
    </> 
  )

 
  

}

const style = StyleSheet.create({
    img: {
      width:200,
      height:200,
      borderRadius:200,
    },
    body:{
      backgroundColor:'#61605e',
      justifyContent: 'center',
      width:500,
      display:'flex',
      flexDirection:'column',
      alignItems:'center'

    },
    text:{
      color:'white',
      fontWeight:'bold',
      fontSize:20,
      marginTop:5
     },
     text2:{
      color:'#a39493',
      fontWeight:'bold',
      fontSize:15,
      marginTop:10,
      marginBottom:5
     },
     icons:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      marginBottom:5,
     }
  })


export default HeroSection
