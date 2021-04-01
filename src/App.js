import React from "react";
import css from "./App.module.css";
import ListContainer from "./components/List/ListContainer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={css.App}>
      <div className={css.Main}>
        {/* <Form></Form> */}
        <ListContainer></ListContainer>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
