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

        <Route path="/Afiiliate_Program/" element={<BlogCards />} />
        <Route path="/Afiiliate_Program/terms" element={<Terms />} />
        <Route path="/Afiiliate_Program/aboutus" element={<About />} />
        <Route path="/Afiiliate_Program/disclaimer" element={<Disclaimer />} />
        <Route path="affiliate/privacypolicy" element={<Privacy />} />
        <Route path="/Afiiliate_Program/faq" element={<Faq />} />
        <Route path="/Afiiliate_Program/contactus" element={<Contactus />} />
      </Routes>
    </div>
  );
};
export default index;
