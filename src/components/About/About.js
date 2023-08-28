import React from 'react';
import { NavLink } from 'react-router-dom';

import aboutImage from '../../images/about.jpeg';

const About = () => {
  return (
    <section className="about">
      <NavLink
        to="https://www.linkedin.com/in/phillippe-pmpisintech/"
        target="_blank"
        className="about__link"
      >
        <img className="about__image" src={aboutImage} alt="Phillippe Louis" />
      </NavLink>
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          Hello, I'm Phillippe Louis, an enthusiastic and driven Full Stack Engineer actively
          pursuing new opportunities. With a strong foundation in software development, I've
          embarked on a transformative journey through TripleTen's immersive program, where I've
          honed my coding prowess and problem-solving abilities. This website is a showcase of my
          dedication, serving as the culmination of my hard work during the program. As I eagerly
          seek a fulfilling full-time position, I bring with me a deep passion for crafting
          innovative solutions and a track record of collaborating effectively with cross-functional
          teams.
        </p>
        <p className="about__paragraph">
          If you're a hiring manager on the lookout for a motivated professional or if you've
          stumbled upon job openings that require my skill set, I invite you to connect with me on
          LinkedIn (Link provided in the footer). Your insights and expertise could be invaluable in
          helping me thrive in my next role. Thank you for considering my profile, and I look
          forward to the exciting opportunities that lie ahead.
        </p>
      </div>
    </section>
  );
};

export default About;
