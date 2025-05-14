import "./styles/DisplayFutureWeather.css"

function DisplayFutureWeather(props) {
    const options = { weekday: "long" };
    const weatherDay = new Intl.DateTimeFormat("en-US", options).format(new Date(props.dateFormat));

    return (
        <div className="temp-data">
            <div className="container">
                <p className={"fw-day"}>{weatherDay}</p>
                <h1 className={"title"}>{Math.round(props.temperature)}°C</h1>
                <p className={"feels-like"}>Feels like: {Math.round(props.feels_like)}°C</p>
            </div>
        </div>
    )
}

export default DisplayFutureWeather;