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
                <h1>About me</h1>
                <p>
                    Fullstack Developer, a Henry graduate, excited to offer my
                    professional services to those in need. With expertise in
                    both frontend and backend development, I am dedicated to
                    delivering high quality and innovative solutions. Let's
                    collaborate and create something exceptional together!
                </p>
            </div>
        </div>
    );
};

export default About;
