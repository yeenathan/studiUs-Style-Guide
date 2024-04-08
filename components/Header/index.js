import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
        <header className={styles.header}>
            <Link href="/" className={styles.navlink}><Image src="/images/logo/logo-colour.svg" width={594} height={260} className={styles.logo}/> Style Guide</Link>
            <Link href="/colours" className={styles.navlink}>Colours</Link>
            <Link href="/typography" className={styles.navlink}>Typography</Link>
            <Link href="/graphics" className={styles.navlink}>Graphics</Link>
            <Link href="/references" className={styles.navlink}>References</Link>
        </header>
    )
}