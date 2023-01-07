import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef()
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
      let timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)

      return () => {
        clearTimeout(timeoutId)
      }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
          .sendForm(
            'service_js12ziw',
            'template_xk3zeck',
            refForm.current,
            'Pd8BJ8vLDS6oCwsyN'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
    }
    return (
      <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'C',
                  'o',
                  'n',
                  't',
                  'a',
                  'c',
                  't',
                  ' ',
                  'M',
                  'e',
                  '!',
                ]}
                idx={15}
              />
            </h1>
            <p>
              Please contact me if you have any questions or comments.
              Furthermore, if you are interested in working with me, leave a
              message and I will get back to you as soon as I can.
            </p>
            <div className="contact-form">
              <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
        <Loader type="square-spin" />
      </>
    )
}

export default Contact