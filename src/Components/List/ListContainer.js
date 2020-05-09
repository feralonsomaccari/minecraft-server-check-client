import React, { useState, useEffect } from "react";
import ListPlayers from "./ListPlayers";
import css from "./List.module.css"

const ListContainer = () => {
  const [serverData, setServerData] = useState({});
  const [playersSample, setPlayersSample] = useState([]);
  const [playersCount, setPlayersCount] = useState({});

  useEffect(() => {
    fetch("https://minecraft-server-check.herokuapp.com/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "default",
    })
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        setPlayersSample(result.result.players.sample);
        setPlayersCount(result.result.players);
      })
      .catch((err) => {});
  }, []);

  return (
    <>
      {playersSample.length ? (
        <>
         <div className={css.header}>
          <h1>40tena BWW Server</h1>
        </div>
        <div className={css.List}>
          <h3>Players {playersCount.online} / {playersCount.max} </h3>
          <ListPlayers players={playersSample}></ListPlayers>
        </div>
        </>
      ) : null}
    </>
  );
};

export default ListContainer;
