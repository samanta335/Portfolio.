import React from 'react';
import "./about.css";
import AboutImg from "../../assets/aboutBW.jpeg";
import CV from "../../assets/Example-Cv.pdf";
import Info from "./Info";

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">A short introduction</span>
        <div className="about__container container grid">
            <div className="about__data">
                <Info />

            </div>
        </div>
    </section>
  );
}

export default About;