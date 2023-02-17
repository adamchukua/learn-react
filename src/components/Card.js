import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.imageUrl} alt={props.title}/>
      </div>

      <div className="card-text">
        <div className="card-text-location">
          <img src="./images/point.svg" alt="" className="card-text-location--img"/>

          <p className="card-text-location--name">{props.location}</p>

          <a href={props.googleMapsUrl} className="card-text-location--link">View on Google Maps</a>
        </div>

        <h2 className="card-text--title">{props.title}</h2>

        <h3 className="card-text--date">{props.startDate} - {props.endDate}</h3>

        <p className="card-text--desc">{props.description}</p>
      </div>
    </div>
  )
}