import React from "react";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTiktok,
  IoLogoYoutube,
} from "react-icons/io5";
import {
  FaChevronDown,
  FaChevronRight,
  FaEnvelope,
  FaFacebookF,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import Social from "../Buttons/Social.component";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={`${styles.footerWrapper}`}>
      <div className={`${styles.footerSubWrapper}`}></div>
      <div className="bg-primary-dark-darker">
        <div className={styles.footerBottom}>
          <div>
            <Link
              to="/"
              className={`${styles.footerBottomLinks} text-white hover:text-primary-green`}
            >
              Home |
            </Link>
            <Link
              to="/"
              className={`${styles.footerBottomLinks} text-white hover:text-primary-green`}
            >
              About |
            </Link>
            <Link
              to="/"
              className={`${styles.footerBottomLinks} text-white hover:text-primary-green`}
            >
              Contact Developer
            </Link>
          </div>
          <div className={`${styles}`}>
            <div className={`${styles.socialWrapper}`}>
              <Social>
                <FaFacebookF />
              </Social>
              <Social>
                <IoLogoInstagram />
              </Social>
              <Social>
                <IoLogoTiktok />
              </Social>
              <Social>
                <IoLogoYoutube />
              </Social>
              <Social>
                <IoLogoLinkedin />
              </Social>
            </div>
          </div>
          <div>
            <p className={`${styles.footerCopyright} text-white`}>
              © 2023 POEXA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
