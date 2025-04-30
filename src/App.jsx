import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";
import DisplayMainWeather from "./DisplayMainWeather.jsx";

function App() {
    const weather_api = import.meta.env.VITE_WEATHER_API;

    const [weatherData, setWeatherData] = useState([])
    const [cityName, setCityName] = useState("Tallinn");
    const [isLoading, setIsLoading] = useState(true);
    const [formSubmit, setFormSubmit] = useState(false);

    function formHandler(e) {
        e.preventDefault();
        console.log("form handler");
        setCityName(document.querySelector(".search-input").value);
        setFormSubmit(true);
    }

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${weather_api}`)
          .then(response => {
            setWeatherData(response.data);
            setIsLoading(false);
            console.log(response.data);
          })
            .catch(error => {
                console.log(error);
            })
    }, [cityName, formSubmit]);

    if (isLoading) return <>Loading...</>

    return (
        <>
            <form action="#" className={"search-weather"} onSubmit={formHandler}>
                <input type="text" placeholder="Enter city name..." className={"search-input"} />
                <input type="submit" value="Submit" />
            </form>

            <DisplayMainWeather
                cityName={weatherData.name}
                country={weatherData.sys.country}
                iconCode={weatherData.weather[0].icon}
                temperature={weatherData.main.temp}
                weatherStatus={weatherData.weather[0].description}
            />
        </>
    )
}

export default App
