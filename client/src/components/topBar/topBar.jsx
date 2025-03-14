import React from "react";
import "./topBar.css";
import UserButton from "../userButton/userButton";

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="search">
        <a href="/" className="">
          <img src="/general/search.svg" alt="" />
        </a>
        <input type="text" placeholder="Search" />
      </div>
      <div>
       <UserButton/>
      </div>
    </div>
  );
};

export default TopBar;
