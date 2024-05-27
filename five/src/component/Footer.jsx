import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";
import me from '../stuffs/logo2.png'

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Dipesh Mate</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://linkedin.com/in/dipeshmate" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/dipeshmate1610" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/dipeshmate" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
