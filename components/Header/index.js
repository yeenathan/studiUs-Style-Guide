import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.navlink}>studiUs Style Guide</Link>
            <Link href="/typography" className={styles.navlink}>Typography</Link>
            <Link href="/colours" className={styles.navlink}>Colours</Link>
            <Link href="/references" className={styles.navlink}>References</Link>
        </header>
    )
}