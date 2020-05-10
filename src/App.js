import React from "react";
import "./App.css";
import ListContainer from "./Components/List/ListContainer";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <div className="header">
          <h1>40tena BWW Server</h1>
        </div>
      <ListContainer></ListContainer>
    </>
  );
}

export default App;
