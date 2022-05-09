import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import Logo from "../src/assets/images/logo.svg";

const SCHEMA = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  url: "https://www.heycar.co.uk/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://google.com?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <div>
      <Head>
        <html lang='en' />
        <title>Heycar Schema QA App</title>
        <meta
          name='description'
          content='This is a Heycar QA app to go through schema functionalities and potential options.'
        />
        <meta
          name='keywords'
          content='heycar, heycar testing, heycar testing app, heycar schema qa, heycar qa, heycar qa app'
        />
        <meta name='robots' content='all' />
        <meta name='author' content='Simon Wierzchowski' />
        <meta name='publisher' content='Heycar' />
        <meta
          name='google-site-verification'
          content='61F24J4tCWIp9xpsAi43zy8uc1CkP-2Hv4hpByMf_GI'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='https://heycar-testing.vercel.app/' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </Head>

      <header className={styles.header}>
        <a href='https://heycar.co.uk'>
          <Image src={Logo} alt='heycar logo' title='Heycar logo' height='100' width='150' />
        </a>
      </header>

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <br />
            <a href='https://heycar.co.uk'>Heycar</a> Schema App.
          </h1>
        </main>
      </div>

      <footer className={styles.footer}>
        <a href='https://github.com/w8ski' target='_blank' rel='noopener noreferrer'>
          Designed and Developed by <span className={styles.logo}>Simon (w8ski) Wierzchowski</span>
        </a>
      </footer>
    </div>
  );
}
