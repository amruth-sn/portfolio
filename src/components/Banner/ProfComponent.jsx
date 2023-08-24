import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Slide } from "react-awesome-reveal";
import Image1 from "../../assets/IMG_0179.PNG";
const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hi, <span className="green">I'm</span>
          </h4>
          <h1 className="green">Amruth Niranjan</h1>
          <h3>Junior Software Developer</h3>
          <h3>Student at Boston University</h3>
          <p>
            I'm a third-year Computer Enginering student at Boston University. I
            am in search of internship opportunities in fields including
            full-stack software development, back-end development, embedded
            systems engineering, and more.
          </p>
          <br></br>
          <p>
            I am currently based in Boston, MA, but I grew up in West Hartford,
            CT. Over the course of my 19 years of being alive, I've always been
            interested in math and science, but I fell in love with the low to
            high-level architecture of computer systems as soon as I began
            programming. My interests today also include applied mathematics,
            physics, and electronics design.
          </p>
          <br></br>
          <br></br>
          <a href="#footer" class="anchorbutton">
            Let's talk
          </a>
          <a
            href="https://docs.google.com/document/d/1oUsWQO5U_6I6VPNclN4rkFa5xXtONi1Z/preview"
            target="_blank"
            rel="noreferrer"
            class="resumebutton"
          >
            Resume
          </a>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/amruth_n/"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
              <span>
                <a
                  href="https://github.com/amruth-sn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/amruthn/"
                >
                  <FaLinkedinIn />
                </a>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src={Image1} alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }
  .anchorbutton {
    text-decoration: none;
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #f2542d;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #f2542d51);
    :hover {
      filter: drop-shadow(0px 10px 10px #f2542d70);
    }
  }
  .resumebutton {
    text-decoration: none;
    padding: 0.7rem 2rem;
    margin-left: 3rem;
    cursor: pointer;
    background-color: #f2542d;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #f2542d51);
    :hover {
      filter: drop-shadow(0px 10px 10px #f2542d70);
    }
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #f2542d;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #f2542d;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
        background-color: purple;
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #f2542d70);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateX(-10px);
  }
`;
