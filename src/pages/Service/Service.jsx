import React, {useEffect, useState} from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { busVariants, staggerContainer } from '../../utils/motion';
import './Service.scss';
import { TypingText } from '../../components/index.js';



const Service = () => {
  return (
    <div className='app__service'>
      <TypingText title='Our fleet!'/>
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
          <h1>Maxi Bus</h1>
          <div> up to 54 passengers</div>
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
          <h1>Midi Bus</h1>
          <div> up to 45 passengers</div>
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
          <h1>Mini bus</h1>
          <div> from 8 to 25 passengers</div>
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
          <h1>Mini Van</h1>
          <div> up to 8 passengers</div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Service;