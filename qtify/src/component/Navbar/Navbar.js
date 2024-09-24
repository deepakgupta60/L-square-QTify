import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
// import BasicButton from "../Button/BasicButton";
// import Search from "../Search/Search";
import styles from "./Navbar.module.css";


import BasicButton from "../Button/Button"
function Navbar({searchData}) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
      </Link>
      {/* <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      /> */}
      <BasicButton>Give Feedback</BasicButton>
    </nav>
  );
}

export default Navbar;
