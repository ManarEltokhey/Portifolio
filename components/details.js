import { color } from "@rneui/base"
import React from "react"
import {StyleSheet, Text} from "react-native"
import LineSection from "./line"
const DetailsSection = ()=>{
return(
    <>
     <LineSection/>
     {/* <view  style={style.full}> 
    <view style={style.body}>
    <view><Text style={style.text}>Age: </Text></view>
    <Text style={style.text2}>22</Text></view>
    
    <br/>
    <view style={style.body}>
    <Text style={style.text}>Freelancer: </Text>
    <Text style={style.text2}>Available</Text>
    </view>
    <br/>
    <view style={style.body}>
    <Text style={style.text}>Address: </Text>
    <Text style={style.text2}>Mallawi,Elminya</Text>
    </view>
    <br/>
    <view style={style.body}>
    <Text style={style.text}>Phone: </Text>
    <Text style={style.text2}>01553784216</Text>
    </view>
    </view> */}
    <view style={style.full}>
        <view>
            <view style={style.body}>
            <Text style={style.text}>Age:</Text>
           <Text style={style.text2}>22</Text></view>
        </view>
        <br/>
        <view>
            <view style={style.body}>
            <Text style={style.text}>Freelancer:</Text>
           <Text style={style.AvaText}>Available</Text></view>
        </view>
        <br/>
        <view>
            <view style={style.body}>
            <Text style={style.text}>Address:</Text>
           <Text style={style.text2}>Elminya</Text></view>
        </view>
        <br/>
        <view>
            <view style={style.body}>
            <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold',backgroundColor:'#f2bc0a',color:'#FFFFFF',width:250,paddingTop:5, paddingRight:5,marginBottom:5}}>Phone:</Text>
           <Text style={style.text2}>01553784216</Text></view>
        </view>
    </view>
    </>
)
}
const style=StyleSheet.create({
    text:{
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold',
        backgroundColor:'#f2bc0a',
        color:'#FFFFFF',
        width:250,
        paddingTop:10,
       paddingRight:5

    },
    text2:{
        fontSize:20,
        color:'#FFFFFF',
        fontWeight:'bold',
        marginLeft:300,
        marginRight:3,
        paddingTop:10,
        width:200
    },
    body:{
        display:'flex',
        flexDirection:'row',
        justifyContent: "space-evenly",
        backgroundColor:'#61605e',
        width:500,
        height:50,
        justifyContent: "space-evenly"
    },
    full:{
        justifyContent: "space-evenly",backgroundColor:'#61605e',
        width:500,
        

    },
    AvaText:{
        fontSize:20,
        color:'#279107',
        fontWeight:'bold',
        marginLeft:300,
        marginRight:3,
        paddingTop:10,width:200
    },
    
})
export default DetailsSection;