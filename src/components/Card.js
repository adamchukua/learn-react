import React from "react"
import photo from "../images/katie_zaferes.png"
import star from "../images/star.svg"

export default function Card() {
  return (
    <div className="container">
      <section className="cards">
        <div className="card">
          <img src={photo} alt="" className="card--img"/>

          <div className="card-review">
            <img src={star} alt="star" className="card-review--img"/>

            <p className="card-review--text">
              <span className="card-review--text__black">5.0</span> <span>(6)</span> • <span>USA</span>
            </p>
          </div>

          <p className="card-desc">Life lessons with Katie Zaferes</p>

          <p className="card-price">
            <span>From $136</span> / person
          </p>
        </div>
      </section>
    </div>
  )
}