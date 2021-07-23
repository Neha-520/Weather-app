import React,{useEffect} from 'react'

export const WeatherCard = ({temp, humidity, pressure,
    weathermood, name, speed,
    country, sunset}) => {

const[weather,setWeather] = React.useState("");
 
    useEffect(() => {
        if(weathermood)
        {
            switch(weathermood){
                   case "Clouds": 
                         setWeather("wi-day-cloudy");
                         break;
                    case "Haze":
                         setWeather("wi-fog");
                        break;
                    case "Clear": 
                         setWeather("wi-day-sunny");
                         break;
                    case "Mist": 
                         setWeather("wi-dust");
                         break;
                default:
                  setWeather("wi-day-sunny");
                    break;     
            }
        }
   // eslint-disable-next-line
    }, [weathermood]);

    let sec=sunset;
    let date=new Date(sec * 1000);
    let timeStr=`${date.getHours()}:${date.getMinutes()}`

    return (
        <div className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weather}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>

                    <div className="description">
                        <div className="weatherCondition">
                            {weathermood}
                        </div>
                        <div className="place">
                            {name},{country}
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
                                {timeStr} PM<br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                Humidity<br />
                                {humidity}
                            </p>
                        </div>
                    </div>
                    <div className="weather-extra-info">
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                Pressure<br />
                                {pressure}
                            </p>
                        </div>
                        <div className="two-sided-section">
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className="extra-info-leftside">
                                Speed<br />
                               {speed}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
