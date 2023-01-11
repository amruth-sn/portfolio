import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image1 from '../../assets/images/ai-image.jpg'
import Image2 from '../../assets/images/web.jpg'
import Image3 from '../../assets/images/sudoku.jpg'
import Image4 from '../../assets/images/liberty.jpg'
import Image5 from '../../assets/images/sware.png'

const Projects = () => {
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
        <div className="container projects-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
              />
            </h1>
            <br />
            <div>
              <p>Here are some of my projects in various languages.</p>
              <div className="projects">
                {/* <div className="project-item">
                  <div className="image">
                    <img src={Image1} alt=""></img>
                  </div>
                  <div className="hover-item">
                    <h3>Project Source</h3>
                    <div className="icons">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/amruth-sn"
                      >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                      </a>
                    </div>
                  </div>
                </div> */}

                <div className="project-item-1">
                  <div className="image">
                    <img src={Image1} alt=""></img>
                  </div>
                  <div className="hover">
                    <div class="color-block">
                      <h2 className="title">Video Script Generator</h2>
                      <h2 className="subtext">Python | OpenAI API | Flask</h2>
                      <h3>
                        Project Source:
                        <br />
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/amruth-sn/openai-project"
                        >
                          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="project-item-2">
                  <div className="image">
                    <img src={Image4} alt=""></img>
                  </div>
                  <div className="hover">
                    <div class="color-block">
                      <h2 className="title">Multimodal Digital Clock</h2>
                      <h2 className="subtext">Verilog HDL</h2>
                      <h3>
                        Project Source:
                        <br />
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/amruth-sn/multimodal_digital_clock"
                        >
                          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="project-item-3">
                  <div className="image">
                    <img src={Image2} alt=""></img>
                  </div>
                  <div className="hover">
                    <div class="color-block">
                      <h2 className="title">Portfolio Website</h2>
                      <h2 className="subtext">
                        HTML5 | CSS3 | JavaScript | React
                      </h2>
                      <h3>
                        Project Source:
                        <br />
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/amruth-sn/portfolio"
                        >
                          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="project-item-4">
                  <div className="image">
                    <img src={Image3} alt=""></img>
                  </div>
                  <div className="hover">
                    <div class="color-block">
                      <h2 className="title">Sudoku Solver</h2>
                      <h2 className="subtext">Java</h2>
                      <h3>
                        Project Source:
                        <br />
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/amruth-sn/sudoku-solver"
                        >
                          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="project-item-5">
                  <div className="image">
                    <img src={Image5} alt=""></img>
                  </div>
                  <div className="hover">
                    <div class="color-block">
                      <h3>
                        Coming Soon!
                        <br />
                      </h3>
                    </div>
                  </div>
                </div>
                {/* <div className='under-flow'>
                             <br />   
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Loader type="square-spin" />
      </>
    )
}
export default Projects