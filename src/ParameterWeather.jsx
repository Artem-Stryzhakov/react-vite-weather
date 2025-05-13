import "./styles/ParameterWeather.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

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

export default ParameterWeather;