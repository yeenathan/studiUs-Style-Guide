import Header from "@/components/Header";
import styles from "@/styles/Colour.module.css";

import ColourBlock from "@/components/ColourBlock";
import {colours} from "@/data/colours";

export default function Colours() {
    return(
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>Colours</h1>
                <p>Colour names are not indicitave of actual hue values. The names are simply borrowed from the working Figma file.</p>
                {
                    colours.map((hue) => {
                    return(
                        <>
                        <h3>{hue.category}</h3>
                        <div className={styles.colourCategory}>
                        {
                            hue.data.map((style) => {
                            return <ColourBlock colour={style}/>
                            })
                        }
                        </div>
                        </>
                    )
                })
            }
            </div>
        </div>
    )
}