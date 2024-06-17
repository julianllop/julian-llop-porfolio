import Presentation from "./components/presentation/presentation";
import style from "./app.module.css";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";

function App() {
    return (
        <div className={style.App}>
            <div className={style.shapeBG}></div>
            <Presentation />
            <About />
            <Projects />
            <Skills />
        </div>
    );
}

export default App;
