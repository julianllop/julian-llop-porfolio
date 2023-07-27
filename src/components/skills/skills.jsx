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

const Skills = () => {
    return (
        <section className={style.container}>
            <div className={style.skills}>
                <h1>Skills</h1>
                <div className={style.skillsCont}>
                    <img src={react} alt="react" className={style.react} />
                    <img src={js} alt="js" className={style.js} />
                    <img
                        src={typescript}
                        alt="typescript"
                        className={style.typescript}
                    />
                    <img src={html} alt="html" className={style.html} />
                    <img src={css} alt="css" className={style.css} />
                    <img src={MUI} alt="MUI" className={style.MUI} />
                    <img
                        src={postgre}
                        alt="postgre"
                        className={style.postgre}
                    />
                    <img src={node} alt="node" className={style.node} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
