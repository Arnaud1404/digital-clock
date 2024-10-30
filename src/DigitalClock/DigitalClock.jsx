import React, {useState, useEffect} from "react";
import styles from "./DigitalClock.module.css";

function DigitalClock(){

    const [time, setTime] = useState(new Date());
    const [format, setFormat] = useState("24 Hour");

    useEffect(() => {
        const intervalId = setInterval(() => {
            // update time every second
            setTime(new Date());
        }, 1000);

        // Cleanup function
        return () => {
            clearInterval(intervalId);
        }
    }, [time]);


    function handleFormatChange(event){
        setFormat(event.target.value);
    }
    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        // PM or AM ?
        const meridiem = format === "24 Hour" ? "" :
                        (hours >= 12 ? " PM" : " AM");
        
        hours = format === "12 Hour" ? hours % 12 || 12 : hours;
        
        //Add a leading zero if necessary
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}${meridiem}`;
    }   


    return(
    <div className={styles["clock-container"]}>
        
        <div className={styles["clock"]}>
            <span>{formatTime()}</span>
        </div>
        <div className={styles["time-format"]}> 
            <legend>Time Format</legend>
            <div className="format-buttons">
                <label>
                    <input type="radio" id="24" value="24 Hour"
                    checked={format === "24 Hour"}
                    onChange={handleFormatChange}/>
                    24 Hour
                </label>
                <label>
                    <input type="radio" id="12" value="12 Hour"
                    checked={format === "12 Hour"}
                    onChange={handleFormatChange}/>
                    12 Hour
                </label>
            </div>
        </div>
    </div>);
}

export default DigitalClock;