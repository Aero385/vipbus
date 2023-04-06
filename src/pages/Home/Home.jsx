import React from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import './Home.scss';
import { MyButton } from '../../components/index';
import { ImCalendar } from 'react-icons/Im';
import { GoLocation } from 'react-icons/Go';
import { FiPhoneCall } from 'react-icons/Fi';
import { AiFillStar } from 'react-icons/ai';


const Home = () => {
  return (
    <div id='home' className='app__flex app__home'>
      <div className='home__head'>
        <div className='head__black'></div>
        <img src={images.headBG} alt='photo'/>
        <div className='head__image-text'>
          <h1>Providing premium classs<br/>transfer services</h1>
          <div className='head__experience'>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <p>20 years of experience</p>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
          </div>
          <MyButton className='head__button' name='LEARN MORE'/>
        </div>
        <div className='home__info'>
          <div className='wrapper'>
            <div className='info__hours app__flex'>
              <ImCalendar className='info-icons'/>
              <div>
                <h2>working hour</h2>
                <p>Monday - Sunday 00.00 - 00.00</p>
              </div>
            </div>
            <div className='info__location app__flex'>
              <GoLocation className='info-icons'/>
              <div>
                <h2>our location</h2>
                <p>Kadaka, Tallinn, Estonia</p>
              </div>
            </div>
            <div className='info__phone app__flex'>
              <FiPhoneCall className='info-icons'/>
              <div>
                <h2>call us</h2>
                <p>+372 555 555 55</p>
              </div>
            </div>
            <div className='info__order'>
              <MyButton name='Book your Tour'></MyButton>
            </div>
          </div>
        </div>
      </div>
      <div className='home__offer'>
        <div className='offer__wrapper'>
          <div className='offer__info p-text'>
            <div className='info__headtext'>
              <span>About Us</span>
              <h1>We offer quick and comfort solution</h1>
            </div>
            <p>Welcome to <span>VipBuss</span>, the premier bus transfer service in Estonia! Whether you're planning a wedding, a company event, a private tour, or any other group outing, we have the perfect transportation solution for you. Our fleet of buses can accommodate groups of 1 to 55 people, and we have a variety of vehicles to suit your needs, from luxurious coaches to comfortable minibuses.</p>
          </div>
          <div className='offer__img'>
            <img className='offer__img-img' src={images.bus_info} alt='photo bus' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;


//<h1>Welcome to <span>VipBuss</span></h1>
//<div/>
//<p> The premier bus transfer service in Estonia! Whether you're planning a wedding, a company event, a private tour, or any other group outing, we have the perfect transportation solution for you. Our fleet of buses can accommodate groups of 1 to 55 people, and we have a variety of vehicles to suit your needs, from luxurious coaches to comfortable minibuses.</p>