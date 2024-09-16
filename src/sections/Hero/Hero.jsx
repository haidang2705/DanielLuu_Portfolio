import styles from './HeroStyles.module.css';
import DLPicture from "../../assets/DL.png";
import Resume from '../../assets/NguyenLuu_Resume.docx';
import Reference from '../../assets/DanielLuu_Reference.docx';
import { useTheme } from '../../common/ThemeContext';
import Icons from '../../statics/index';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={DLPicture}
          className={styles.hero}
          alt="Profile picture of Daniel"
        />
        <div className={styles.colorMode} onClick={toggleTheme}>
          {theme === "light" ? <Icons.SunIcon /> : <Icons.MoonIcon />}
        </div>
      </div>
      <div className={styles.info}>
        <h1>
          Daniel Luu
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://x.com/">
            {theme === "light" ? <Icons.LightTwitterIcon /> : <Icons.DarkTwitterIcon />}
          </a>
          <a href="https://github.com/haidang2705" target="_blank">
            {theme === "light" ? <Icons.LightGithubIcon /> : <Icons.DarkGithubIcon />}
          </a>
          <a href="https://www.linkedin.com/in/daniel-nguyen-luu-a73454218/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate, honest, dedicative and committed Full Stack Developer
          <br />
          Reach out to me if you want to discuss anything
        </p>
        <div className={styles.fileButton}>
          <a href={Resume} download="DanielLuu_Resume.docx">
            <button className="hover">Resume</button>
          </a>
          <a href={Reference} download="DanielLuu_Reference.docx">
            <button className="hover">Reference</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
