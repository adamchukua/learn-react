import React from "react"

export default function Card(props) {
  return (
    <div className="card">
      <img src={`./images/${props.img}`} alt="" className="card--img"/>

      <div className="card-review">
        <img src="./images/star.svg" alt="star" className="card-review--img"/>

        <p className="card-review--text">
          <span className="card-review--text__black">{props.rating}</span> <span>({props.reviewCount})</span> • <span>{props.country}</span>
        </p>
      </div>

      <p className="card-desc">{props.title}</p>

      <p className="card-price">
        <span>From ${props.price}</span> / person
      </p>
    </div>
  )
}