import React from "react";
import styled from "styled-components";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
// import { Slide } from "react-awesome-reveal";
import Image1 from "../../assets/IMG_1583.png";
const ProfComponent = () => {
  return (
    <Container id="home">
      <Texts>
        <h4>
          Hi, <span className="orange">I'm</span>
        </h4>
        <h1 className="orange">Amruth Niranjan</h1>
        <h3>Student at Boston University</h3>
        <p>
          I'm a fourth-year Computer Engineering student at Boston University with a concentration 
          in Machine Learning.
        </p>
        <br></br>
        <p>
          I'm currently based in Boston, MA, but I grew up in West Hartford,
          CT. For the last 21 years, I've always been
          interested in math and science, but I fell in love with computers once I started
          programming. My interests include system design (full-stack), hardware optimization, NLP, and computer vision.
        </p>
        <br></br>
        <p>Currently, I'm wrapping up my last semester at BU and looking for opportunities in the industry.
        </p>
        <br></br>
        <br></br>
        <h4 class="quote"><b>"Climb mountains not so the world can see you, but so you can see the world."</b></h4>
        <h6> ― David McCullough Jr. </h6>
        <br></br>
        <br></br>
        <a href="#footer" class="anchorbutton">
          Let's talk
        </a>
        <a
          href="https://docs.google.com/document/d/1Kf1Nz7eEc5h_9odW_LVvNXyyFLnbX5MKNxGac2eijhA/preview?tab=t.0"
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
      <Profile>
        <img src={Image1} alt="profile" />
      </Profile>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 6rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    padding-top: 5rem;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 0rem 0;
    font-weight: 500;

  }

  .quote {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    font-weight: 1000;
    font-family: "Times-Bold";
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
      transition: none;
      :hover {
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
    filter: drop-shadow(0px 10px 10px #0E34A0);
    transition: none;
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
    transform: none;
  }
`;
