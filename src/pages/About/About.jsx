import React, {useEffect, useState} from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './About.scss';

const About = () => {

  const allBusses = [images.vanIcon, images.mini, images.midi, images.maxi];
  const maxicoachBusses = [images.maxi, images.maxi, images.maxi];
  const mediumCoachBusses = [images.midi, images.midi, images.midi];
  const miniBusses = [images.mini, images.mini, images.mini];
  const van = [images.vanIcon, images.vanIcon, images.vanIcon];

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ x: 0, opacity: 1});
  const [busses, setBusses] = useState([]);
  const [filterBus, setFilterBus] = useState([]);

  useEffect(() => {
    let query;
    if (activeFilter === 'All') {
      query = allBusses;
    } else if (activeFilter === 'Maxi') {
      query = maxicoachBusses;
    } else if (activeFilter === 'Midi') {
      query = mediumCoachBusses;
    } else if (activeFilter === 'Mini') {
      query = miniBusses;
    } else if (activeFilter === 'Van') {
      query = van;
    }
    console.log(query);
    setBusses(query);
    setFilterBus(query);
  }, [activeFilter]);

  const handleBusCategory = (item) => {
    
    setAnimateCard([{ opacity: 0}])

    setTimeout(() => {
      setActiveFilter(item);
      setAnimateCard([{ opacity: 1}])
      setFilterBus(activeFilter.filter((bus) => bus.includes(bus)))
    }, 500)
  }
  return (
    <div className='app__about'>
      <h1 className='about__head-text'>Vehicle categories</h1>
      <div className='about__filter'>
        {['All', 'Maxi', 'Midi', 'Mini', 'Van'].map((item, index) => (
          <React.Fragment key={index}>
            <div
              onClick={() => handleBusCategory(item)}
              className={`about__buss-filter-item app__flex ${activeFilter === item ? 'selected' : ''}`}
            >
              {item}
            </div>
            {index !== 4 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>

      <motion.div 
        animate={animateCard}
        transition={{duration: 1, delayChildren: 0.5}}
        className='about__buss-card'
      >
        {filterBus.map((bus, index) => (
          <div className='buss__item app__flex' key={index}>
            <div className='buss__item-img app__flex'>
              <img src={bus}></img>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default About;
