import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import HeadArea from "@/components/HeadArea";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <HeadArea/>
    <div className="frame">
      <Header/>
      <main className={styles.main}>
        <h1>Home</h1>
        <div className={styles.logos}>
          <Image src="/images/logo/logomark-colour.svg" width={597} height={176} className={styles.logo}/>
          <Image src="/images/logo/logomark-monochromatic.svg" width={597} height={176} className={styles.logo}/>
          <Image src="/images/logo/logomark-black.svg" width={176} height={176} className={styles.logo}/>
          <Image src="/images/logo/logomark-grayscale.svg" width={176} height={176} className={styles.logo}/>
          <Image src="/images/logo/logomark-vertical.svg" width={176} height={176} className={styles.logo}/>
          <Image src="/images/logo/favicon.svg" width={48} height={48} style={{margin: "0 1rem"}}/>
          <Image src="/images/logo/favicon.svg" width={32} height={32} style={{margin: "0 1rem"}}/>
          <Image src="/images/logo/favicon.svg" width={16} height={16} style={{margin: "0 1rem"}}/>
        </div>
        <h2>Rationale</h2>
        <p>We wanted to keep our logo simple while also conveying the idea of collaboration/connection.
          To achieve this, we made minimal changes to our chosen typeface, Rajdhani, by only merging together the <span style={{fontStyle: "italic"}}>I</span> and <span style={{fontStyle: "italic"}}>U</span> in <span style={{fontStyle: "italic"}}>studiUs</span>.
          By "squishing" together <span style={{fontStyle: "italic"}}>I</span> and <span style={{fontStyle: "italic"}}>U</span>, it represents being physically closer between two parties: I and You.</p>
        <p>The mark is supposed to resemble two books to tie it back to a studying theme. They are intertwined to further enforce our central theme of connection.</p>
      </main>
      <Footer/>
    </div>
    </>
  );
}
