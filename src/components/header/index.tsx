import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useMedia } from "react-use";
import { IoMenuOutline } from "react-icons/io5";


import classes from "./index.module.scss";
import SidebarComponent from "../Sidebar";

type indexProps = { addStyleToheader: boolean };

const Header: React.FC<indexProps> = ({ addStyleToheader }) => {
  const isWide = useMedia("(min-width: 1240px)");
  const [toggled, setToggled] = useState(false);

  const { pathname } = useLocation();
  return (
    <React.Fragment>
      <div
        className={`${classes.header_parent}  ${addStyleToheader ? classes.shrink_header : ""
          }`}
      >
        <div className={`${classes.logo} ${!isWide && classes.mobile_version_size}`}></div>
        {isWide ? (
          <div className={classes.navigation}>
            <NavLink
              className={pathname === "/" ? classes.active : ""}
              to={"/"}
            >
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
        ) : (
          <>
            {" "}
            <IoMenuOutline className={classes.toggleButton} onClick={() => setToggled(!toggled)} />

            <main style={{ display: "flex", padding: 10 }}>
              <div>
                <SidebarComponent toggled={toggled} setToggled={setToggled} />
              </div>
            </main>
          </>
        )}
      </div>
    </React.Fragment>
  );
};
export default Header;
