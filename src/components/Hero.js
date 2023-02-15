import React from "react"
import photos from "../images/photos.png"

export default function Hero() {
  return (
    <section className="hero">
      <img src={photos} alt="people" className="hero--img"/>

      <div className="container">
        <h1 className="hero--title">Online Experiences</h1>

        <h2 className="hero--subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
      </div>
    </section>
  )
}