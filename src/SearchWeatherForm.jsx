function SearchWeatherForm(props) {

    function formHandler(e) {
        e.preventDefault();

        props.setCityName(e.target[0].value);
        props.setFormSubmit(true);
    }

    return (
        <form action="#" className={"search-weather"} onSubmit={formHandler}>
            <input type="text" placeholder="Enter city name..." className={"search-input"} />
            <input type="submit" value={""} className={"input-submit"} />
        </form>
    )
}

export default SearchWeatherForm;