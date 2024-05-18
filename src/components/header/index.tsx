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
          <NavLink className={pathname === "/Afiiliate_Program/" ? classes.active : ""} to={"/Afiiliate_Program/"}>
            Home
          </NavLink>
          <NavLink
            className={pathname === "/Afiiliate_Program/aboutus" ? classes.active : ""}
            to={"/Afiiliate_Program/aboutus"}
          >
            About Us
          </NavLink>
          <NavLink
            className={pathname === "/Afiiliate_Program/terms" ? classes.active : ""}
            to={"/Afiiliate_Program/terms"}
          >
            Terms and Conditions
          </NavLink>

          <NavLink
            className={pathname === "/Afiiliate_Program/disclaimer" ? classes.active : ""}
            to={"/Afiiliate_Program/disclaimer"}
          >
            Disclaimer
          </NavLink>
          <NavLink
            className={pathname === "/Afiiliate_Program/privacypolicy" ? classes.active : ""}
            to={"/Afiiliate_Program/privacypolicy"}
          >
            Privacy Policy
          </NavLink>
          <NavLink
            className={pathname === "/Afiiliate_Program/faq" ? classes.active : ""}
            to={"/Afiiliate_Program/faq"}
          >
            FAQ
          </NavLink>
          <NavLink
            className={pathname === "/Afiiliate_Program/contactus" ? classes.active : ""}
            to={"/Afiiliate_Program/contactus"}
          >
            Contact Us
          </NavLink>
        </div>
      </div>

    </React.Fragment>
  );
};
export default Header;
