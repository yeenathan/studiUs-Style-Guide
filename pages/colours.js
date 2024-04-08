import Header from "@/components/Header";
import styles from "@/styles/Colour.module.css";
import Image from "next/image";

import ColourBlock from "@/components/ColourBlock";
import {colours} from "@/data/colours";
import Button from "@/components/Button";
import HeadArea from "@/components/HeadArea";

export default function Colours() {
    return(
        <>
        <HeadArea/>
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>Colours</h1>
                <p>Colour names are not indicitave of actual hue values. The names are simply borrowed from the working Figma file.</p>
                {
                    colours.map((hue) => {
                    return(
                        <>
                        <h4>{hue.category}</h4>
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
                <h2>Examples</h2>
                <div className={styles.examples}>
                    <div className={styles.example}>
                        <Button text="BUTTON"/>
                        <p className="caption1">Button</p>
                    </div>
                    <div className={styles.example}>
                        <Image src="/images/overlay.png" width={872} height={1218} style={{width: "300px", height: "auto"}}/>
                        <p className="caption1">Overlay</p>
                    </div>
                    <div className={styles.example}>
                        <Image src="/images/groups-home.png" width={908} height={1734} style={{width: "400px", height: "auto"}}/>
                        <p className="caption1">Groups Home</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}