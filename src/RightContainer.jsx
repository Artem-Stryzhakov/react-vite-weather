import "./styles/RightContainer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function RightContainer(props) {
    return (
        <>
            <div className={"param-block"}>
                <div className={"icon-ram"}>
                    <FontAwesomeIcon icon="fa-solid fa-droplet" className={"icon"}/>
                </div>
                <div className={"status-info"}>
                    <p>Humidity:</p>
                    <h3>{props.humidity}%</h3>
                </div>
            </div>
            <div className={"param-block"}>
                <div className={"icon-ram"}>
                    <FontAwesomeIcon icon="fa-solid fa-cloud" className={"icon"}/>
                </div>
                <div className={"status-info"}>
                    <p>Air Pressure:</p>
                    <h3>{props.air_pressure} PS</h3>
                </div>
            </div>
            <div className={"param-block"}>
                <div className={"icon-ram"}>
                    <FontAwesomeIcon icon="fa-solid fa-wind" className={"icon"}/>
                </div>
                <div className={"status-info"}>
                    <p>Wind Speed:</p>
                    <h3>{props.wind_speed} km/h</h3>
                </div>
            </div>
        </>
    )
}

export default RightContainer;