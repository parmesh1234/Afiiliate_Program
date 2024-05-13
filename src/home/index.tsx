import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogCards from "../components/BlogCards";

import classes from "./index.module.scss";

type iProps = {};

const index: React.FC<iProps> = () => {
  return (
    <div className={classes.home_parent}>
      <Routes>
        <Route path="/" element={<BlogCards />} />
      </Routes>
    </div>
  );
};
export default index;
