import React from 'react';
import bannerImg from "../images/restaurantfood.jpg";

const Header = ({ setCurrentComponent, handleReservationClick }) => {
  return (
    <section className='header-section'>
      <header className='header'>
        <div className='header-text'>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean
            restaurant, focused on traditional
            recipes served with a modern
            twist.
          </p>
          <a href='/#reservations'>
          <button
            className='reserve-button'
            aria-label='onClick'
            onClick={handleReservationClick}
          >
            Reserve a Table
          </button>
          </a>
        </div>
        <div className='banner-img'>
          <img src={bannerImg} alt='' />
        </div>
      </header>
    </section>
  );
};

export default Header;