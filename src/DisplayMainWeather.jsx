import "./DisplayMainWeather.css"

function DisplayMainWeather(props) {
    const day_in_month = new Date().getDate();
    const day_in_week = new Intl.DateTimeFormat('en-US', { weekday: "long"}).format(new Date());

    return (
        <>
            <div>
                <h2>{props.cityName}, {props.country}</h2>
                <span>{day_in_month} {day_in_week}</span>
            </div>
            <div>
                <img src={`http://openweathermap.org/img/w/${props.iconCode}.png`} alt="icon"/>
                <div>
                    <h1>{Math.round(props.temperature)}°</h1>
                    <span>{props.weatherStatus}</span>
                </div>
            </div>
        </>
    )
}

export default DisplayMainWeather;