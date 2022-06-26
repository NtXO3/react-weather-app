import React, { useEffect, useState } from "react";
import axios from "axios";
import TopBar from "./components/TopBar";
import WeatherData from "./components/WeatherData";
 
function App() {

  const fetchData = async () => {
    const API_KEY = 'bec4d69fcaac495aab9151929222406'
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}&days=1&aqi=no`)
    setResult(data)
    setSearch('')
  }

  const fetchOnLoad = async () => {
    const date = new Date()
    console.log(date)
    const API_KEY = 'bec4d69fcaac495aab9151929222406'
    const { data } = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=auto:ip&days=1&aqi=no`)
    setResult(data)
  }

  const [isFahrenheit, setIsFahrenheit] = useState(false)
  const [search, setSearch] = useState('')
  const [result, setResult] = useState({})

  useEffect(() => {
    fetchOnLoad()
  }, [])

  const date = new Date()
  const hours = date.getHours()

  useEffect(() => {
    const appEl = document.querySelector('.App')    
    if (hours >= 23 && hours < 5) {
      appEl.style.backgroundImage = "url('https://wallpaper.dog/large/5443235.jpg')"
    }
    if (hours >= 5 && hours < 12 ) {
      appEl.style.backgroundImage = "url('https://wallpaper.dog/large/17257236.jpg')"
    }
    if (hours >= 12 && hours < 19) {
      appEl.style.backgroundImage = "url('https://cdn.wallpapersafari.com/49/13/whI0Ws.jpg')"
    }
  }, [hours])

  return (
    <div className="App">
      <div className="backdrop"></div>
      <div className="app__container">
        <TopBar isFahrenheit={isFahrenheit} setIsFahrenheit={setIsFahrenheit} search={search} setSearch={setSearch} fetchData={fetchData}/>
        {
          result.current ?
          <WeatherData result={result} isFahrenheit={isFahrenheit}/>
          :
          <h1 className="app__title">Start by Searching for a Location...</h1>
        }
      </div>
    </div>
  );
}

export default App;
