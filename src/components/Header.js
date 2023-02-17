import React from "react"

export default function Header() {
  return (
    <div className="header-bg">
      <div className="container header">
        <div className="header-left">
          <img src="./images/logo.svg" alt="" className="header-left--img"/>

          <p className="header-left--title">Meme Generator</p>
        </div>

        <p>React Course - Project 3</p>
      </div>
    </div>
  )
}