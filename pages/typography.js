import styles from "@/styles/Typography.module.css";
import Header from "@/components/Header";

export default function Typography() {
    return(
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>Typography</h1>
            </div>
        </div>
    )
}