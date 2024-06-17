import style from "./projects.module.css";
import timer from "../../img/projects-img/timer.jpg";

const CountdownTimer = () => {
    return (
        <section className={style.project1}>
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
                        Personalized countdown timer. Select your desired date,
                        and watch as it accurately counts down the time
                        remaining until your chosen moment arrives. Stay
                        connected to your most anticipated events with this
                        interactive and user friendly countdown timer.
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
    );
};

export default CountdownTimer;
