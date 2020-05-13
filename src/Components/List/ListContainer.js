import React, { useState, useEffect } from "react";
import ListPlayers from "./ListPlayers";
import css from "./List.module.css";
import Loading from "../Loading/Loading";

const ListContainer = () => {
  const [playersSample, setPlayersSample] = useState([]);
  const [fetchOk, setFetchOk] = useState(false);
  const [playersOnline, setPlayersOnline] = useState(0);
  const [playersMax, setPlayersMax] = useState(0);
  const [serverInfo, setServerInfo] = useState(0);

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
        console.log(result);
        if (Object.entries(result).length) {
          setFetchOk(true);
          setPlayersSample(result.result.players.sample);
          setPlayersOnline(result.result.players.online);
          setPlayersMax(result.result.players.max);
          setServerInfo(result.result.version);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {fetchOk ? (
        <>
         <h1 className={css.Title}>40tena BWW Server</h1>
          <div className={css.List}>
            <div className={css.ServerInfo}>
              <span>Version: {serverInfo.name}</span> 
              <span>protocol: {serverInfo.protocol}</span>
              
            </div>
            <hr/>
            <h3>
              Players: {playersOnline}/{playersMax}
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
