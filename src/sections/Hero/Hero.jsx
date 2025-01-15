import styles from "./HeroStyles.module.css";
import heroImg from "./Assets/hero-img.png";
import sun from "./Assets/sun.svg";
import moon from "./Assets/moon.svg";
import twitterLight from "./Assets/twitter-light.svg";
import twitterDark from "./Assets/twitter-dark.svg";
import githubLight from "./Assets/github-light.svg";
import githubDark from "./Assets/github-dark.svg";
import LinkedinLight from "./Assets/LinkedIn-light.svg";
import LinkedinDark from "./Assets/LinkedIn-dark.svg";
import CV from "./Assets/Test Resume.pdf";
import { useTheme } from "../../Common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedInIcon = theme === "light" ? LinkedinLight : LinkedinDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile pic of Miles Roark"
          id="heroImg"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Miles <br /> Roark
        </h1>
        <h2>Hobbyist Coder</h2>
        <span>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
          <a href="https://LinkedIn.com" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hobbyist Coder currently learning the ins and outs of web development
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
