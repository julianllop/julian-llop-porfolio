import React from "react";
import style from "./projects.module.css";
import beers from "../../img//projects-img/BeerTown.jpeg";

const BeerTown = () => {
    return (
        <section className={style.project1}>
            <div className={style.projectImgDiv}>
                <a
                    href="https://beer-town.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src={beers}
                        alt="beer-town"
                        className={style.projectImg}
                    />
                </a>
            </div>
            <div className={style.textAndBtnR}>
                <div className={style.projectTextCont}>
                    <h5 className={style.dev}>Fullstack</h5>
                    <div className={style.titleDiv}>
                        <h1 className={style.projectTitle}>Beer Town</h1>
                    </div>
                    <p className={style.projectText}>
                        This fullstack application was developed to practice
                        backend sorting and filtering methods, Tailwind CSS, and
                        Redux Toolkit on the frontend. The application displays
                        a selection of beers retrieved from the{" "}
                        <a
                            href="https://sampleapis.com/"
                            target="_blank"
                            rel="noreferrer"
                            className={style.projectLink}
                        >
                            sampleapis.com
                        </a>{" "}
                        API. The frontend is built with React and the backend
                        with Node.js, providing a smooth and efficient user
                        experience.
                    </p>
                </div>
                <div className={style.projectButtons}>
                    <a
                        href="https://github.com/julianllop/BeerTown"
                        className={style.code}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View code
                    </a>
                    <a
                        href="https://beer-town.vercel.app"
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
};

export default BeerTown;
