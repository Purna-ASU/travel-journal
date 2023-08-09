function Card(props) {
    return(
        <div className="card">
            <img src={props.imageUrl} alt="Images" className="card--image" />
            <div className="card--info">
                <span className="card--location">{props.location}</span> 
                <a href={props.googleMapsUrl} className="card--url">View on Google Maps</a>
                <h1 className="card--title">{props.title}</h1>
                <span className="card--date">{props.startDate} - {props.endDate}</span>
                <p className="card--desc">{props.description}</p>  
            </div>
            <hr className="card--rule"/>
        </div>       
    )
}

export default Card;