import React,{useState,useEffect} from 'react'
import "./style.css";

export default function Temp () {
    
   const [searchValue,setSearchValue] =useState("punjab");

    const getWeatherInfo= async() =>{
      try{
          let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=ba81e597b2312de7e67e7937ee5f0438`;
         const res = await fetch(url);
         const data = await res.json();
         console.log(data);
      }
      
      catch(error){
       console.log(error);
      }
    };

    useEffect(() => {
      getWeatherInfo();
    }, [])

    return (
        <>
        <div className="wrap">
           <div className="search">
               <input type="search" value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder="Search..." autoFocus  className="searchTerm" id="search"></input>
               <button className="searchButton" type="button" onClick={getWeatherInfo}>
               Search
               </button>              
           </div> 
        </div>

        <div className="widget">
            <div className="weatherIcon">
             <i className={"wi wi-day-sunny"}></i>
             </div>
             <div className="weatherInfo">
                <div className="temperature">
                      <span>25.5&deg;</span>
                </div>

                <div className="description">
                     <div className="weatherCondition">
                      sunny
                     </div>  
                     <div className="place">
                         Punjab,India
                     </div>     
                </div>

             </div>
            <div className="date">{new Date().toLocaleString()}</div>
             <div className="extra-temp">
                  <div className="temp-info-minmax">
                      <div className="two-sided-section">
                          <p>
                              <i className={"wi wi-sunset"}></i>
                          </p>
                          <p className="extra-info-leftside">
                              19:19 PM<br/>
                              Sunset
                          </p>
                      </div>

                      <div className="two-sided-section">
                          <p>
                              <i className={"wi wi-humidity"}></i>
                          </p>
                          <p className="extra-info-leftside">
                              19:19 PM<br/>
                              Humidity
                          </p>
                      </div>
                  </div> 
                  <div className="weather-extra-info">
                       <div className="two-sided-section">
                          <p>
                              <i className={"wi wi-rain"}></i>
                          </p>
                          <p className="extra-info-leftside">
                              19:19 PM<br/>
                             Pressure
                          </p>
                      </div>
                      <div className="two-sided-section">
                          <p>
                              <i className={"wi wi-strong-wind"}></i>
                          </p>
                          <p className="extra-info-leftside">
                              19:19 PM<br/>
                              Speed
                          </p>
                      </div>
                  </div>
             </div>
        </div>
        </>
    )
}
