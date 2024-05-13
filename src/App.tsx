import React from "react";
import Header from "./components/header";
import Home from "./home";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/footer";
import classes from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.parent_component}>
        <div className={classes.main_component}>
          <Header />
          <Home />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
