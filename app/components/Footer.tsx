import React from "react";
import "../../styles/FooterStyle.css";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="footer">
          <div className="row">
            <a href="#">
              <i className="fac ">
                <FaFacebook />
              </i>
            </a>
            <a href="#">
              <i className="lin">
                <FaLinkedin />
              </i>
            </a>
            <a href="#">
              <i className="git">
                {" "}
                <FaGithub />
              </i>
            </a>
            <a href="#">
              <i className="inst">
                <FiInstagram />
              </i>{" "}
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Our Services</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div className="row">
            INFERNO Copyright © 2021 Inferno - All rights reserved || Designed
            By: Mahesh
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
