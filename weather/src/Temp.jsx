import React, { useState, useEffect } from 'react'
import "./style.css";
import { WeatherCard } from './WeatherCard';

export default function Temp() {

    const [searchValue, setSearchValue] = useState("punjab");
    const [tempInfo,setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ba81e597b2312de7e67e7937ee5f0438`;
            let res = await fetch(url);
            let data = await res.json();

            const { temp, humidity, pressure } = data.main;
            const { main: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;

            const myWeatherInfo = {
                temp, humidity, pressure,
                weathermood, name, speed,
                country, sunset
            };
            
            setTempInfo(myWeatherInfo);
        }

        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search..." autoFocus className="searchTerm" id="search"></input>
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
            <WeatherCard {...tempInfo}/>
        </>
    )
}
