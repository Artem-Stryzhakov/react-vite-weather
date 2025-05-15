import {useEffect, useState} from "react";
import axios from "axios";
import DisplayFutureWeather from "./DisplayFutureWeather.jsx";
import SearchWeatherForm from "./SearchWeatherForm.jsx";
import LeftContainer from "./LeftContainer.jsx";
import ParameterWeather from "./ParameterWeather.jsx";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";

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
    const [formSubmit, setFormSubmit] = useState(false);
    const [weatherDesc, setWeatherDesc] = useState("");

    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const [errorInfo, setErrorInfo] = useState("");

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${weather_api}&units=metric`)
          .then(response => {
            setError(false);
            setLoading(false);
            setWeatherData(response.data.list.filter((_, index) => index % 8 === 0));
            setCityData(response.data.city);
            console.log(response.data);
            setWeatherDesc(response.data.list[0].weather[0].main);
            setFormSubmit(false);
          })
            .catch(error => {
                console.log(error);
                setError(true)
                setErrorInfo(error)
            })
    }, [formSubmit]);

    if (isLoading) return <Loader />;

    return (
        <div className={"main-container"}>

            {isError ? <Error errorStatus={errorInfo.code} errorMessage={errorInfo.response.data.message}/> : null}

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
                        dateFormat={data.dt_txt.split(" ")[0]}
                        temperature={data.main.temp}
                        feels_like={data.main.feels_like}
                    />
                )}
            </div>
        </div>
    )
}

export default App