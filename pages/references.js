import styles from "@/styles/References.module.css";
import Header from "@/components/Header";
import HeadArea from "@/components/HeadArea";
import Image from "next/image";

export default function References() {
    return(
        <>
        <HeadArea/>
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>References</h1>
                <p>We took inspiration from the following layouts</p>
                <div className={styles.references}>
                    <div>
                        <Image src="/images/references/pinterest.png" width={884} height={1912} style={{width: "300px", height: "auto"}}/>
                        <p>Pinterest</p>
                    </div>
                    <div>
                        <Image src="/images/references/spotify.png" width={3840} height={2160} style={{width: "900px", height: "auto"}}/>
                        <p>Spotify</p>
                    </div>
                    <div>
                        <Image src="/images/references/ubereats.png" width={862} height={1660} style={{width: "300px", height: "auto"}}/>
                        <p>Uber Eats</p>
                    </div>
                    <div>
                        <Image src="/images/references/ubereats-search.png" width={874} height={1896} style={{width: "300px", height: "auto"}}/>
                        <p>Uber Eats</p>
                    </div>
                    <div>
                        <Image src="/images/references/twitter.png" width={960} height={2080} style={{width: "300px", height: "auto"}}/>
                        <p>Twitter/X</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}