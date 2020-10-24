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
import avatar13 from "../../resources/avatar13.png";

const imagesArr = [
  avatar1
  , avatar2
  , avatar3
  , avatar4
  , avatar5
  , avatar6
  , avatar7
  , avatar8
  , avatar9
  , avatar10
  , avatar11
  , avatar12
  , avatar13
]

const shuffleAvatar = () => {
  let random = Math.floor(Math.random() * (3 - 0) + 0);
  return imagesArr[random];
};


const ListPlayers = (props) => {
  return (
    <div className={css.List}>
      <List
        itemLayout="horizontal"
        dataSource={props.players}
        renderItem={(player) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={shuffleAvatar()} />}
              title={
                <span className={css.List__name}>
                  {player.name} <small className={css.PlayerOnline}>online</small>
                </span>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListPlayers;
