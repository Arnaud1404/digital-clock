import React, {useState, useEffect} from "react";
import styles from "./DigitalClock.module.css";

function DigitalClock(){

    return(
    <div className={styles["clock-container"]}>
        <div className={styles["clock"]}>
            <span>00:00:00</span>
        </div>
    </div>);
}

export default DigitalClock;