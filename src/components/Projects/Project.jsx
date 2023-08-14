import React from 'react'
import styled from 'styled-components';

const Project = (props) => {
    const { img, header, disc, demo, code, link, source } = props.item;
  return (
    <Container className="project">
      <img src={img} alt="project" />
      <div className="disc">
        <h1>{header}</h1>
        <p>
          {disc}
          <a
            className={`demo ${demo ? "active" : ""}`}
            target="_blank"
            rel="noreferrer"
            href={link}
          >
            Live
          </a>
          <a
            className={`code ${code ? "active" : ""}`}
            target="_blank"
            rel="noreferrer"
            href={source}
          >
            Source Code{" "}
          </a>
        </p>
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
  // cursor: pointer;
  position: relative;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }
  .disc {
    position: absolute;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
    transition: all 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;

      .demo {
        margin-left: 0.4rem;
        color: #01be96;
        text-decoration: all;
        opacity: 0;
      }
      .code {
        margin-left: 0.4rem;
        color: #01be96;
        text-decoration: all;
        opacity: 0;
      }

      .demo.active {
        opacity: 1;
        cursor: pointer;
      }
      .code.active {
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  :hover > img {
    transform: scale(1.3);
  }

  :hover > .disc {
    bottom: 0;
  }
`;