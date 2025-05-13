import "./styles/DisplayFutureWeather.css"

function DisplayFutureWeather(props) {
    const convertTime = (timeString) => {
        return new Date('1970-01-01T' + timeString + 'Z').toLocaleTimeString('en-US',
                {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
            );
    }

    return (
        <div className="temp-data">
            <div className="container">
                <p className={"fw-time"}>{convertTime(props.time).replace(/:00/, "")}</p>
                <h1 className={"title"}>{Math.round(props.temperature)}°C</h1>
                <p className={"feels-like"}>Feels like: {Math.round(props.feels_like)}°C</p>
            </div>
        </div>
    )
}

export default DisplayFutureWeather;