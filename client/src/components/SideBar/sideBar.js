import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
    
  } from '@fortawesome/free-brands-svg-icons'
import { faCode, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import './sideBar.scss';
import LogoS from '../../assets/images/Golden.png';
//import LogoSubtitle from '../../assets/images/name.PNG';

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        {/* <img className="sub-logo" src={LogoSubtitle} alt="Iremar" /> */}
      </Link>

      <nav>
        <NavLink exact='true' activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="code-link" to="/code">
          <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
        </NavLink>
        <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/iremar-rivas-953b64235/'>
                <FontAwesomeIcon  icon={faLinkedin} color='#4d4d4e' />
            </a>
        </li>
        <li>
            <a target='_blank' rel='noreferrer' href='https://github.com/Ildik0-0'>
                <FontAwesomeIcon  icon={faGithub} color='#4d4d4e' />
            </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
