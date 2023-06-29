import './about.scss';
import { useEffect } from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faHtml5, faJs, faNode,  faReact } from '@fortawesome/free-brands-svg-icons';


import { faDatabase } from '@fortawesome/free-solid-svg-icons';
const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideClick = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    };
  
    return (
      <div className="container about-page">
        <div className="text-zone">
          <div className={`slide ${currentSlide === 0 ? 'active' : ''}`} onClick={handleSlideClick}>
            <h1>ABOUT ME</h1>
            <p>
              A bilingual Software Engineer, passionate about all technology topics, especially software development. An
              effective problem solver and a real team player who is oriented to create win-to-win solutions. Able to
              oversee projects and identify issues and execute IT solutions. Excellent communication skills, able to work
              with IT teams from different cultures and backgrounds.
            </p>
          </div>
          <div className={`slide ${currentSlide === 1 ? 'active' : ''}`} onClick={handleSlideClick}>
            <h1>Experienced</h1>
            <p>
              <ul>
                <li>React.js: Building dynamic and interactive user interfaces.</li>
                <li>JavaScript: Strong command of the programming language for web development.</li>
                <li>HTML5 and CSS: Proficient in creating visually appealing web pages.</li>
                <li>PostgreSQL: Extensive experience in working with the relational database management system.</li>
                <li>Node.js: Developing server-side applications and RESTful APIs.</li>
              </ul>
            </p>
          </div>
          <div className={`slide ${currentSlide === 2 ? 'active' : ''}`} onClick={handleSlideClick}>
            <h1>Skills</h1>
            <p>
              <ul>
                <li>Problem-solving: Effective at identifying and resolving issues.</li>
                <li>Team player: Collaborative and able to work with diverse teams.</li>
                <li>Project management: Skilled in overseeing projects and executing IT solutions.</li>
                <li>
                  Communication: Excellent communication skills, working well with teams from different backgrounds.
                </li>
              </ul>
            </p>
          </div>
        </div>
                    
                   
                
                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                        <FontAwesomeIcon icon={faReact} color="#DD0031" />
                        </div>
                        <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                        <FontAwesomeIcon icon={faNode} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                        <FontAwesomeIcon icon={faDatabase} color="#EFD81D" />
                        </div>
                        <div className="face6">
                        <FontAwesomeIcon icon={faJs} color="#EC4D28" />
                        </div>
                    </div>
                    </div>
                
            </div>
               

            


        
    )
}
export default About