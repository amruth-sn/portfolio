import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')
    // const welcomeArray = ['W', 'e', 'l', 'c', 'o', 'm', 'e', '!', ' ', 'I', '\'', 'm']
  const nameArray = ['A', 'm', 'r', 'u', 't', 'h', ' ', 'N', 'i', 'r', 'a', 'n', 'j', 'a', 'n', '.']
  
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>W</span>
            <span className={`${letterClass} _12`}>e</span>
            <span className={`${letterClass} _13`}>l</span>
            <span className={`${letterClass} _14`}>c</span>
            <span className={`${letterClass} _15`}>o</span>
            <span className={`${letterClass} _16`}>m</span>
            <span className={`${letterClass} _17`}>e</span>
            <span className={`${letterClass} _18`}>!</span>
            <span className={`${letterClass} _19`}> </span>
            <span className={`${letterClass} _20`}>I</span>
            <span className={`${letterClass} _21`}>'</span>
            <span className={`${letterClass} _22`}>m</span>

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={23}
            />
          </h1>
          <br />
          <h2>
            Junior Developer <br />
            Student at Boston University <br />
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME!
          </Link>
          <a
            className="flat-button-2"
            href="https://drive.google.com/file/d/1e2hsRux_dzEekBm046YP1sNQ0c2gbA2k/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            RESUME
          </a>
        </div>
        <Logo />
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default Home