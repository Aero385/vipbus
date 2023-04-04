import React from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './Home.scss';


const Home = () => {
  return (
    <div id='home' className='app__flex app__home'>
      <div className='home__head'>
        <div className='head__black'></div>
        <img src={images.headBG} alt='photo' />
      </div>
      <motion.div
        whileInView={{x: [-100, 0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className='app__header-info p-text'
      >
        <h1>Welcome to <span>VipBuss</span></h1>
        <div/>
        <p> The premier bus transfer service in Estonia! Whether you're planning a wedding, a company event, a private tour, or any other group outing, we have the perfect transportation solution for you. Our fleet of buses can accommodate groups of 1 to 55 people, and we have a variety of vehicles to suit your needs, from luxurious coaches to comfortable minibuses.</p>
        <button>Book Now</button>
      </motion.div>
    </div>
  );
}

export default Home;