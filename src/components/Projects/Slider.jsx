import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import Image1 from "../../assets/shell.jpg";
import Image2 from "../../assets/threading.png";
import Image3 from "../../assets/folder.png";
import Image8 from "../../assets/web.jpg";
import Image11 from "../../assets/sware.png";

let data = [
  {
    img: Image1,
    header: "Simple Shell",
    disc: "This is my rendition of a simple, custom shell written in C. This shell supports UNIX/POSIX commands, piping, I/O redirection, and background processes.",
    demo: false,
    code: true,
    link: "",
    source: "https://github.com/amruth-sn/simple-shell",
  },
  {
    img: Image2,
    header: "Multithreading Library",
    disc: "A custom-built threading library built on top of the C/C++ library pthread.h. Supports numerous functions involving creation, deletion, and management of threads. Supports semaphores.",
    demo: false,
    code: true,
    link: "",
    source: "https://github.com/amruth-sn/pthread_library",
  },
  {
    img: Image3,
    header: "File System",
    disc: "A file system that supports reading/writing, creating/deleting, opening/closing files, in addition to numerous local disk management functions. Implemented using a Windows-style FAT. ",
    demo: false,
    code: true,
    link: "",
    source: "https://github.com/amruth-sn/file-system",
  },
  
  
  
  
  {
    img: Image8,
    header: "Personal Portfolio Website",
    disc: "Using React.js, Email.js @ Browser, and CSS, I was able to develop a personal portfolio website with some styling inspiration from online sources.",
    demo: true,
    code: true,
    link: "https://amruthn.com",
    source: "https://github.com/amruth-sn/portfolio",
  },
  
  {
    img: Image11,
    header: "More coming soon!",
    demo: false,
    code: false,
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: true,
  infinite: true,
  speed: 0,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
        speed: 0
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
        speed: 0
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        speed: 0
      }
    }
  ]
};
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    color: #f2542d;
    border: none;
    position: absolute;
    top: 45%;
    right: -2rem;
    :hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }

  .back {
    left: -2rem;
    :hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;