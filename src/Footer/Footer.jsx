import styles from "./Footer.module.css";


function Footer(){
    return(
    <footer className={styles["footer-container"]}>
        <div className={styles["copyright"]}>
            &copy;{new Date().getFullYear()} Arnaud Gomes
        </div>
        <div className={styles["credit"]}>
            <a href="https://wall.alphacoders.com/big.php?i=976013" target="_blank" rel="noopener noreferrer">
                Image credit
            </a>
        </div>
        
    </footer>
    );
}

export default Footer