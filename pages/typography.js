import styles from "@/styles/Typography.module.css";
import Header from "@/components/Header";
import HeadArea from "@/components/HeadArea";
import Footer from "@/components/Footer";

export default function Typography() {
    return(
        <>
        <HeadArea/>
        <div className="frame">
            <Header/>
            <div className={styles.main}>
                <h1>Typography</h1>
                <p>Typefaces: Inter, <span style={{fontFamily: "Rajdhani, sans-serif"}}>Rajdhani</span></p>
                <p>We like Rajdhani because the typeface is slightly more condensed, which contributes to the togetherness theme that we are going for.
                It also consists of many parallel and perpendicular lines, while maintaining some softer edges, which gives a sense of order, stability, and gentleness that we want in our app.
                </p>
                <p>
                    We chose Inter for our base font because it has a high x-height which helps with readability. It also has a large number of styles/weights which gives us many options to choose from when designing our layouts.
                </p>
                <p>Style names may not be indicative of actual use case. The names are simply borrowed from the working Figma file.</p>
                <h2>Headers</h2>
                <div className={styles.content}>
                    <ul>
                        <li><h1>Header 1: Rajdhani Bold 28px</h1></li>
                        <li><h2>Header 2: Inter Bold 24px</h2></li>
                        <li><h3>Header 3: Inter Bold 20px</h3></li>
                        <li><h4>Header 4: Inter Regular 18px</h4></li>
                        <li><h5>Header 5: Inter Regular 17px</h5></li>
                    </ul>
                </div>
                <h2>Body</h2>
                <div className={styles.content}>
                    <ul>
                        <li><p>Body: Inter Regular 16pt</p></li>
                        <li><p style={{fontSize: "var(--sub-body)"}}>Sub: Inter Regular 15px</p></li>
                        <li><p style={{fontSize: "var(--footnote)"}}>Footnote: Inter Regular 14px</p></li>
                        <li><p className="caption1">Caption 1: Inter Regular 12px</p></li>
                    </ul>
                </div>
                <h2>Examples</h2>
                <div className={styles.examples}>
                <div className={styles.example}>
                    <h1>Welcome to studiUs!</h1>
                    <h4>Proceed to get started.</h4>
                </div>
                    <div className={styles.example}>
                        <h2>Getting Started</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        </>
    )
}