import { useState } from "react";
import "./about.css";

function About(){
    const [isVisible, setIsVisible] = useState(false);

    function displayInfo() {
        setIsVisible(true);
    }

    function getInfo(){
        if (!isVisible) return "";

        return (
            <div className="info">
                <p>Email: <b>daisha05311994@gmail.</b></p>
                <p>Phone: <b>1(800) 000 000</b></p>
            </div>
        )
    }

    return (
        <div className="about">
            <img src="/image/Aboutpage.jpg" />

            <h3>Meet the developer</h3>
            <h1>Daisha McCutcheon</h1>

            {getInfo()}
            <button onClick={displayInfo} className="btn btn-outline-dark">My Info</button>
        </div>
    );
}

export default About;