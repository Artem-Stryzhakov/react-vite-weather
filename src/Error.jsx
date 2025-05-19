import "./styles/Error.css"
import {useCallback, useEffect} from "react";

function Error(props) {
    function windowReload() {
        return window.location.reload(false)
    }

    const handleKeyPress = useCallback((e) => {
        (e.key === "Enter") ? windowReload() : null;
    })

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        document.querySelector("body").style.overflowY = "hidden";

        return () => document.addEventListener("keydown", handleKeyPress);
    }, [handleKeyPress]);

    return (
        <div className={"dark-window"}>
            <div className={"modal-error"}>
                <h1 className={"error-status"}>{props.errorStatus}</h1>
                <p className={"error-message"}>{props.errorMessage.charAt(0).toUpperCase() + props.errorMessage.slice(1)}.</p>
                <button onClick={windowReload} type={"button"}>Reload</button>
            </div>
        </div>
    )
}

export default Error