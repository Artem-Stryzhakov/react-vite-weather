import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SearchWeatherForm(props) {
    function formHandler(e) {
        e.preventDefault();

        props.setCityName(e.target[0].value);
        props.setFormSubmit(!props.form);
        e.target.reset()
    }

    return (
        <div className="center-section">
            <form action="#" className={"search-weather"} onSubmit={formHandler}>
                <input type="text" placeholder="Enter city name..." className={"search-input"} />
                <button className={"btn-submit"} type="submit">
                    <FontAwesomeIcon className={"FontAwesomeIcon"} icon="fa-solid fa-magnifying-glass"/>
                </button>
            </form>
        </div>
    )
}

export default SearchWeatherForm;