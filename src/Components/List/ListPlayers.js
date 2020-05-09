import React from "react";
import { List, Avatar } from "antd";
import css from "./List.module.css";
import avatar1 from "../../resources/avatar1.png";
import avatar2 from "../../resources/avatar2.png";
import avatar3 from "../../resources/avatar3.png";


const imagesArr = [avatar1, avatar2, avatar3]
const shuffleAvatar = () => {

  let random = Math.floor(Math.random() * (3 - 0) + 0);
  return imagesArr[random];
};

const ListPlayers = (props) => {
  
  return (
      <List
        itemLayout="horizontal"
        dataSource={props.players}
        renderItem={(player) => (
          <List.Item>
            <List.Item.Meta avatar={<Avatar src={shuffleAvatar()} />} title={player.name} description={""} />
          </List.Item>
        )}
      />
  );
};

export default ListPlayers;
