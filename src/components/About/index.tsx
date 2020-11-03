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
import { FiMail } from "react-icons/fi";

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
          <FaLinkedinIn className="icon-option" size={44} />
          <FaInstagram className="icon-option" size={44} />
          <FiMail className="icon-option" size={44} />
          <FaWhatsapp className="icon-option" size={44} />
        </div>
      </AboutText>
    </Container>
  );
};

export default About;
