import React from "react";
import style from "./projects.module.css";
import bata11 from "../../img/projects-img/Bata11.jpg";

export default function Bata11() {
    return (
        <section className={style.project2}>
            <div className={style.projectImgDiv}>
                <a
                    href="https://batallon11cordoba.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={bata11}
                        alt="countdown_timer"
                        className={style.projectImg}
                    />
                </a>
            </div>
            <div className={style.textAndBtnR}>
                <div className={style.projectTextCont}>
                    <h5 className={style.dev}>Frontend</h5>
                    <div className={style.titleDiv}>
                        <h1 className={style.projectTitle}>
                            Hair salon eCommerce
                        </h1>
                        <h5>(Still on developement)</h5>
                    </div>
                    <p className={style.projectText}>
                        This is a website created for a youth group that I am
                        part of, called "Exploradores Argentinos de Don Bosco."
                        This group is dedicated to forming good Christians and
                        honorable citizens. The project was developed in
                        collaboration with Eloy Rocha (another member of this
                        group) with the intention of showcasing the activities
                        we carry out, telling our story, and adding a
                        registration section for new members.
                    </p>
                </div>
                <div className={style.projectButtons}>
                    <a
                        href="https://github.com/julianllop/HairSalon-eCommerce"
                        className={style.code}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View code
                    </a>
                    <a
                        href="https://batallon11cordoba.onrender.com/"
                        target="_blank"
                        rel="noreferrer"
                        className={style.site}
                    >
                        Visit site
                    </a>
                </div>
            </div>
        </section>
    );
}
