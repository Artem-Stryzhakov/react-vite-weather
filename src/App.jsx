import {useEffect, useState} from "react";
import axios from "axios";
import DisplayFutureWeather from "./DisplayFutureWeather.jsx";
import SearchWeatherForm from "./SearchWeatherForm.jsx";
import LeftContainer from "./LeftContainer.jsx";
import Loader from "./Loader.jsx";

import './styles/App.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import RightContainer from "./RightContainer.jsx";

library.add(fas, faTwitter, faFontAwesome)

function App() {
    const weather_api = import.meta.env.VITE_WEATHER_API;

    const [weatherData, setWeatherData] = useState([])
    const [cityData, setCityData] = useState([]);
    const [cityName, setCityName] = useState("Tallinn");
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
                    <RightContainer
                        humidity={weatherData[0].main.humidity}
                        air_pressure={weatherData[0].main.pressure}
                        wind_speed={weatherData[0].wind.speed}
                    />
                </div>
            </section>

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
        </div>
    )
}

export default App
