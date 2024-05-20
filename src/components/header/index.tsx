import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./index.module.scss";

type indexProps = { addStyleToheader: boolean; };

const Header: React.FC<indexProps> = ({ addStyleToheader }) => {



  const { pathname } = useLocation();
  return (
    <React.Fragment>
      <div className={`${classes.header_parent} ${addStyleToheader ? classes.shrink_header : ""}`}>
        <div className={classes.logo}></div>
        <div className={classes.navigation}>
          <NavLink className={pathname === "/" ? classes.active : ""} to={"/"}>
            Home
          </NavLink>
          <NavLink
            className={pathname === "/aboutus" ? classes.active : ""}
            to={"/aboutus"}
          >
            About Us
          </NavLink>
          <NavLink
            className={pathname === "/terms" ? classes.active : ""}
            to={"/terms"}
          >
            Terms and Conditions
          </NavLink>

          <NavLink
            className={pathname === "/disclaimer" ? classes.active : ""}
            to={"/disclaimer"}
          >
            Disclaimer
          </NavLink>
          <NavLink
            className={pathname === "/privacypolicy" ? classes.active : ""}
            to={"/privacypolicy"}
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className={pathname === "/faq" ? classes.active : ""}
            to={"/faq"}
          >
            FAQ
          </NavLink>
          <NavLink
            className={pathname === "/contactus" ? classes.active : ""}
            to={"/contactus"}
          >
            Contact Us
          </NavLink>
        </div>
      </div>

    </React.Fragment>
  );
};
export default Header;