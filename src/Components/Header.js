import React from "react";
import Image from "next/image";
import logo from "../assets/Nasa_logo.png";
import Link from "next/link";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={`${styles.header} animeLeft`}>
      <div className={styles.logo} id="logo">
        <Link href="/">
          <a>
            <Image src={logo} width={100} height={100} />
          </a>
        </Link>
      </div>
      <div className={styles.menu}>
        <div>
          <ul className={styles.menuList}>
            <Link href="/infor-today/Astronomy-day">
              <a>
                <li>Astronomy of day</li>
              </a>
            </Link>
            <Link href="/Images">
              <a>
                <li>images/library</li>
              </a>
            </Link>
          </ul>
        </div>
        <div className={styles.button}>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
