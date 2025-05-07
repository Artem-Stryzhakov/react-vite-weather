import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SearchWeatherForm(props) {
    function formHandler(e) {
        e.preventDefault();

        props.setCityName(e.target[0].value);
        props.setFormSubmit(true);
        e.target.reset()
    }

    return (
        <form action="#" className={"search-weather"} onSubmit={formHandler}>
            <input type="text" placeholder="Enter city name..." className={"search-input"} />
            {/*<input type="submit" value={""} className={"input-submit"} />*/}
            <button className={"btn-submit"} type="submit">
                <FontAwesomeIcon className={"FontAwesomeIcon"} icon="fa-solid fa-magnifying-glass"/>
            </button>
        </form>
    )
}

export default SearchWeatherForm;