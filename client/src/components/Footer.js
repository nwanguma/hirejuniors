import React from "react";
import { Link } from "react-router-dom";

import twitter from "../assets/images/twitter.svg";
import medium from "../assets/images/medium.svg";
import linkedin from "../assets/images/linkedin.svg";

import styles from "./Footer.module.scss";

export default () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul>
          <li>
            <Link to="/talent">Talent Pool</Link>
          </li>
          <li>
            <Link to="/jobs">Job Board</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/resources">Learn to code</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>124, Kings street, Banana Island, Lagos, Nigeria.</li>
          <li>+2348157827385</li>
          <li>email@hirejuniors.com</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy</Link>
          </li>
          <li>
            <Link to="/terms">Terms and conditions</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a
              href="https://twitter.com/hirejuniors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter logo" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/hirejuniors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin logo" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/hirejuniors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={medium} alt="medium logo" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
