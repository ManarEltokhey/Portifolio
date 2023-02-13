import React from "react";
import { StyleSheet, Text } from "react-native";
import LineSection from "./line";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ExtraSkillsSection = () => {
    return (
        <>
            <LineSection />
            <view style={style.body}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Extra Skills:</Text>
                <br /><br/>
                <view style={style.viewStyle}>
                    <MaterialCommunityIcons name="star" color={"#f2bc0a"} size={20} />
                    <Text style={style.text2}>BootStrap,sass</Text></view>
                <br/><br/>
                <view style={style.viewStyle}>
                    <MaterialCommunityIcons name="star" color={"#f2bc0a"} size={20} />
                    <Text style={style.text2}>React native,Flutter</Text></view>
                <br/><br/>
                <view style={style.viewStyle}>
                    <MaterialCommunityIcons name="star" color={"#f2bc0a"} size={20} />
                    <Text style={style.text2}>Git,Github</Text></view><br/><br/>
            </view>
            
        </>
    )
}
const style = StyleSheet.create({

    body: {
        backgroundColor: '#61605e',
        justifyContent: 'center',
        width: 500,
        padding:5
    },
    text2: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 20,
        marginLeft: 5,
    },
    viewStyle: {
        marginBottom: 20,
        height:50
    }

})

export default ExtraSkillsSection;