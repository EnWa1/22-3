import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "activeLink" : "");

export default function Layout() {
  return (
    <div className="app">
      <nav className="navMenu">
        <ul>
          <li>
            <NavLink to={"/"} className={activeLink}>
              Main
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"} className={activeLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"/posts"} className={activeLink}>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} className={activeLink}>
              Log In
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer className="footer">
        <span>EnWa1 tech</span>
      </footer>
    </div>
  );
}
