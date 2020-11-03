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
            <a
              target="_blank"
              href="https://www.linkedin.com/in/eduardo-moresco-a44b11195/"
              className="btn-item"
            >
              <AiFillLinkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              target="_blank"
              href="https://github.com/dumoresco"
              className="btn-item"
            >
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
            text="Apaixonado por criar soluções e experiências entendendo as necessidades do usuário criando uma interface fácil de usar e com boa experiência de interação. "
          />
          <Skills
            title="Front-End"
            img={frontEnd}
            alt="Front-End icon"
            text="Focado na criação de interfaces web alinhado com o UI design, atualmente utilizando HTML, CSS, Javascript e React."
          />
          <Skills
            title="Back-End"
            img={backEnd}
            alt="Back-End icon"
            text="Atualmente utilizando Node JS para criação de API REST e Mongo DB como banco de dados."
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
