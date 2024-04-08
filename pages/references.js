import styles from "@/styles/References.module.css";
import Header from "@/components/Header";
import HeadArea from "@/components/HeadArea";

export default function References() {
    return(
        <>
        <HeadArea/>
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>References</h1>
            </div>
        </div>
        </>
    )
}