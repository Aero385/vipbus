import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenu, HiX} from 'react-icons/hi';
import { motion } from 'framer-motion';


const list = ['home', 'about', 'Our fleet', 'events', 'contacts'];
const languages = [
  { lang: 'Eesti', imgSrc: images.est },
  { lang: 'English', imgSrc: images.eng },
  { lang: 'Русский', imgSrc: images.rus },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [activeLink, setActiveLink] = useState(list[0]);
  const [underlineStyle, setUnderlineStyle] = useState(activeLink.offsetWidth);

  const handleLinkClick = (item, event) => {
    event.preventDefault();
    setActiveLink(item);
  };

  const handleMouseEnter = (event) => {
    const target = event.target;
    setUnderlineStyle({
      width: target.offsetWidth,
      left: target.offsetLeft,
    });
  };

  const handleMouseLeave = () => {
    const activeLinkElement = document.querySelector(`.nav__link.active`);
    if (activeLinkElement) {
      setUnderlineStyle({
        width: activeLinkElement.offsetWidth,
        left: activeLinkElement.offsetLeft,
      });
    } else {
      setUnderlineStyle({});
    }
  }

  return (
    <nav className='app__nav app__flex'>
      <div className='nav-container'>
        <div className='nav__logo'>
          <a href='#' className='logo__link'>
            <img src={images.logo} alt='VipBuss logo' />
            <i>Premium Bus Transfers</i>
          </a>
        </div>
        <div className='nav__main'>
          <div className='nav__lang'>
            {languages.map((language, index) => (
              <a className='lang-link' href='#' key={index}>
                <img className='lang-img' src={language.imgSrc} alt={language.lang} />
              </a>
            ))}
          </div>
          <ul
            className='nav__links'
            onMouseLeave={handleMouseLeave}
          >
            {list.map((item) => (
              <li
                className='app__flex'
                key={`link-${item}`}
              >
                <a
                  className={`nav__link ${
                    activeLink === item ? 'active' : ''
                  }`}
                  href={`#${item}`}
                  onClick={(event) => handleLinkClick(item, event)}
                  onMouseEnter={handleMouseEnter}
                >
                  {item}
                </a>
              </li>
            ))}
            <div
              className='nav__underline'
              style={underlineStyle}
            />
          </ul>
        </div>
        <div className='app__navbar-menu'>
          <HiMenu onClick={() => setToggle(true)}/>

          {toggle && (
            <motion.div
              className='navbar__wrapper' 
              whileInView={{x: [300, 0]}}
              transition={{duration: 0.85, ease: 'easeInOut'}}
            >
              <div className='navbar__langs'>
                <div>
                  {languages.map((language, index) => (
                  <a className='lang-link' href='#' key={index}>
                    <img className='lang-img' src={language.imgSrc} alt={language.lang} />
                  </a>
                ))}
                </div>
                <HiX onClick={() => setToggle(false)}/>
              </div>
              <ul>
                {list.map((item) => (
                  <li className='' key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
