import React from "react"

export default function Meme() {
  return (
    <main>
      <form className="meme-form container">
        <div className="meme-form-inputs">
          <input type="text" placeholder="Top text"></input>
          <input type="text" placeholder="Bottom text"></input>
        </div>

        <button className="meme-form--btn">
          Get a new meme image <img src="./images/capture-emoji.png" alt=""/>
        </button>
      </form>

      <img src="" alt="" className="meme--img"/>
    </main>
  )
}