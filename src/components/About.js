import aboutImage from "../images/about.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <Link
        to="https://www.linkedin.com/in/phillippe-pmpisintech/"
        target="_blank"
      >
        <img className="about__image" src={aboutImage} alt="Phillippe Louis" />
      </Link>
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          Hi, I'm Phillippe Louis, a Full Stack Engineer actively seeking
          employment. This website serves as my final project during TripleTen's
          software development program, and I'm currently on the lookout for a
          full-time position.
        </p>
        <p className="about__paragraph">
          If you know of any suitable job opportunities that match my
          qualifications, whether you're a hiring manager or have come across a
          job posting, feel free to reach out to me via LinkedIn (Link in the
          footer).
        </p>
      </div>
    </section>
  );
};

export default About;
