import React, { useState } from "react"
import memesData from "../memesData"

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
  }

  return (
    <main className="container">
      <form className="meme-form">
        <div className="meme-form-inputs">
          <input type="text" placeholder="Top text"></input>
          <input type="text" placeholder="Bottom text"></input>
        </div>

        <button className="meme-form--btn" onClick={getMemeImage} type="button">
          Get a new meme image <img src="./images/capture-emoji.png" alt=""/>
        </button>
      </form>

      <img src={meme.randomImage} alt="" className="meme--img"/>
    </main>
  )
}