import React from "react";
import style from "./projects.module.css";
import CountdownTimer from "./countdownTimer";
import Recipes from "./recipes";
import HairSalon from "./hairSalon";
import TodoList from "./todoList";
import Bata11 from "./bata11";

const Projects = () => {
    return (
        <div className={style.projects}>
            <h1 className={style.h1}>PROJECTS</h1>
            <HairSalon />
            <Bata11 />
            <TodoList />
            <Recipes />
            <CountdownTimer />
        </div>
    );
};

export default Projects;
