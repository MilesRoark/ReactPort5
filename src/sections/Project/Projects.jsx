import styles from "./ProjectStyles.module.css";
import pokeGuess from "./Assets/guessPoke.png";
import ProjectCard from "../../Common/ProjectCard";
import personalPage from "./Assets/homePage.png";
import colorfulPiano from "./Assets/cssPiano.png";

function projects() {
  const ProjectData = [
    {
      src: pokeGuess,
      link: "https://guessthatpoke.netlify.app",
      h3: "PokeGuess",
      p: "Guessing Game",
    },
    {
      src: personalPage,
      link: "https://milesroark.netlify.app",
      h3: "Personal Page",
      p: "Artist Page",
    },
    {
      src: colorfulPiano,
      link: "https://minpian.netlify.app",
      h3: "C.S.S Piano",
      p: "A Little C.S.S Fun",
    },
  ];
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        {ProjectData.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.h3}
            p={project.p}
          />
        ))}
      </div>
    </section>
  );
}

export default projects;
