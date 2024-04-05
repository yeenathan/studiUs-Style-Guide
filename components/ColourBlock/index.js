import styles from "./ColourBlock.module.css";

export default function ColourBlock({colour}) {
    return(
        <div className={styles.block}>
            <div className={styles.colourSquare} style={{backgroundColor: `var(${colour.variable}`}}/>
            <p>{colour.name}</p>
        </div>
    )
}