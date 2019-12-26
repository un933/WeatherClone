import React from "react"
import {StyleSheet,View , Text, StatusBar} from "react-native"
import PropsTypes  from "prop-types"
import { LinearGradient } from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons"


const weatherOptions={
    Haze:{
        iconName:"weather-fog",
        gradient: ["#3E5151","#DECBA4"],
        title:"Haze",
        subtitle:"안개"

    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#a8c0ff", "#3f2b96"],
        title:"Thunderstorm",
        subtitle:"천둥번개"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#005AA7", "#FFFDE4"],
        title:"Drizzle",
        subtitle:"이슬비 온다"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#bdc3c7", "#2c3e50"],
        title:"Rain",
        subtitle:"비가 주룩 주룩"
    },
    Snow: {
        iconName: "snowman",
        gradient: ["#add8e6", "#fffafa"],
        title:"snow",
        subtitle:"눈내린다"
    },
    Atmosphere: {
        iconName: "weather-night",
        gradient: ["#0F2027", "#203A43"],
        title:"Atmosphere",
        subtitle:"일식 or 월식"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#667db6", "#0082c8","#667db6"],
        title:"clear",
        subtitle:"산책하기 좋은날"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#abbaab", "#2c3e50"],
        title:"Clouds",
        subtitle:"구름낀날"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#757f9a", "#d7dde8"],
        title:"mist",
        subtitle:"안개꼈다"
    },
    Smoke: {
        iconName: "smog",
        gradient: ["#485563", "#29323c"],
        title:"smog",
        subtitle:"마스크 챙겨라"
    },
    Dust: {
        iconName: "weather-fog",
        gradient: ["#eacda3", "#d6ae7b"],
        title:"Dust",
        subtitle:"황사이니 나가지마"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#d3cce3", "#e9e4f0"],
        title:"fog",
        subtitle:"짙은 안개 낌"
    },
    Sand: {
        iconName: "weather-fog",
        gradient: ["#e9d362", "#333333"],
        title:"sand",
        subtitle:"모래폭풍!"
    },   
    Ash: {
        iconName: "weather-fog",
        gradient: ["#bbd2c5", "#536976"],
        title:"Ash",
        subtitle:"재가 날리니 도망가시오"
    },
    Squall: {
        iconName: "weather-lightning-rainy",
        gradient: ["#373b44", "#4286f4"],
        title:"squall",
        subtitle:"소나기 우산챙겨"
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#536976", "#292e49"],
        title:"tornado",
        subtitle:"도망가!"
    }
}


export default function Weather({temp,condition}){
    return (
      
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content"/>

            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} 
                 size={96}
                 color={"white"} />
                <Text style={styles.temp}>   {temp}º  </Text>
            </View>
            <View style={{...styles.halfContainer,...styles.textcontainer}} >               
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
                
                
                </View>
        </LinearGradient>

    );


}

Weather.PropsTypes={
    temp:PropsTypes.number.isRequired,
    condition: PropsTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Smoke",
       "Haze",
       "Dust",
       "Fog",
       "Sand",
       "Dust",
       "Ash",
       "Squall",
       "Tornado"    
    ]).isRequired
};


const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"

    },
    temp:{
        fontSize:42,
        color:"white"

    },
    halfContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10    
    },
    subtitle:{
        color:"white",
        fontSize:24,  
        fontWeight:"600"
          

    },
    textcontainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    }

});