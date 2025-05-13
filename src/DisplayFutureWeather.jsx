import "./styles/DisplayMainWeather.css"

function DisplayFutureWeather(props) {
    return (
        <div className="containers temp-data">
            <div className="containers">
                <p className={"fw-time"}>{props.time}</p>
                <h2 className={"title"}>{Math.round(props.temperature)}°</h2>
            </div>
        </div>
    )
}

export default DisplayFutureWeather;