import React from "react"
import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import github from "../images/github.png"

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li className="footer-links--item">
          <a href="#">
            <img src={twitter} alt="twitter"/>
          </a>
        </li>

        <li className="footer-links--item">
          <a href="#">
            <img src={facebook} alt="facebook"/>
          </a>
        </li>

        <li className="footer-links--item">
          <a href="#">
            <img src={instagram} alt="instagram"/>
          </a>
        </li>

        <li className="footer-links--item">
          <a href="#">
            <img src={github} alt="github"/>
          </a>
        </li>
      </ul>
    </footer>
  )
}