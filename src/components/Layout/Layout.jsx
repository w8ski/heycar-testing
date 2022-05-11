import React from "react";
import Image from "next/image";

import Logo from "../../assets/images/logo.svg";
import styles from "../../assets/styles/Home.module.css";

const Layout = ({ children }) => (
  <div>
    <header className={styles.header}>
      <a href='https://heycar.co.uk'>
        <Image src={Logo} alt='heycar logo' title='Heycar logo' height='100' width='150' />
      </a>
    </header>

    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>

    <footer className={styles.footer}>
      <a href='https://github.com/w8ski' target='_blank' rel='noopener noreferrer'>
        Designed and Developed by <span className={styles.logo}>Simon (w8ski) Wierzchowski</span>
      </a>
    </footer>
  </div>
);

export { Layout };
