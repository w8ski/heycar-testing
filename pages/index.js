import Head from "next/head";

import styles from "../styles/Home.module.css";

import { Layout } from "../src/components/Layout/Layout";

const SCHEMA = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  url: process.env.HOST,
  potentialAction: {
    "@type": "SearchAction",
    target: `${process.env.HOST}/api/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <Layout>
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
        <link rel='canonical' href={process.env.HOST} />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </Head>
      <h1 className={styles.title}>
        Welcome to <br />
        <a href='https://heycar.co.uk'>Heycar</a> Schema App.
      </h1>
    </Layout>
  );
}
