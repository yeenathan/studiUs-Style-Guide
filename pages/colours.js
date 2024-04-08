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
                <p>StudiUs represents community, education, and comfort. When choosing our colour palette selection, we opt to fully represent studiUs's key values through shape and colour. Opacity values are adjusted according to their use cases to match the desired creative output.</p>
                    <ul>
                        <li>
                            <h3>Primary: Green</h3>
                            <p>Used as our primary colour of design, green is a natural hue representing comfort, positivity, and growth. We utilize different shades of green to add vibrancy and energy without overwhelming the user. Prominently used for key elements such as text and interactive components, it helps create a welcoming and optimistic atmosphere while reinforcing our brand's values of growth and community.</p>
                        </li>
                        <li>
                            <h3>Secondary: Blue</h3> 
                            <p>Our Secondary colour of design, blue conveys trust, professionalism, and reliability. Applied to our buttons and background visuals, blue provides the user with trust-filled direction and flow. Its presence enhances usability and guides users through our platform with a sense of trust and dependability.</p>
                        </li>
                        <li>                            
                            <h3>Accent: Black</h3>
                            <p>Black, though very faint, serves as our accent color, providing subtle depth and dimension to our components. Our choice to use a slightly blue-tinted black softens the impact of shadows, resulting in a smoother visual experience for users.</p>
                        </li>
                        <li>
                            <h3>Background: White</h3>
                            <p>An important element in our design, white reinforces many of our visuals acting as a neutral canvas for our components and assets. Additionally, white's blankness allows for proper contrast, readability, and clarity. White is used extensively for backgrounds, surfaces, and containers. Its clean and minimalist appearance creates a sense of spaciousness and cleanliness, enhancing the overall user experience.</p>
                        </li>
                    </ul>
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