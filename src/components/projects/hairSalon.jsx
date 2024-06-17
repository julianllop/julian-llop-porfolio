import React from "react";
import style from "./projects.module.css";
import hairSalon from "../../img/projects-img/Products.jpg";

export default function HairSalon() {
    return (
        <section className={style.project1}>
            <div className={style.projectImgDiv}>
                <img
                    src={hairSalon}
                    alt="countdown_timer"
                    className={style.projectImgNotDeployed}
                />
            </div>
            <div className={style.textAndBtnR}>
                <div className={style.projectTextCont}>
                    <h5 className={style.dev}>Fullstack</h5>
                    <div className={style.titleDiv}>
                        <h1 className={style.projectTitle}>
                            Hair salon eCommerce
                        </h1>
                        <h5>(Not deployed yet)</h5>
                    </div>
                    <p className={style.projectText}>
                        Full stack app, designed for managing appointments and
                        an e-commerce section for a hair salon. Developed to
                        practice CRUD methods and User Authentications with JWT
                        and Cookies in a more complex level.
                        <br />
                        Developed using the PERN stack (PostgreSQL, Express,
                        React, and Node.js). It allows users to schedule
                        appointments, purchase products, and manage their
                        profile. Additionally, it provides an admin dashboard to
                        monitor appointments and product sales.
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
                    {/* <button href="" className={style.siteButton}>
                        Visit site
                    </button> */}
                </div>
            </div>
        </section>
    );
}
