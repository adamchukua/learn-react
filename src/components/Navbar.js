import React from "react"
import logo from "../images/airbnb-logo.svg"

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <img src={logo} alt="Airbnb" className="nav--logo"/>
      </div>
    </nav>
  )
}