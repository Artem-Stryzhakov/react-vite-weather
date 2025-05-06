function ShowingLocation(props) {
    const day_in_month = new Date().getDate();
    const day_in_week = new Intl.DateTimeFormat('en-US', { weekday: "long"}).format(new Date());

    return (
        <div className="containers">
            <h2 className={"title"}>{props.cityName}, {props.country}</h2>
            <span>{day_in_month} {day_in_week}</span>
        </div>
    )
}

export default ShowingLocation;