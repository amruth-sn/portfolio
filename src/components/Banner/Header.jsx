import React, { useState } from 'react'
import styled from 'styled-components';
// import { GiCandleFlame } from "react-icons/gi";
import Image1 from "../../assets/final_logo.png";

const Header = () => {
    const [bar, setBar] = useState(false);
    
    const handleSectionClick = () => {
      setBar(false);
    };
  return (
    <HeaderWrapper>
      <Container bar={bar}>
        <Logo>
          <span className="orange">
            <img src={Image1} className='logo rotating' alt='logo'/>
          </span>
          <h1>Amruth Niranjan</h1>
        </Logo>
        <Nav bar={bar}>
          <span>
            <a href="#home" onClick={handleSectionClick}>
              Home
            </a>
          </span>
          <span>
            <a href="#service" onClick={handleSectionClick}>
              About Me
            </a>
          </span>
          <span>
            <a href="#project" onClick={handleSectionClick}>
              Projects
            </a>
          </span>
          <span>
            <a href="#footer" onClick={handleSectionClick}>
              Contact
            </a>
          </span>
        </Nav>
        <div onClick={() => setBar(!bar)} className="bars">
          <div className="bar"></div>
        </div>
      </Container>
    </HeaderWrapper>
  );
}

export default Header

const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  width: 80%;
  margin: 0 auto;
  padding: 1.5rem 0;
  animation: none;
  
  @media (max-width: 840px) {
    width: 90%;
  }
  .logo {
    max-height: 24px;
    max-width: 24px;
    margin-right: 1rem;
  }
  
  .rotating {
    animation: rotate 12s linear infinite;
  }
  
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .bars {
    display: none;
  }
  @media (max-width: 640px) {
    .bars {
      width: 40px;
      height: 40px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      z-index: 1002;
      .bar {
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: ${(props) => (props.bar ? "transparent" : "#fff")};
        transition: none;
        :before,
        :after {
          content: "";
          width: 100%;
          height: 2px;
          background-color: #fff;
          position: absolute;
        }

        :before {
          transform: ${(props) =>
            props.bar ? "rotate(45deg)" : "translateY(10px)"};
          transition: none;
        }

        :after {
          transform: ${(props) =>
            props.bar ? "rotate(-45deg)" : "translateY(-10px)"};
          transition: none;
        }
      }
    }
  }
`;
const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    span{
        font-size: 1.8rem;
    }

    h1{
        font-weight: 600;
        font-size: 1.2rem;
    }
`
const Nav = styled.div`
  @media (max-width: 640px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    background-color: #f2542d;
    inset: 0;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    font-weight: 700;
    height: ${(props) => (props.bar ? "100vh" : 0)};
    transition: none;
    overflow: hidden;
    z-index: 1001;
    width: 100%;
    left: 0;
    right: 0;
  }
  span {
    margin-left: 1rem;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: 400;
      position: relative;
      :before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: #fff;
        transform: scale(0);
        transform-origin: right;
        transition: none;
      }
      :hover:before {
        transform: scale(1);
        transform-origin: left;
      }
      :hover {
        opacity: 0.7;
      }
    }
  }
`;