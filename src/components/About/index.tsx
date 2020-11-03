import React from "react";

import { Container, Photo, AboutText } from "./styles";

import me from "../../assets/me.png";
import blobs from "../../assets/blobs.svg";

import {
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const About: React.FC = () => {
  return (
    <Container>
      <Photo>
        <img src={me} alt="" />
        <img src={blobs} id="ilustration" alt="" />
      </Photo>
      <AboutText>
        <span>
          <FaMapMarkerAlt className="span-icon" />
          Porto Alegre - RS
        </span>
        <h1>Olá, sou o Eduardo Moresco</h1>
        <p>
          Tenho 18 anos, sou apaixonado por tecnologia e inovação e atualmente
          estou focado em desenvolvimento front-end e UX/ UI Design.{" "}
        </p>
        <div className="contact-options">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/eduardo-moresco-a44b11195/"
          >
            <FaLinkedinIn className="icon-option" size={44} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/dumoresco/?hl=pt-br"
          >
            <FaInstagram className="icon-option" size={44} />
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1L3G-9oEJ2ywtzFb-8n6563yyO6OnrsIh/view?usp=sharing"
          >
            <CgFileDocument className="icon-option" size={44} />
          </a>
          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=555198316615"
          >
            <FaWhatsapp className="icon-option" size={44} />
          </a>
        </div>
      </AboutText>
    </Container>
  );
};

export default About;
