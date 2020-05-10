import React from "react";
import { List, Avatar } from "antd";
import css from "./List.module.css";
import avatar1 from "../../resources/avatar1.png";
import avatar2 from "../../resources/avatar2.png";
import avatar3 from "../../resources/avatar3.png";
import avatar4 from "../../resources/avatar4.png";
import avatar5 from "../../resources/avatar5.gif";
import avatar6 from "../../resources/avatar6.png";
import avatar7 from "../../resources/avatar7.png";
import avatar8 from "../../resources/avatar8.png";
import avatar9 from "../../resources/avatar9.png";
import avatar10 from "../../resources/avatar10.png";
import avatar11 from "../../resources/avatar11.gif";
import avatar12 from "../../resources/avatar12.png";


const imagesArr = [avatar1, avatar2, avatar3];
const shuffleAvatar = () => { // For future versions
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
      case "3f3d3d02-180b-3b26-a246-ca7f513385ef": //Gabi
      desc = "Le gustan los niños bien sabrosos";
      break;
    case "92b2620f-f9c9-392d-bb13-ef6970fc937c": //Lean
      desc = "El creador";
      break;
    case "354a3725-d5fa-3f30-afff-fa03c05e53e5": //Augusto
      desc = "No entiende los emoticones";
      break;
    case "429d8ae2-2cad-366f-9f2c-d8e0269dc1ac": //Fer
      desc = "No reconoce el Mist of Pandaria como Arabia saudita no reconoce al estado de Israel";
      break;
    default:
      break;
  }
  return (<span className={css.List__description}>{desc}</span>);
};
const playerIconByUuid = (uuid) => {
  let icon = "";
  switch (uuid) {
    case "4d4dde6d-8be3-3d0a-b37b-9232821e27e8": //Beny
      icon = avatar1;
      break;
    case "a5e9c0c3-b20b-3b92-8cde-764bc98ae562": //Circee
      icon = avatar2;
      break;
    case "9588ca4d-4df8-33be-9fa5-01b9e53a909e": //Miche
      icon = avatar3;
      break;
    case "e89f7558-7485-316c-ba62-e7f93f31ef8d": //Aspirineta
      icon = avatar4;
      break;
    case "a0489fd3-420c-3fe6-80d4-644ac4698e0a": //Beny brother
      icon = avatar6;
      break;
    case "761673ae-5b86-3774-bd53-13d2f217bdf2": //Bruno
      icon = avatar7;
      break;
    case "4d30e1c6-35a8-3629-a46f-08f11491ddf6": //Merzal
      icon = avatar8;
      break;
    case "3f3d3d02-180b-3b26-a246-ca7f513385ef": //Gabi
      icon = avatar9;
      break;
    case "92b2620f-f9c9-392d-bb13-ef6970fc937c": //Lean
      icon = avatar10;
      break;
    case "354a3725-d5fa-3f30-afff-fa03c05e53e5": //Augusto
      icon = avatar12;
      break;
    case "429d8ae2-2cad-366f-9f2c-d8e0269dc1ac": //Fer
      icon = avatar11;
      break;
    default:
      break;
  }
  return icon;
};

const ListPlayers = (props) => {
  return (
    <>
      {props.players.length ? (
        <List
          itemLayout="horizontal"
          dataSource={props.players}
          renderItem={(player) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={playerIconByUuid(player.id)} />}
                title={<span className={css.List__name}>{player.name} <small className={css.online}>online</small></span>}
                description={playerDescByUuid(player.id)}
              />
            </List.Item>
          )}
        />
      ) : (
        <p>Nadie esta conectado</p>
      )}
    </>
  );
};

export default ListPlayers;
