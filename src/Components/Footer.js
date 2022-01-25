import Link from "next/link";
import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <Link href="https://code.nasa.gov/">
          <a>code.nasa.gov</a>
        </Link>
        <Link href="https://api.nasa.gov/">
          <a>api.nasa.gov</a>
        </Link>
        <Link href="https://data.nasa.gov/">
          <a>data.nasa.gov</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
