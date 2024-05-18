import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BlogCards from "../../components/BlogCards";
import Terms from "../../pages/termsandconditions";
import About from "../../pages/about";
import Disclaimer from "../../pages/disclaimer";
import Privacy from "../../pages/privacypolicy";
import Faq from "../../pages/faq";
import Contactus from "../../pages/contactus";

import classes from "./index.module.scss";

type iProps = {};

const index: React.FC<iProps> = () => {
  return (
    <div className={classes.home_parent}>
      <Routes>

        <Route path="/affiliate/" element={<BlogCards />} />
        <Route path="/affiliate/terms" element={<Terms />} />
        <Route path="/affiliate/aboutus" element={<About />} />
        <Route path="/affiliate/disclaimer" element={<Disclaimer />} />
        <Route path="affiliate/privacypolicy" element={<Privacy />} />
        <Route path="/affiliate/faq" element={<Faq />} />
        <Route path="/affiliate/contactus" element={<Contactus />} />
      </Routes>
    </div>
  );
};
export default index;
