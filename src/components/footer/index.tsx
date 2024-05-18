import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./index.module.scss";

type indexProps = {};

const Footer: React.FC<indexProps> = () => {
  const { pathname } = useLocation();
  return (
    <React.Fragment>
      <div className={classes.footer}>
        <p className={classes.nav_header}>Navigation</p>
        <NavLink to={"/Afiiliate_Program/"}>
          <b>Home</b>
        </NavLink>
        <NavLink to={"/Afiiliate_Program/aboutus"}>
          <b>About Us</b>
        </NavLink>
        <NavLink to={"/Afiiliate_Program/terms"}>
          <b>Terms and Conditions</b>
        </NavLink>

        <NavLink to={"/Afiiliate_Program/disclaimer"}>
          <b>Disclaimer</b>
        </NavLink>
        <NavLink to={"/Afiiliate_Program/privacypolicy"}>
          <b>Privacy Policy</b>
        </NavLink>
        <NavLink to={"/Afiiliate_Program/faq"}>
          <b>FAQ</b>
        </NavLink>
        <NavLink to={"/Afiiliate_Program/contactus"}>
          <b>Contact Us</b>
        </NavLink>

      </div>
    </React.Fragment>
  );
};
export default Footer;
