import React, { useState, useEffect } from "react";
import Weathercard from "./weathercard";
import Loading from '../UseEffectApi/loading';
import "./style.css";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("karachi");
  const [tempInfo, setTempInfo] = useState({});
  const [loading, setLoading] = useState(true); 

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=8ddf38fa98aaf8f6f76c0c41ab82bda8`;
      // let url = `https://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=8ddf38fa98aaf8f6f76c0c41ab82bda8`;

      let res = await fetch(url);
      let data = await res.json();
      setLoading(false);

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);
  debugger;
  
if(loading){
  return <Loading />
}


  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />

          <button
            className="searchButton"
            type="button"
            onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>

      {/* our temp card  */}
      <Weathercard {...tempInfo} />
    </>
  );
};

export default Temp;
