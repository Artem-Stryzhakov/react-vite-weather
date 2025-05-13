import {useEffect, useState} from "react";
import axios from "axios";
import DisplayFutureWeather from "./DisplayFutureWeather.jsx";
import SearchWeatherForm from "./SearchWeatherForm.jsx";
import LeftContainer from "./LeftContainer.jsx";
import ParameterWeather from "./ParameterWeather.jsx";
import Loader from "./Loader.jsx";

import './styles/App.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'

library.add(fas, faTwitter, faFontAwesome)

function App() {
    const weather_api = import.meta.env.VITE_WEATHER_API;

    const [weatherData, setWeatherData] = useState([])
    const [cityData, setCityData] = useState([]);
    const [cityName, setCityName] = useState("Minsk");
    const [isLoading, setIsLoading] = useState(true);
    const [formSubmit, setFormSubmit] = useState(false);

    const [weatherDesc, setWeatherDesc] = useState("");

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${weather_api}&units=metric&cnt=7`)
          .then(response => {
            setWeatherData(response.data.list);
            setCityData(response.data.city);
            setIsLoading(false);
            console.log(response.data);
            setWeatherDesc(response.data.list[0].weather[0].main);
            setFormSubmit(false)
          })
            .catch(error => {
                console.log(error);
            })
    }, [formSubmit]);

    if (isLoading) return <Loader />;

    return (
        <div className={"main-container"}>
            <section className={"top-section"}>
                <div className={"left-container"}>
                    <div className={"location-info"}>
                        <LeftContainer
                            weatherData={weatherData[0].weather[0].icon}
                            status={weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1)}
                            city={cityData.name}
                            temperature={weatherData[0].main.temp}
                        />
                    </div>
                </div>

                <div className="center-section">
                    <SearchWeatherForm setCityName={setCityName} setFormSubmit={setFormSubmit}/>
                </div>

                <div className={"right-section"}>
                    <ParameterWeather iconClass={"fa-solid fa-droplet"} parameterName={"Humidity"} parameterWeather={`${weatherData[0].main.humidity}%`}/>
                    <ParameterWeather iconClass={"fa-solid fa-cloud"} parameterName={"Air Pressure"} parameterWeather={`${weatherData[0].main.pressure} PS`}/>
                    <ParameterWeather iconClass={"fa-solid fa-wind"} parameterName={"Wind Speed"} parameterWeather={`${weatherData[0].wind.speed} km/h`}/>
                </div>
            </section>

            <div className="weather-data">
                {weatherData.map((data, i) =>
                    <DisplayFutureWeather
                        key={i}
                        time={data.dt_txt.split(" ")[1]}
                        temperature={data.main.temp}
                    />
                )}
            </div>
        </div>
    )
}

export default App
