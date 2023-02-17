import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./styles.css"
import data from "./data.js"

export default function App() {
  const cards = data.map(el => <Card key={el.id} img={el.coverImg} rating={el.stats.rating} reviewCount={el.stats.reviewCount} location={el.location} title={el.title} price={el.price} openSpots={el.openSpots}/>)

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