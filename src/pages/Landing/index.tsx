import React from "react";

import { Container, Header, Hero, SkillsContainer } from "./styles";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import heroIlustration from "../../assets/hero-ilustration.svg";
import frontEnd from "../../assets/front-end.svg";
import backEnd from "../../assets/back-end.svg";
import figma from "../../assets/figma.svg";

import Skills from "../../components/Skills";
import About from "../../components/About";
import { FaCopyright } from "react-icons/fa";

const Landing: React.FC = () => {
  return (
    <Container>
      <Header>
        <div className="container">
          <h1>
            <strong>Eduardo</strong> Moresco
          </h1>
          <div className="social-media-items">
            <a href="/" className="btn-item">
              <AiFillLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a href="" className="btn-item">
              <AiFillGithub size={24} />

              <span>Github</span>
            </a>
          </div>
        </div>
      </Header>
      <Hero>
        <div className="container">
          <img src={heroIlustration} alt="Ilustração" />
          <p className="hero-text">
            Olá, sou desenvolvedor web <span>apaixonado</span> por tecnologia e
            design de interfaces.
          </p>
        </div>
      </Hero>
      <SkillsContainer>
        <div className="container">
          <Skills
            title="UI / UX Design"
            img={figma}
            alt="Figma icon"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dignissim in quis orci convallis."
          />
          <Skills
            title="Front-End"
            img={frontEnd}
            alt="Front-End icon"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dignissim in quis orci convallis."
          />
          <Skills
            title="Back-End"
            img={backEnd}
            alt="Back-End icon"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae dignissim in quis orci convallis."
          />
        </div>
      </SkillsContainer>
      <About />
      <footer>
        <p>
          <FaCopyright /> Desenvolvido e mantido por Eduardo Moresco
        </p>
      </footer>
    </Container>
  );
};

export default Landing;
