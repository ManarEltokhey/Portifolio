import React, { useState } from "react"
import * as Progress from 'react-native-progress';
import { StyleSheet, Text } from "react-native"
import LineSection from "./line";
const LanguagesSection = () => {
    const [data, setData] = useState(
        [
            { value: 0.9, progress: '90%', name: 'English' },
            { value: 1, progress: '100%', name: 'Arabic' },
            { value: 0.5, progress: '50%', name: 'Frensh' },
        ])
    return (
        <>
            <LineSection />
            <view style={style.body}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Languages:</Text>
                <br /><br /></view>
    {
        data.map((item)=>{
            return<view tyle={style.body}>
                 <Text style={style.text}>{item.name}</Text>
        <Text  style={style.text2}>{item.progress}</Text>
        <br/>
      <Progress.Bar width={500} height={20} color='#f2bc0a' progress={item.value}/>
      <br/>
                </view>
        })
    }
                {/* <Text style={style.text}>English</Text>
        <Text  style={style.text2}>90%</Text>
        <br/>
      <Progress.Bar progress={0.9} width={500} height={20} color='#f2bc0a'/>
      <Text style={style.text}>Arabic</Text>
        <Text  style={style.text2}>100%</Text>
        <br/>
      <Progress.Bar progress={1} width={500} height={20} color='#f2bc0a'/>
      <Text style={style.text}>Frensh</Text>
        <Text  style={style.text2}>50%</Text>
        <br/>
      <Progress.Bar progress={0.5} width={500} height={20} color='#f2bc0a'/> */}
                
                </>
    )
   
}
const style = StyleSheet.create({
    text: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 20
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 350,
        marginBottom: 10,
        fontSize: 20
    },
    body: {
        backgroundColor: '#61605e',
        justifyContent: 'center',
        width: 500,
        padding: 5
    },

})

export default LanguagesSection;