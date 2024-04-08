import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

import ColourBlock from "@/components/ColourBlock";

export default function Home() {
  return (
    <div className="frame">
      <Head>
        <title>studiUs Style Guide</title>
        <meta name="description" content="studiUs style guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
      </Head>
      <Header/>
      <main className={styles.main}>
        <h1>Home</h1>
      </main>
    </div>
  );
}
