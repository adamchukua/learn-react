import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data.js"
import "./styles.css"

export default function App() {
  const cards = data.map(item => <Card {...item}/>)

  return (
    <div>
      <Navbar/>
      <div className="container">
        {cards}
      </div>
    </div>
  )
}