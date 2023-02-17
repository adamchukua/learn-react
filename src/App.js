import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import "./styles.css"
import data from "./data.js"

export default function App() {
  const cards = data.map(el => <Card key={el.id} {...el}/>)

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