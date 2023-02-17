import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./styles.css"
import data from "./data.js"

export default function App() {
  const cards = data.map(el => <Card img={el.coverImg} rating={el.stats.rating} reviewCount={el.stats.reviewCount} country={el.location} title={el.title} price={el.price} />)

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container cards">
        {cards}
      </div>
    </div>
  )
}