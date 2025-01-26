import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn w-full'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1
      className='sm:text-xl sm:leading-snug text-center
  neo-brutalism-blue py-4 px-8 text-white mx-5 '
    >
      Hi, I am <span className='font-semibold'>Carlos</span>👋
      <br />A Front End Engineer from Mexico.
    </h1>
  ),
  2: (
    <InfoBox
      text='With over 10 years of experience under my belt.'
      link={'/about'}
      btnText={'Learn more'}
    />
  ),
  3: (
    <InfoBox
      text='I love creating useful and beautiful web applications, as well as experimenting with technology.'
      link={'/projects'}
      btnText={'Visit my portfolio'}
    />
  ),
  4: (
    <InfoBox
      text='Always looking for new and interesting projects.'
      link={'/contact'}
      btnText={'Contact me'}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
