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
            title={"Languages & Skills"}
            disc={`I am proficient in C, C++, and Python (self-taught). I have worked my way through many Python libraries, most importantly PyTorch and TensorFlow.`}
          />
        </Slide>
        <Slide direction="down">
          <Card
            Icon={CgBolt}
            title={"Skills"}
            disc={`I describe myself as disciplined, passionate, and content with what I do. I am a team-player who can't seem to shy away from a competition!`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgBulb}
            title={"Experience"}
            disc={`I'm currently researching deep learning methods for epileptic seizure detection and related medical computer vision applications.`}
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
