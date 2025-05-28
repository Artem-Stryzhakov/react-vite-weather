import "../styles/RightContainer.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function RightContainer(props) {
    const toggleCheckbox = (e) => props.sendToggleData(e.target.checked);

    return (
        <div className={"right-container"}>
            <div className={"metric-toggle"}>
                <label htmlFor="checkbox">{props.tempunit}</label>
                <div className="checkbox-wrapper-2">
                    <input type="checkbox" className="sc-gJwTLC ikxBAC" id={"checkbox"} name={"checkbox"} onClick={toggleCheckbox} defaultChecked />
                </div>
            </div>

            <ParameterWeather iconClass={"fa-solid fa-droplet"} parameterName={"Humidity"} parameterWeather={`${props.humidity}%`}/>
            <ParameterWeather iconClass={"fa-solid fa-cloud"} parameterName={"Air Pressure"} parameterWeather={`${props.pressure} PS`}/>
            <ParameterWeather iconClass={"fa-solid fa-wind"} parameterName={"Wind Speed"} parameterWeather={`${props.speed} km/h`}/>
        </div>
    )
}

function ParameterWeather(props) {
    return (
        <>
            <div className={"param-block"}>
                <div className={"icon-ram"}>
                    <FontAwesomeIcon icon={`${props.iconClass}`} className={"icon"}/>
                </div>
                <div className={"status-info"}>
                    <p>{props.parameterName}:</p>
                    <h3>{props.parameterWeather}</h3>
                </div>
            </div>
        </>
    )
}

export default RightContainer;