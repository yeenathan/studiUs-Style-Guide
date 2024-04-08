import styles from "./ColourBlock.module.css";

export default function ColourBlock({colour}) {
    return(
        <div className={styles.block}>
            <div className={styles.colourSquare} style={{background: `var(${colour.variable}`}}/>
            <p className="caption1" style={{marginBottom: 0}}>{colour.name}</p>
            <p className="caption1" style={{margin: 0}}>{colour.hex}</p>
        </div>
    )
}