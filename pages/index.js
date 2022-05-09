import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Heycar Schema QA App</title>
        <meta
          name='description'
          content='This is a Heycar QA app to go through schema functionalities and potential options.'
        />
        <meta
          name='keywords'
          content='heycar, heycar testing, heycar testing app, heycar schema qa, heycar qa, heycar qa app'
        />
        <meta
          name='google-site-verification'
          content='61F24J4tCWIp9xpsAi43zy8uc1CkP-2Hv4hpByMf_GI'
        />
        <link rel='icon' href='/favicon.ico' />
        <script type='application/ld+json'>{`
          {
            "@context": "http://schema.org",
            "@type": "WebSite",
            "url": "https://www.heycar.co.uk/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://google.com?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}</script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <br />
          <a href='https://heycar.co.uk'>Heycar</a> Testing App.
        </h1>
      </main>

      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{" "}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
