import React from "react";
import style from "./projects.module.css";
import CountdownTimer from "./countdownTimer";
import Recipes from "./recipes";
import HairSalon from "./hairSalon";
import TodoList from "./todoList";

const Projects = () => {
    return (
        <div className={style.projects}>
            <h1 className={style.h1}>PROJECTS</h1>
            <HairSalon />
            <TodoList />
            <Recipes />
            <CountdownTimer />
        </div>
    );
};

export default Projects;
