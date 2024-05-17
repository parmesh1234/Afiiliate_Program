import React, { useState } from "react";
import Header from "./components/header";
import Home from "./pages/home";
import { BrowserRouter } from "react-router-dom";

import Footer from "./components/footer";
import classes from "./App.module.scss";

function App() {

  const [addStyletoheader, setAddStyleToHeader] = useState<boolean>(false)
  return (
    <BrowserRouter>
      <div className={classes.parent_component} onScroll={(e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target as HTMLInputElement;

        const position = Math.ceil(
          (scrollTop / (scrollHeight - clientHeight)) * 100
        );

        if (position < 20) {
          setAddStyleToHeader(false)
        }
        if (position > 20) {
          setAddStyleToHeader(true)
        }
      }}>
        <div className={classes.main_component} >
          <Header addStyleToheader={addStyletoheader} />
          <Home />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
