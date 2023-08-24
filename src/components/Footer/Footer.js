import React from "react";
import { NavLink } from "react-router-dom";
import Github from "../../images/github.svg";
import Linkedin from "../../images/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2023 Supersite, Powered by News API</p>
      <div className="footer__right">
        <div className="footer__links">
          <NavLink to="/" className="footer__link">
            <button className="footer__button footer__text">Home</button>
          </NavLink>
          <NavLink
            to="https://practicum.com"
            className="footer__link"
            target="_blank"
          >
            <button className="footer__text footer__button">TripleTen</button>
          </NavLink>
        </div>
        <div className="footer__icons">
          <NavLink
            to="https://github.com/Plouis53"
            className="footer__icon"
            target="_blank"
          >
            <button className="footer__button footer__github">
              <img alt="Github logo" src={Github} className="footer__github" />
            </button>
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/phillippe-pmpisintech/"
            target="_blank"
          >
            <button className="footer__linkedIn footer__button">
              <img
                src={Linkedin}
                alt="LinkedIn logo"
                className="footer__linkedIn"
              />
            </button>
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
