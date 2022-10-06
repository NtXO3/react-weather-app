import React from 'react';
import { BsFillSunFill, BsFillSunsetFill } from 'react-icons/bs'
import { AiOutlineArrowUp } from 'react-icons/ai'
import ForecastSlider from './ForecastSlider';
import { BiTimeFive } from 'react-icons/bi'

const WeatherData = ({ result, isFahrenheit }) => {

    const localTime = new Date(result?.location.localtime)

    const getMilitaryTime = (str) => {
        const dayPeriod = str.slice(str.length - 2, str.length)
        if (dayPeriod === 'PM') {
            const hours = str.slice(0, 3)
            const minutes = str.slice(3, str.length - 3)
            const newHours = parseInt(hours) + 12
            return `${newHours}:${minutes}`
        }
        return str.slice(0, str.length - 3)
    }

    return (
        <div className='weather__data'>
            <p className="weather__data--location">{result.location.name}, {result.location.country}</p>
            <h2 className="weather__data--temperature">
                {isFahrenheit ? `${result.current.temp_f}°F` : `${result.current.temp_c}°C`}
            </h2>
            <div className="weather__data--condition">
                <BiTimeFive style={{ marginRight: 8 }} size={24} />
                {localTime.toLocaleTimeString().slice(0, 5)}
            </div>
            <div className="weather__data--condition">
                <img src={result.current.condition.icon} alt="" className="weather__data--icon" />
                <span>{result.current.condition.text}</span>
            </div>
            <div className="weather__astro-info--wrapper">
                <div className="weather__astro-info">
                    <BsFillSunFill className='weather__astro--icon'/>
                    <p>{
                        isFahrenheit ?
                        `Rise: ${result.forecast.forecastday[0].astro.sunrise}` 
                        :
                        `Rise: ${getMilitaryTime(result.forecast.forecastday[0].astro.sunrise)}`
                        }
                    </p>
                </div>
                <div className="weather__astro--divider"></div>
                <div className="weather__astro-info">
                    <BsFillSunsetFill className='weather__astro--icon'/>
                    <p>{
                        isFahrenheit ?
                        `Set: ${result.forecast.forecastday[0].astro.sunset}` 
                        :
                        `Set: ${getMilitaryTime(result.forecast.forecastday[0].astro.sunset)}`
                        }
                    </p>
                </div>
                <div className="weather__astro--divider"></div>
                <div className="weather__astro-info">
                    <AiOutlineArrowUp className='weather__astro--icon'/>
                    <p>{
                        isFahrenheit ?
                        result.forecast.forecastday[0].day.maxtemp_f + '°F'
                        :
                        result.forecast.forecastday[0].day.maxtemp_c + '°C'
                        }
                    </p>
                </div>
                <div className="weather__astro--divider"></div>
                <div className="weather__astro-info">
                    <AiOutlineArrowUp className='weather__astro--icon'/>
                    <p>{
                        isFahrenheit ?
                        result.forecast.forecastday[0].day.mintemp_f + '°F'
                        :
                        result.forecast.forecastday[0].day.mintemp_c + '°C'
                        }
                    </p>
                </div>
            </div>
            <ForecastSlider localTime={localTime} hours={result.forecast.forecastday[0].hour} isFahrenheit={isFahrenheit}/>
            <div className="weather__extra-info">
                <div className="weather__extra--box">
                    <h6 className="weather__extra--title">{isFahrenheit ? `${result.current.feelslike_f}°F` : `${result.current.feelslike_c}°C`}</h6>
                    <p className="weather__extra--para">Feels like</p>
                </div>
                <div className="weather__extra--box">
                    <h6 className="weather__extra--title">{result.current.humidity}%</h6>
                    <p className="weather__extra--para">Humidity</p>
                </div>
                <div className="weather__extra--box">
                    <h6 className="weather__extra--title">{isFahrenheit ? `${result.current.wind_mph} Mph` : `${result.current.wind_kph} Km/h`}</h6>
                    <p className="weather__extra--para">Wind Speeds </p>
                </div>
            </div>
        </div>
    );
}

export default WeatherData;
