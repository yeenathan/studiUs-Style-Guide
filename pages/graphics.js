import styles from "@/styles/Graphics.module.css";
import Header from "@/components/Header";
import HeadArea from "@/components/HeadArea";
import Image from "next/image";

export default function Graphics() {
    return(
        <>
        <HeadArea/>
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>Graphics</h1>
                <p>When choosing our graphics, we opted to include soft looking visuals to provide comfort and care for our users. </p>
                <ul>
                  <li>
                    <h3>Icons</h3>
                    <p>Our icons consist of soft edged and filled visuals that are easily recognizable which provide cognitive inclusivity. By employing this approach, we ensure that our visual elements are accessible to all users, regardless of their cognitive abilities or visual impairments.</p>
                  </li>
                  <li>
                    <h3>Vector Graphics</h3> 
                    <p>Maintaing a safe and supportive feeling, our choice of vector graphic artstyles represent studiUs's mission to provide a comforting experience for every single user.</p>
                  </li>
                  <li>                            
                    <h3>Photographs</h3>
                    <p>Using relevant to context photographs, our choices aim to continue providing warmth and welcoming to our users.</p>
                  </li>
                </ul>
                <h2>Examples</h2>
                <div className={styles.examples}>
                  <div className={styles.example}>
                    <Image src="/images/graphics-5.png" width={908} height={1734} style={{width: "400px", height: "auto"}}/>
                    <p className="caption1">Vector Graphic</p>
                  </div>
                  <div className={styles.example}>
                    <Image src="/images/graphics-4.png" width={908} height={1734} style={{width: "400px", height: "auto"}}/>
                    <p className="caption1">Vector Graphic</p>
                  </div>
                  <div className={styles.example}>
                    <Image src="/images/graphics-3.png" width={908} height={1734} style={{width: "400px", height: "auto"}}/>
                    <p className="caption1">Icons</p>
                  </div>
                  <div className={styles.example}>
                    <Image src="/images/graphics-2.png" width={908} height={1734} style={{width: "400px", height: "auto"}}/>
                    <p className="caption1">Vector Graphic</p>
                  </div>
                  <div className={styles.example}>
                    <Image src="/images/graphics-1.png" width={908} height={1734} style={{width: "400px", height: "auto"}}/>
                    <p className="caption1">Photograph</p>
                  </div>
                </div>
            </div>
        </div>
        </>
    )
}