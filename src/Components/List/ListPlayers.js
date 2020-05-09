import React from "react";
import { List, Avatar } from "antd";
import css from "./List.module.css";
import avatar1 from "../../resources/avatar1.png";
import avatar2 from "../../resources/avatar2.png";
import avatar3 from "../../resources/avatar3.png";

const imagesArr = [avatar1, avatar2, avatar3];
const shuffleAvatar = () => {
  let random = Math.floor(Math.random() * (3 - 0) + 0);
  return imagesArr[random];
};

const playerDescByUuid = (uuid) => {
  let desc = "";
  switch (uuid) {
    case "4d4dde6d-8be3-3d0a-b37b-9232821e27e8": //Beny
      desc = "El chaqueño";
      break;
    case "a5e9c0c3-b20b-3b92-8cde-764bc98ae562": //Circee
      desc = "Vive con pinguinos";
      break;
    case "9588ca4d-4df8-33be-9fa5-01b9e53a909e": //Miche
      desc = "El Anti diversión";
      break;
    case "e89f7558-7485-316c-ba62-e7f93f31ef8d": //Aspirineta
      desc = "El cazador de memes rancios";
      break;
    case "a0489fd3-420c-3fe6-80d4-644ac4698e0a": //Beny brother
      desc = "El Hermano";
      break;
    case "761673ae-5b86-3774-bd53-13d2f217bdf2": //Bruno
      desc = "Volvio! y en forma de fichas";
      break;
    case "4d30e1c6-35a8-3629-a46f-08f11491ddf6": //Merzal
      desc = "Solo el conoce los secretos de Thulnak y Thultik";
      break;
    case "qwe": //Gabi
      desc = "Latriboi";
      break;
    default:
      break;
  }
  return desc
};

const ListPlayers = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.players}
      renderItem={(player) => (
        <List.Item>
          <List.Item.Meta avatar={<Avatar src={shuffleAvatar()} />} title={ <span className={css.List__description}>{player.name}</span> } description={playerDescByUuid(player.id)} />
        </List.Item>
      )}
    />
  );
};

export default ListPlayers;
