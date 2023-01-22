import React from "react";
import "./styles.css";
import git from './images/github.svg';
import portfolio from './images/portfolio.svg';

const Footer = () => {
  return (
    <footer>
      <hr />
      <p>© | 2023 | pranayshende</p>
      <ul class="footer-list">
        <li>
          <a class="links" to="https://github.com/kpanay" target="_blank">
            <img src={git} alt="github" />
          </a>
        </li>
        <li>
          <a class="links" to="https://pranayshende.netlify.app/" target="_blank">
            <img class="center" src={portfolio} alt="portfolio" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
