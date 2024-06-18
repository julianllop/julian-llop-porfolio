import React from "react";
import style from "./about.module.css";
import profile_photo from "../../img/profile2.jpg";

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.imgCont}>
                <img
                    src={profile_photo}
                    alt="profile_photo"
                    className={style.profile}
                />
            </div>

            <div className={style.aboutText}>
                <h1 className={style.h1}>ABOUT ME</h1>
                <p>
                    With 3 years of experience in Fullstack Development, I am
                    excited to offer my professional services to those in need.
                    I specialize in the PERN stack (PostgreSQL, Express.js,
                    React, Node.js) and am dedicated to delivering high-quality
                    and innovative solutions. Additionally, I am currently
                    expanding my skill set with C# and Test Driven Development.
                    Let's collaborate and create something exceptional together!
                </p>
            </div>
        </div>
    );
};

export default About;
