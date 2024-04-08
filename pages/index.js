import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

import ColourBlock from "@/components/ColourBlock";
import HeadArea from "@/components/HeadArea";

export default function Home() {
  return (
    <>
    <HeadArea/>
    <div className="frame">
      <Header/>
      <main className={styles.main}>
        <h1>Home</h1>
      </main>
    </div>
    </>
  );
}
