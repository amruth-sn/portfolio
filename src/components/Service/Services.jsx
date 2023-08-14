import React from "react";
import { MdDesignServices } from "react-icons/md";
// import { FiCodesandbox } from "react-icons/fi";
import { CgBolt, CgBulb, CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          About <span className="green">Me</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Programming Languages"}
            disc={`I am proficient in C++, Python, and Java. I have taught myself JavaScript and Python. I am also well-versed in MATLAB, Verilog, C, and HTML/CSS.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={CgBolt}
            title={"Skills"}
            disc={`I describe myself as disciplined, passionate, and content with what I do. I am competitive and a team player. Check out my resume for more!`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgBulb}
            title={"Experience"}
            disc={`Most recently, I worked as a researcher with the University of Connecticut, where I worked with the U.S. Navy to develop software for data analysis.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Interests"}
            disc={`In the future, I may see myself working in the industry or in a research-related role. I am also interested in the potential pursuit of higher education.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
