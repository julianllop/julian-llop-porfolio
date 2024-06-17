import style from "./projects.module.css";
import recipes from "../../img/projects-img/recipes.jpg";

const Recipes = () => {
    return (
        <section className={style.project2}>
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
                    <div className={style.titleDiv}>
                        <h1 className={style.projectTitle}>
                            Recipes Catalog API
                        </h1>
                        <h5>(API currently not working)</h5>
                    </div>
                    <p className={style.projectText}>
                        Dynamic recipe catalog that can be filtered by diet
                        type, health score, and alphabetically. The recipes are
                        sourced from an API, enabling users to explore a wide
                        range of culinary delights. Additionally, it allows
                        users to create and save new recipes in a secure
                        database, making it a personalized platform for culinary
                        enthusiasts.
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
                        href="https://www.linkedin.com/posts/julianllop_fullstackdeveloper-henrybootcamp-passionincode-activity-7094302319638368256-0rCE?utm_source=share&utm_medium=member_desktop"
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

export default Recipes;
