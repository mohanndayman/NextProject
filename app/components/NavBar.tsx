import React from "react";
import Link from "next/link";
import "../../styles/NavBar.css";

function NavBar() {
  return (
    <div className="NavBar-Container">
      <div className="Logo">
        <h1>Logo</h1>
      </div>
      <nav className="NavBarList">
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
