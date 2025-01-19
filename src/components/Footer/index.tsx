import styles from "./styles.module.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { FaGithub, FaDiscord, FaTwitter } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className={styles.container} style={{ paddingBottom: "2rem" }}>
      <section style={{ display: "flex", flexWrap: "wrap", margin: "2rem 0", justifyContent: "space-around", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "20%", gap: "1rem" }}>
          <img src={logo} alt="logo" style={{ width: "6rem" }} />
          <p>
            All data in this application and its API are sourced from the
            official Jelly Belly website. None of the content here is claimed as
            original; it's all credited to and derived from Jelly Belly's
            official resources.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "30%" }}>
          <div className={styles.list}>
            <p style={{fontSize: "1.2rem"}}>Site Map</p>
            <Link to="/homevork-18/reviews" className={styles.link}>Reviews</Link>
            <Link to="/homevork-18/documentation" className={styles.link}>API Documentation</Link>
            <Link to="/homevork-18/beans" className={styles.link}>Beans</Link>
            <Link to="/homevork-18/facts" className={styles.link}>Facts</Link>
            <Link to="/homevork-18/recipes" className={styles.link}>Recipes</Link>
            <Link to="/homevork-18/combinations" className={styles.link}>Combinations</Link>
            <Link to="/homevork-18/history" className={styles.link}>History</Link>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "20%" }}>
          <p className={styles.dataTitle}>Data Accuracy</p>
          <p className={styles.dataText}>
            Despite efforts to ensure accuracy, this resource may contain errors
            or inaccuracies and should not be the sole basis for critical
            decisions, especially those related to health.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "30%", alignItems: "center" }}>
          <p className={styles.check}>Check Out</p>
          <div style={{display: "flex", gap: "2rem", margin: "0.5rem"}}>
            <a><FaGithub size={35} /></a>
            <a><FaDiscord size={35}/></a>
            <a><FaTwitter size={35}/></a>
          </div>
        </div>
      </section>
      <p style={{ fontSize: ".75rem" }}>Copyright © 2023 All Rights Reserved, Object-ions</p>
    </footer>
  );
};
