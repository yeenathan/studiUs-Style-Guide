import styles from "@/styles/Graphics.module.css";
import Header from "@/components/Header";
import HeadArea from "@/components/HeadArea";

export default function Graphics() {
    return(
        <>
        <HeadArea/>
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>Graphics</h1>
            </div>
        </div>
        </>
    )
}