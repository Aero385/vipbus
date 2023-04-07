import React, {useEffect, useState} from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { busVariants, staggerContainer } from '../../utils/motion';
import './Service.scss';
import { TypingText } from '../../components/index.js';



const Service = () => {
  return (
    <div className='app__service'>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false}}
        className='service__wrapper'
      >
        <motion.div
          className='wrapper__text'
          variants={busVariants('left')}
        >
          <div className='text__header'>
            <h1>1</h1>
            <h2>Maxi Bus</h2>
          </div>
          <h3>45 to 54 passengers</h3>
          <ul>
            
            <li>Reclining seats & panaoramic windows</li>
            <li>Electrical outlets, WIFI</li>
            <li>Luggage space and a restroom</li>
          </ul>
          

        </motion.div>
        <motion.div
          className='wrapper__img'
          variants={busVariants('right')}
        >
          <img src={images.maxi1}/>
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false}}
        className='service__wrapper'
      >
        <motion.div
          className='wrapper__img'
          variants={busVariants('left')}
        >
          <img src={images.midi1}/>
        </motion.div>
        <motion.div
          className='wrapper__text'
          variants={busVariants('right')}
        >
           <div className='text__header'>
            <h1>2</h1>
            <h2>Midi Bus</h2>
          </div>
          <h3>20 to 45 passengers</h3>
          <ul>
            
            <li>Reclining seats & panaoramic windows</li>
            <li>Electrical outlets, WIFI</li>
            <li>Luggage space and a restroom</li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false}}
        className='service__wrapper'
      >
        <motion.div
          className='wrapper__text'
          variants={busVariants('left')}
        >
          <div className='text__header'>
            <h1>3</h1>
            <h2>Mini Bus</h2>
          </div>
          <h3>14 to 28 passengers</h3>
          <ul>
            
            <li>DVD AM/FR stereo, Bluetooth, AUX and two monitors</li>
            <li>comfort luxury option</li>
            <li>leather seats and impress interior</li>
            <li>conditioner and climate control</li>
          </ul>
        </motion.div>
        <motion.div
          className='wrapper__img'
          variants={busVariants('right')}
        >
          <img src={images.mini1}/>
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{once: false}}
        className='service__wrapper'
      >
        <motion.div
          className='wrapper__img'
          variants={busVariants('left')}
        >
          <img src={images.van1}/>
        </motion.div>
        <motion.div
          className='wrapper__text'
          variants={busVariants('left')}
        >
          <div className='text__header'>
            <h1>4</h1>
            <h2>Mini Van</h2>
          </div>
          <h3>1 to 9 passengers</h3>
          <ul>
            <li>DVD AM/FR stereo, Bluetooth, AUX and two monitors</li>
            <li>comfort luxury option</li>
            <li>leather seats and impress interior</li>
            <li>conditioner and climate control</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Service;