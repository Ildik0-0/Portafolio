import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/letra_i2.png';

import './homecss.scss'
import { useEffect, useState } from 'react';
import Animate from '../AnimateLetter/animate';

const HomePage = ()=>{
    const [letterClass, setLetterClass] = useState('text-animate');
    const letterArray = ['r', 'e', 'm', 'a', 'r',' ', 'R', 'i', 'v', 'a','s']
    const jobArray = ['F', 'u', 'l', 'l', '', 'S', 't', 'a', 'c' , 'k', '' , 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    
    return(
        <div className="container home-page">
            <div className="text-zone"> 
                <h1>
                
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>  
                
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='Developer'/>
                <Animate letterClass={letterClass}
                    strArray={letterArray}
                    idx={15}
                />
                <br/>
                <Animate letterClass={letterClass}
                    strArray={jobArray}
                    idx={30}
                />
                
                </h1>
                <h2>Full Stack developer / Software Engineer  </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>


            




        </div>
    )
}

export default HomePage;