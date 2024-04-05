import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

import {colours} from "@/data/colours";
import ColourBlock from "@/components/ColourBlock";

export default function Home() {
  return (
    <div className="frame">
      <Head>
        <title>studiUs Style Guide</title>
        <meta name="description" content="studiUs style guide" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <div className={styles.container}>
          <h2>Typography</h2>
          <ul>
            <li><h2 style={{fontSize: "var(--large-title)"}}>Header 1</h2></li> {/*Only one h1 per page*/}
            <li><h2>Header 2</h2></li>
            <li><h3>Header 3</h3></li>
            <li><h4>Header 4</h4></li>
            <li><h5>Header 5</h5></li>
          </ul>
        </div>
        <div className={styles.container}>
          <h2>Colours</h2>
          {
            colours.map((hue) => {
              return(
                <>
                <h3>{hue.category}</h3>
                {
                  hue.data.map((style) => {
                    return <ColourBlock colour={style}/>
                  })
                }
                </>
              )
            })
          }
        </div>
      </main>
    </div>
  );
}
