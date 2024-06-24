import React from "react";
import style from "./skills.module.css";
import html from "../../img/logos/html5.png";
import css from "../../img/logos/css.png";
import js from "../../img/logos/js.png";
import MUI from "../../img/logos/MUI.png";
import node from "../../img/logos/node.png";
import postgre from "../../img/logos/postgre.png";
import react from "../../img/logos/react.png";
import typescript from "../../img/logos/typescript.png";
import tailwind from "../../img/logos/TailwindCSS.png";
import redux from "../../img/logos/redux.png";
import jwt from "../../img/logos/jwt.png";
import sequelize from "../../img/logos/sequelize.png";
import postman from "../../img/logos/postman.png";
import git from "../../img/logos/git.png";
import sass from "../../img/logos/sass.png";
import express from "../../img/logos/express.png";

const Skills = () => {
    return (
        <section className={style.container}>
            <div className={style.skills}>
                <h1 className={style.h1}>SKILLS</h1>
                <div className={style.skillsCont}>
                    <img src={js} alt="js" className={style.js} />
                    <img src={react} alt="react" className={style.react} />
                    <img
                        src={typescript}
                        alt="typescript"
                        className={style.typescript}
                    />
                    <img src={redux} alt="redux" className={style.redux} />
                    <img src={node} alt="node" className={style.node} />
                    <img
                        src={express}
                        alt="express"
                        className={style.express}
                    />
                    <img
                        src={postgre}
                        alt="postgre"
                        className={style.postgre}
                    />
                    <img
                        src={sequelize}
                        alt="sequelize"
                        className={style.sequelize}
                    />
                    <img src={jwt} alt="jwt" className={style.jwt} />
                    <img src={html} alt="html" className={style.html} />
                    <img src={css} alt="css" className={style.css} />
                    <img
                        src={tailwind}
                        alt="tailwind"
                        className={style.tailwind}
                    />
                    <img src={sass} alt="sass" className={style.sass} />
                    <img src={MUI} alt="MUI" className={style.MUI} />
                    <img src={git} alt="git" className={style.git} />
                    <img
                        src={postman}
                        alt="postman"
                        className={style.postman}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
