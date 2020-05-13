import React from "react";
import css from "./App.module.css";
import ListContainer from "./Components/List/ListContainer";
import "antd/dist/antd.css";

function App() {
  return (
    <div>
      <div className={css.Main}>
        <h1 className={css.Title}>40tena BWW Server</h1>
        <ListContainer></ListContainer>
      </div>
      <div className={css.Background}></div>
    </div>
  );
}

export default App;
