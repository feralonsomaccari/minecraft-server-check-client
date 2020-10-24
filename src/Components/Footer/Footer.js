import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.Footer}>
      <span>Made by Fer Alonso Maccari 🦉
        <a href="https://github.com/feralonsomaccari/minecraft-server-check-client" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </span>
    </div>
  );
};

export default Footer;
