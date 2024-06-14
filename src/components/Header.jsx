import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="navbar bg-transparent absolute z-50">
      <div className="flex-1">
        <div className="bg-black absolute top-0 left-0 px-10">
            <a className="btn btn-ghost text-xl">
                <img src="/public/logo.png" className="w-20"></img>
            </a>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          {/* <li>
            <a>Construction Process</a>
          </li> */}
          <li>
            <Link to="/Project">Project</Link>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li className="accent">
            <a>+62 823 5037 0695</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
