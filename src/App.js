import React,{useState} from 'react';
import Input from './components/Input';
import Result from './components/Result';
import axios from "axios";
import './App.css';


function App() {
  const [input,setInput] = useState("");
  const [temp,setTemp]= useState("");
  const [description,setDescription] = useState("");
  const [icon,setIcon]= useState("");

  const findweather = async() =>{
    const apiKey="b9450eb163532f5a74d7993264f83ca7";
    const unit="metric";
    const url=
    "https://api.openweathermap.org/data/2.5/weather?q="+
    input +
    "&appid="+
    apiKey+
    "&units="+
    unit;
    const response = await axios.get(url);
    const temp = response.data.main.temp;
    const weatherDescription= response.data.weather[0].description;
    const icon = response.data.weather[0].icon;
    const imageURL = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
    console.log(temp,weatherDescription,imageURL)
    setTemp(temp);
    setDescription(weatherDescription);
    setIcon(imageURL);
    setInput("");
  }
  return (
    <div>
     {temp === "" ?(
    <Input  input={input} setInput={setInput} findweather={findweather}/>):(
    <Result  temp={temp} desc={description} icon={icon} setTemp={setTemp}/>)}
    </div>
  );
}

export default App;
