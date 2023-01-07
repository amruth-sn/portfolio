import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import Image1 from '../../assets/images/IMG_7852.jpg'

const About = () => {

const [letterClass, setLetterClass] = useState('text-animate')

  
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2500)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Hello! My name is Amruth Niranjan, and I'm currently a Computer
            Engineering student at Boston University. I'm 19 years old and I'm
            in my second year of study. I am in search of internship
            opportunities in a variety of fields, including full stack software
            development, back-end development, machine learning/artificial
            intelligence, and embedded systems engineering.{' '}
          </p>
          <p>
            Right now, I'm based in Boston, MA. I grew up in West Hartford, CT.
            From a young age, I was always interested in math and science. As
            soon as I began programming, I fell in love with the architecture of
            computer systems (from high-level to low-level). Today, I enjoy
            programming and learning about software development, but my
            interests also include applied mathematics, physics, and electronics
            design.{' '}
          </p>
          <p>
            My skills include C++, Python, and Java as my primary three
            languages to work in. Over the course of my engineering discipline,
            I have also excelled in other languages, such as MatLab and Verilog,
            both of which I feel confident in. In the process of building this
            website, I was exposed to JavaScript, React, HTML5, and CSS3, as
            well.{' '}
          </p>
          <p>
            If you would like to see a copy of my resume, click{' '}
            <a
              href="https://drive.google.com/file/d/1e2hsRux_dzEekBm046YP1sNQ0c2gbA2k/view?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . Visit my LinkedIn profile on the sidebar if you would like to hear
            more from me.{' '}
          </p>
          <p>
            I hope you enjoy my website! Feel free to visit the Projects page to
            see some of my work. Also, don't hesitate to contact me if you would
            like to reach out!{' '}
          </p>
          <br />
        </div>
        <div>
          <img className="ppic"src={Image1} alt="pic"></img>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default About