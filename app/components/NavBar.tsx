"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../../styles/NavBar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="NavBar-Container">
      <div className="Logo">
        <h1>Logo</h1>
      </div>
      <div className="MenuToggle" onClick={toggleMenu}>
        <div className={`MenuIcon ${isMenuOpen ? "open" : ""}`}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      <nav className={`NavBarList ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Products">Products</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>Call Us</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
