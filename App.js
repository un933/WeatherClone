import React,{Component} from "react";
import Loading from "./Loading";
import Weather from "./Weather"
import * as Location from 'expo-location';
import {Alert} from 'react-native'
import axios from "axios";


const API_KEY="32313570834835c6bdf7903cf555429c";

export default class App extends Component {
  state={
    isLoading: true
  };
  getWeather= async(latitude, longitude)=>{
    const {
      data:{
        main:{ temp },weather
       }
      } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    
    this.setState({
      isLoading: false ,
      condition:weather[0].main,
       temp
      });

  };

  
  getLocation =async()=>{
    try {
      
      await Location.requestPermissionsAsync();      
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude,longitude)
      
     
      //Api를 이용해서 날씨의 정보를 가져온다.
     
    } catch (error) {
     Alert.alert("Can't find you","찾을 수 없습니다.");
    }
    
  }
  
  componentDidMount(){
    this.getLocation();
   
  }

  render(){
    const{ isLoading, temp,condition} = this. state;
  return isLoading ? <Loading/> : <Weather temp={Math.floor(temp)} condition={condition}/> ; 
  
  }
}

 