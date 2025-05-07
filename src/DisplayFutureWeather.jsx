import "./styles/DisplayMainWeather.css"

function DisplayFutureWeather(props) {
    return (
        <div className="containers temp-data">
            <img src={`http://openweathermap.org/img/w/${props.iconCode}.png`} alt="icon"/>
            <div className="containers">
                <h2 className={"title"}>{Math.round(props.temperature)}°</h2>
                {/*<span>{props.weatherStatus}</span>*/}
            </div>
        </div>
    )
}

export default DisplayFutureWeather;