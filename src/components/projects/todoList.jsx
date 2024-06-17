import React from "react";
import style from "./projects.module.css";
import todoList from "../../img/projects-img/ToDo List.jpg";

const TodoList = () => {
    return (
        <section className={style.project1}>
            <div className={style.projectImgDiv}>
                <img
                    src={todoList}
                    alt="countdown_timer"
                    className={style.projectImgNotDeployed}
                />
            </div>
            <div className={style.textAndBtnR}>
                <div className={style.projectTextCont}>
                    <h5 className={style.dev}>Fullstack</h5>
                    <div className={style.titleDiv}>
                        <h1 className={style.projectTitle}>TODO list</h1>
                        <h5>(Not deployed yet)</h5>
                    </div>
                    <p className={style.projectText}>
                        Full stack app, made to practice CRUD methods and User
                        Authentications with JWT and Cookies. Developed using
                        the PERN stack (PostgreSQL, Express, React, and
                        Node.js). It's a to-do list application that enables
                        users to create, retrieve, update, and delete tasks
                        individually. With user registration functionality, it
                        ensures a unique task list for each user.
                    </p>
                </div>
                <div className={style.projectButtons}>
                    <a
                        href="https://github.com/julianllop/ToDo-List-user-auth"
                        className={style.code}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View code
                    </a>
                    {/* <a className={style.site}>Visit site</a> */}
                </div>
            </div>
        </section>
    );
};

export default TodoList;
