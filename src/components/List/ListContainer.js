import { useState, useEffect } from "react";
import ListPlayers from "./ListPlayers";
import css from "./List.module.css";
import Loading from "../Loading/Loading";
import refreshIcon from "../../resources/refresh-icon.png"
import { fetchServerData } from '../../services/ServerServices'

const ListContainer = () => {
  const [fetchOk, setFetchOk] = useState(false);
  const [refreshOk, setRefreshOk] = useState(false)
  const [playersSample, setPlayersSample] = useState([]);
  const [playersOnline, setPlayersOnline] = useState(0);
  const [playersMax, setPlayersMax] = useState(0);
  const [serverName, setServerName] = useState("");
  const [serverInfo, setServerInfo] = useState({});

  const requestServerData = async () => {
    setRefreshOk(false);
    const fetchedServedData = await fetchServerData()
    setPlayersSample(fetchedServedData.result.players.sample);
    setPlayersOnline(fetchedServedData.result.players.online);
    setPlayersMax(fetchedServedData.result.players.max);
    setServerInfo(fetchedServedData.result.version);
    setServerName(fetchedServedData.result.description.text)
    setFetchOk(true);
    setRefreshOk(true)
  }

  useEffect(() => {
    requestServerData()
  }, []);

  return (
    <>
      {fetchOk ? (
        <>
          <h1 className={css.Title}>{serverName ? serverName : "Minecraft Server"}</h1>
          <div className={css.ListContainer}>
            <div className={css.ServerInfo}>
              <span>Version: {serverInfo.name}</span>
              <span>protocol: {serverInfo.protocol}</span>
              <span className={css.Refresh} onClick={requestServerData}>Refresh <img className={css.RefreshIcon} src={refreshIcon} height="15" width="15" alt="refresh" /> </span>
            </div>
            <hr />
            <h3>
              Players: {playersOnline}/{playersMax}
            </h3>
            {refreshOk
              ? playersOnline ? <ListPlayers players={playersSample}></ListPlayers> : <p className={css.Nobody}>Nadie esta conectado</p>
              : <Loading></Loading>
            }

          </div>
        </>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
};

export default ListContainer;
