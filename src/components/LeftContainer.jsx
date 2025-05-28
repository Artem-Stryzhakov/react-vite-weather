import "../styles/LeftContainer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function LeftContainer(props) {
    const convertTime = (timeString) => {
        return new Date('1970-01-01T' + timeString + 'Z').toLocaleTimeString('en-US',
                {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'})
            .replace(/:00 /, "");
    }

    return (
        <>
            <div className={"left-container"}>
                <div className={"location-info"}>
                    <div className={"status-block"}>
                        <img src={`http://openweathermap.org/img/w/${props.weatherData}.png`} alt="icon"/>
                        <h1 className={"main-status"}>{props.status}</h1>
                        <div className="location-time-info">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                            <h1 className={"title"}>{props.city}</h1>
                        </div>
                    </div>
                    <div className={"time-temp"}>
                        <div className={"time"}>
                            <FontAwesomeIcon icon="fa-solid fa-clock" />
                            <p>{convertTime(props.time)}</p>
                        </div>
                        <h1 className={"main-temp"}>{Math.round(props.temperature)}{props.unit}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftContainer;