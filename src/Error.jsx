import "./styles/Error.css"

function Error(props) {
    return (
        <div className={"modal-error"}>
            <p>{props.errorStatus}</p>
            <button onClick={location.reload}>Reload</button>
        </div>
    )
}

export default Error