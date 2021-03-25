import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.Footer}>
      <span id="footer-author">Made by Fer Alonso Maccari
        <span role="img" aria-label="owl">🦉</span>
        <a href="https://github.com/feralonsomaccari/minecraft-server-check-client" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </span>
    </div>
  );
};

export default Footer;
