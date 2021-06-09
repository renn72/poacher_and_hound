import React from 'react';
// import { Image } from 'react-bootstrap';

const Cafe = () => {
  return (
    <div>
      <div id='hero-container'>
        <img alt='alt' id='poacher-package' src='images/poacher-package.jpg' />
        <div id='poacher-header-container'>
          <img alt='alt' id='poacher-header' src='images/poacher-header2.png' />
          <div>
            <p className='light'>
              Providing great coffee, breakfast, lunch and catering to Mount
              Waverley and surrounds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cafe;
