import React, { useState, useEffect } from "react";
import ListPlayers from "./ListPlayers";
import css from "./List.module.css";
import Loading from "../Loading/Loading";

const ListContainer = () => {
  const [serverData, setServerData] = useState({});
  const [playersSample, setPlayersSample] = useState([]);
  const [test, setTest] = useState([]);
  const [players, setPlayers] = useState({});
  const [playersOnline, setPlayersOnline] = useState(0);
  const [playersMax, setPlayersMax] = useState(0);

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
        setPlayers(result.result.players);
        setPlayersOnline(result.result.players.online);
        setPlayersMax(result.result.players.max);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {players ? (
        <>
          <div className={css.List}>
            <h3>
              Players {playersOnline}/{playersMax}
            </h3>
            {playersOnline ? <ListPlayers players={playersSample}></ListPlayers> : <p className={css.Nobody}>Nadie esta conectado</p>}
          </div>
        </>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};

export default ListContainer;
