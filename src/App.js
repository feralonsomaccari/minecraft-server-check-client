import React from "react";
import css from "./App.module.css";
import ListContainer from "./Components/List/ListContainer";
import Footer from "./Components/Footer/Footer";

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
