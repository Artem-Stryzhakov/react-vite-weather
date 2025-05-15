import "./styles/Error.css"

function Error(props) {
    return (
        <div className={"dark-window"}>
            <div className={"modal-error"}>
                <p>{props.errorStatus}</p>
                <p>{props.errorMessage}</p>
                <button onClick={window.location.reload.bind(window.location)}>Reload</button>
            </div>
        </div>
    )
}

export default Error