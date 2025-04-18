import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, header, disc, demo, code, link, source } = props.item;
  return (
    <Container className="project">
      <img src={img} alt="project" />
      <div className="disc">
        <h1>{header}</h1>
        <p>{disc}</p>
        <div className="links">
          {demo && (
            <a
              className="demo"
              target="_blank"
              rel="noreferrer"
              href={link}
            >
              Live
            </a>
          )}
          {code && (
            <a
              className="code"
              target="_blank"
              rel="noreferrer"
              href={source}
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Project;

const Container = styled.div`
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 100ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.8rem;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
    transition: all 100ms ease-in-out;
    max-height: 100%;
    overflow-y: auto;
    
    h1 {
      font-size: 1rem;
      margin-top: 0;
      margin-bottom: 0.5rem;
    }

    p {
      width: 95%;
      font-size: 0.8rem;
      margin: 0 0 0.7rem 0;
      line-height: 1.3;
      max-height: 5rem;
      overflow-y: auto;
    }
    
    .links {
      display: flex;
      gap: 0.8rem;
      margin-top: 0.3rem;
      margin-bottom: 0.3rem;
    }

    .demo, .code {
      color: #01be96;
      text-decoration: none;
      font-size: 0.8rem;
      font-weight: 500;
      padding: 0.2rem 0.5rem;
      background-color: rgba(1, 190, 150, 0.1);
      border-radius: 3px;
      cursor: pointer;
      display: inline-block;
      &:hover {
        background-color: rgba(1, 190, 150, 0.2);
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
    max-height: 100%;
  }
`;