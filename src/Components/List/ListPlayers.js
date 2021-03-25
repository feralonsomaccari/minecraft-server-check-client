import React from "react";
import css from "./List.module.css";
import Player from "./Player"

const ListPlayers = (props) => {
  return (
    <>
      {props.players.map(player => {
        return <div className={css.PlayersWrapper} key={player.id}>
          <Player player={player}></Player>
        </div>
      })}
    </>
  );
};

export default ListPlayers;
