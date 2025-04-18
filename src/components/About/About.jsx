import React from "react";
import { MdDesignServices } from "react-icons/md";
// import { FiCodesandbox } from "react-icons/fi";
import { CgBolt, CgBulb, CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
// import { Slide } from "react-awesome-reveal";

const About = () => {
  return (
    <Container id="service">
      <h4>
        About <span className="orange">Me</span>
      </h4>
      <h1>What I Do</h1>
      <Cards>
        <Card
          Icon={MdDesignServices}
          title={"About Me"}
          disc={`I describe myself as disciplined, passionate, and optimistic. I want to carve out my future in AI/ML, and I love learning about everything I come across.`}
        />
        <Card
          Icon={CgBolt}
          title={"Skills"}
          disc={`I am proficient in C, C++, and Python, and Java. I am highly experienced in PyTorch for building ML systems. I also love the theory (math) side of ML.`}
        />
        <Card
          Icon={CgBulb}
          title={"Research"}
          disc={`I'm currently researching deep learning methods for epileptic seizure detection and related medical computer vision applications.`}
        />
        <Card
          Icon={CgWebsite}
          title={"Future"}
          disc={`In the future, I may see myself working in the industry or in a research-related role. I am also interested in pursuing higher education.`}
        />
      </Cards>
    </Container>
  );
};

export default About;

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
