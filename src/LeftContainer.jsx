import "./styles/LeftContainer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function LeftContainer(props) {
    return (
        <>
            <div className={"icon-status"}>
                <img src={`http://openweathermap.org/img/w/${props.weatherData}.png`} alt="icon"/>
                <h1 className={"main-status"}>{props.status}</h1>
                <div className="location-time-info">
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                    <h1 className={"title"}>{props.city}</h1>
                </div>
            </div>
            <h1 className={"main-temp"}>{Math.round(props.temperature)}°C</h1>
        </>
    )
}

export default LeftContainer;