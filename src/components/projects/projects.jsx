import React from "react";
import style from "./projects.module.css";
import timer from "../../img/projects-img/timer.jpg";
import recipes from "../../img/projects-img/recipes.jpg";

const Projects = () => {
    return (
        <div className={style.projects}>
            <h1 className={style.h1}>PROJECTS</h1>
            <section className={style.project1}>
                <div className={style.projectImgDiv}>
                    <a
                        href="https://recipes-api-jl.onrender.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={recipes}
                            alt="countdown_timer"
                            className={style.projectImg}
                        />
                    </a>
                </div>
                <div className={style.textAndBtnR}>
                    <div className={style.projectTextCont}>
                        <h5 className={style.dev}>Fullstack</h5>
                        <h1 className={style.projectTitle}>
                            Recipes Catalog API
                        </h1>
                        <p className={style.projectText}>
                            Dynamic recipe catalog that can be filtered by diet
                            type, health score, and alphabetically. The recipes
                            are sourced from an API, enabling users to explore a
                            wide range of culinary delights. Additionally, it
                            allows users to create and save new recipes in a
                            secure database, making it a personalized platform
                            for culinary enthusiasts.
                        </p>
                    </div>
                    <div className={style.projectButtons}>
                        <a
                            href="https://github.com/julianllop/RecipesAPI"
                            className={style.code}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View code
                        </a>
                        <a
                            href="https://recipes-api-jl.onrender.com"
                            className={style.site}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit site
                        </a>
                    </div>
                </div>
            </section>

            <section className={style.project2}>
                <div className={style.projectImgDiv}>
                    <a
                        href="https://julianllop.github.io/countdown_timer/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {" "}
                        <img
                            src={timer}
                            alt="countdown_timer"
                            className={style.projectImg}
                        />
                    </a>
                </div>
                <div className={style.textAndBtnL}>
                    <div className={style.projectTextCont}>
                        <h5 className={style.dev}>Frontend</h5>
                        <h1 className={style.projectTitle}>Countdown Timer</h1>
                        <p className={style.projectText}>
                            Personalized countdown timer. Select your desired
                            date, and watch as it accurately counts down the
                            time remaining until your chosen moment arrives.
                            Stay connected to your most anticipated events with
                            this interactive and user friendly countdown timer.
                        </p>
                    </div>
                    <div className={style.projectButtons}>
                        <a
                            href="https://github.com/julianllop/countdown_timer"
                            className={style.code}
                            target="_blank"
                            rel="noreferrer"
                        >
                            View code
                        </a>
                        <a
                            href="https://julianllop.github.io/countdown_timer/"
                            className={style.site}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Visit site
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
