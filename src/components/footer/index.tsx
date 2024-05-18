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
        <NavLink to={"/affiliate/"}>
          <b>Home</b>
        </NavLink>
        <NavLink to={"/affiliate/aboutus"}>
          <b>About Us</b>
        </NavLink>
        <NavLink to={"/affiliate/terms"}>
          <b>Terms and Conditions</b>
        </NavLink>

        <NavLink to={"/affiliate/disclaimer"}>
          <b>Disclaimer</b>
        </NavLink>
        <NavLink to={"/affiliate/privacypolicy"}>
          <b>Privacy Policy</b>
        </NavLink>
        <NavLink to={"/affiliate/faq"}>
          <b>FAQ</b>
        </NavLink>
        <NavLink to={"/affiliate/contactus"}>
          <b>Contact Us</b>
        </NavLink>

      </div>
    </React.Fragment>
  );
};
export default Footer;
