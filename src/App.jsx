import {useEffect, useState} from "react";
import axios from "axios";
import DisplayFutureWeather from "./components/DisplayFutureWeather.jsx";
import SearchWeatherForm from "./components/SearchWeatherForm.jsx";
import LeftContainer from "./components/LeftContainer.jsx";
import ParameterWeather from "./components/RightContainer.jsx";
import Loader from "./components/Loader.jsx";
import Error from "./components/Error.jsx";

import './styles/App.css'

import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import RightContainer from "./components/RightContainer.jsx";

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

    const [toggleMetric, setToggleMetric] = useState(true);

    const handleToggleMetric = (data) => setToggleMetric(data);

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${weather_api}&units=${toggleMetric ? "metric" : "standard"}`)
          .then(response => {
            setError(false);
            setLoading(false);
            setWeatherData(response.data.list.filter((_, index) => index % 8 === 0));
            setCityData(response.data.city);
            setWeatherDesc(response.data.list[0].weather[0].main);
          })
            .catch(error => {
                setError(true)
                setErrorInfo(error)
            })
    }, [formSubmit, toggleMetric]);

    if (isLoading) return <Loader />;

    return (
        <div className={"main-container"}>

            {isError ? <Error errorStatus={errorInfo.status} errorMessage={errorInfo.response.data.message}/> : null}

            <section className={"top-section"}>
                <LeftContainer
                    weatherData={weatherData[0].weather[0].icon}
                    time={weatherData[0].dt_txt.split(" ")[1]}
                    status={weatherDesc.charAt(0).toUpperCase() + weatherDesc.slice(1)}
                    city={cityData.name}
                    temperature={weatherData[0].main.temp}
                    unit={toggleMetric ? "°C" : "°F"}
                />

                <SearchWeatherForm setCityName={setCityName} setFormSubmit={setFormSubmit} form={formSubmit}/>

                <RightContainer
                    tempunit={toggleMetric ? "Celsius" : "Fahrenheit"}
                    humidity={weatherData[0].main.humidity}
                    pressure={weatherData[0].main.pressure}
                    speed={weatherData[0].wind.speed}
                    sendToggleData={handleToggleMetric}
                />
            </section>

            <div className="weather-data">
                {weatherData.map((data, i) =>
                    <DisplayFutureWeather
                        key={i}
                        dateFormat={data.dt_txt.split(" ")[0]}
                        temperature={data.main.temp}
                        feels_like={data.main.feels_like}
                        unit={toggleMetric ? "°C" : "°F"}
                    />
                )}
            </div>
        </div>
    )
}

export default App