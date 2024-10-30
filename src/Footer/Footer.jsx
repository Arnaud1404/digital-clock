import styles from "./Footer.module.css";


function Footer(){
    return(
    <footer className={styles["footer-container"]}>
        <div className={styles["copyright"]}>
            &copy;{new Date().getFullYear()} Arnaud Gomes
        </div>
        <div className={styles["credit"]}>
            <a href="https://www.pixiv.net/en/artworks/72055179" target="_blank" rel="noopener noreferrer">
                Image credit
            </a>
        </div>
        
    </footer>
    );
}

export default Footer