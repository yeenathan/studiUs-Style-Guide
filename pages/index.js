import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import HeadArea from "@/components/HeadArea";

export default function Home() {
  return (
    <>
    <HeadArea/>
    <div className="frame">
      <Header/>
      <main className={styles.main}>
        <h1>Home</h1>
        <div className={styles.logos}>
          <Image src="/images/logo/logo-colour.svg" width={594} height={260} className={styles.logo}/>
          <Image src="/images/logo/logo-black.svg" width={594} height={260} className={styles.logo}/>
          <Image src="/images/logo/logo-monochromatic.svg" width={594} height={260} className={styles.logo}/> 
        </div>
        <h2>Rationale</h2>
        <p>We wanted to keep our logo simple while also conveying the idea of collaboration/connection.
          To achieve this, we made minimal changes to our chosen typeface, Rajdhani, by only merging together the <span style={{fontStyle: "italic"}}>I</span> and <span style={{fontStyle: "italic"}}>U</span> in <span style={{fontStyle: "italic"}}>studiUs</span>.
          By "squishing" together <span style={{fontStyle: "italic"}}>I</span> and <span style={{fontStyle: "italic"}}>U</span>, it represents being physically closer between two parties: I and You.</p>
      </main>
    </div>
    </>
  );
}
