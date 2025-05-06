import "./DisplayMainWeather.css"

function DisplayFutureWeather(props) {
    return (
        <div className="containers temp-data">
            <img src={`http://openweathermap.org/img/w/${props.iconCode}.png`} alt="icon"/>
            <div className="containers">
                <h1 className={"title"}>{Math.round(props.temperature)}°</h1>
                <span>{props.weatherStatus}</span>
            </div>
        </div>
    )
}

export default DisplayFutureWeather;