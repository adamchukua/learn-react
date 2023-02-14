import React from "react"
import avatar from "../images/photo.jpg"
import mail from "../images/mail.png"
import linkedIn from "../images/linkedin.png"

export default function Info() {
  return (
    <section>
      <div className="info-data">
        <img src={avatar} alt="Ivan Adamchuk" className="info-data--image"/>

        <h2 className="info-data--title">Ivan Adamchuk</h2>

        <h3 className="info-data--subtitle">Full stack PHP developer</h3>

        <p className="info-data--text">thegradle.github.io</p>
      </div>

      <div className="info-btns">
        <a href="#" className="info-btns--btn">
          <img src={mail} alt="mail"/>
          Email
        </a>

        <a href="#" className="info-btns--btn info-btns--btn__blue">
          <img src={linkedIn} alt="linkedIn"/>
          Linkedln
        </a>
      </div>
    </section>
  )
}