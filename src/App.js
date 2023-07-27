import Presentation from "./components/presentation/presentation";
import style from './app.module.css'
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Projects from "./components/projects/projects";


function App() {
  return (
    <div className={style.App}>
      <Presentation/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
