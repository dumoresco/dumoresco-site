import React from "react";

import { Container } from "./styles";

interface Skills {
  title: string;
  img: string;
  alt: string;
  text: string;
}

const Skills: React.FC<Skills> = (props) => {
  return (
    <Container>
      <div className="skills-header">
        <h2>{props.title}</h2>
        <img src={props.img} alt={props.alt} />
      </div>
      <p className="skills-text">{props.text}</p>
    </Container>
  );
};

export default Skills;
