import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import DisplayFutureWeather from "./DisplayFutureWeather.jsx";
import SearchWeatherForm from "./SearchWeatherForm.jsx";
import ShowingLocation from "./ShowingLocation.jsx";

function App() {
    const weather_api = import.meta.env.VITE_WEATHER_API;

    const [weatherData, setWeatherData] = useState([])
    const [cityData, setCityData] = useState([]);
    const [cityName, setCityName] = useState("Tallinn");
    const [isLoading, setIsLoading] = useState(true);
    const [formSubmit, setFormSubmit] = useState(false);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${weather_api}&units=metric&cnt=7`)
          .then(response => {
            setWeatherData(response.data.list);
            setCityData(response.data.city);
            setIsLoading(false);
            console.log(response.data);
            console.log(response.data.city);

          })
            .catch(error => {
                console.log(error);
            })
    }, [formSubmit]);

    if (isLoading) return <>Loading...</>

    return (
        <>
            <SearchWeatherForm setCityName={setCityName} setFormSubmit={setFormSubmit}/>
            <ShowingLocation cityName={cityName} country={cityData.country} />

            <div className="weather-data">
                {weatherData.map((data, i) =>
                    <DisplayFutureWeather
                        key={i}
                        cityName={cityData.name}
                        country={cityData.country}
                        iconCode={data.weather[0].icon}
                        temperature={data.main.temp}
                        weatherStatus={data.weather[0].description}
                    />
                )}
            </div>
        </>
    )
}

export default App
