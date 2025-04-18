import React, { useRef } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdSubject } from "react-icons/md";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const refForm = useRef();

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5knrz7e', 'template_0yk2ocg', refForm.current, '1-1YZ_rVRBRZ8-Ppo')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <Container id="footer">
      <Profile>
        <h1>
          Contact <span className="orange">Me</span>
        </h1>
        <div className="address">
          <h1>Find me at:</h1>
          <p>
            <a
              href="https://www.google.com/maps/place/8+St+Mary's+St,+Boston,+MA+02215/@42.349241,-71.1091797,17z/data=!3m1!4b1!4m6!3m5!1s0x89e379f05b90cbc3:0x3bacbfb37153907!8m2!3d42.3492371!4d-71.1066048!16s%2Fg%2F11cscj5swx?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              8 St Mary's St, Boston, MA 02215
            </a>
          </p>
        </div>
        <div className="links">
          <h1>Contact me directly:</h1>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <a href="tel:+1 8607091555">+1 (860) 709-1555</a>
          </div>
          <div>
            <span>
              <HiOutlineMailOpen />
            </span>
            <a href="mailto:amruthsniranjan@gmail.com">
              amruthsniranjan@gmail.com
            </a>
          </div>
        </div>
        <div className="profiles">
          <h1>Check out my profiles!</h1>
          <div className="icons">
            <span>
              <a
                href="https://github.com/amruth-sn"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/amruthn/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/amruthniranjan"
              >
                <BsTwitter />
              </a>
            </span>
          </div>
        </div>
        <ArrowUp onClick={scrollUp}>
          <AiOutlineArrowUp />
        </ArrowUp>
      </Profile>
      <Form>
        <form ref={refForm} onSubmit={sendEmail}>
          <div className="name">
            <span>
              <CgProfile />
            </span>
            <input type="text" placeholder="Name" name="name" required />
          </div>
          <div className="email">
            <span>
              <MdAlternateEmail />
            </span>
            <input
              type="email"
              placeholder="E-mail Address"
              name="email"
              required
            />
          </div>
          <div className="subject">
            <span>
              <MdSubject />
            </span>
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              required
            />
          </div>
          <div className="message">
            <span className="messageIcon">
              <FiMail />
            </span>
            <textarea
              cols="30"
              rows="10"
              placeholder="Message"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
      a {
        color: #ffffff;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }
  
  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F2542D;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;
        position: relative;
        :hover {
          background-color: purple;
          transform: rotate(360deg);
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #f2542d;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .subject,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #f2542d;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;
