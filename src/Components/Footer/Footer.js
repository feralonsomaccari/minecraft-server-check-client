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
      {/* <span>
        <a href="https://github.com/Cryptkeeper/mc-ping-updated" target="_blank" rel="noopener noreferrer">
          Powered By mc-ping
        </a>
      </span> */}
    </div>
  );
};

export default Footer;
