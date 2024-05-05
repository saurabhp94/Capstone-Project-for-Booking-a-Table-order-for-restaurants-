import Nav from './components/Nav';
import Header from './components/Header';
import './App.css';
import BookingForm from './components/BookingForm';
import Booking from './components/Booking';
import React, { useState } from 'react';

const App = () => {
  const [currentComponent, setCurrentComponent] = useState('Header');
  const [bookingData, setBookingData] = useState(null);

  const handleReservationClick = () => {
    setCurrentComponent('BookingForm');
  };

  const handleBooking = (data) => {
    setBookingData(data);
    setCurrentComponent('Booking');
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case 'Header':
        return <Header setCurrentComponent={setCurrentComponent} handleReservationClick={handleReservationClick} />;
      case 'BookingForm':
        return <BookingForm handleBooking={handleBooking} />;
      case 'Booking':
        return <Booking {...bookingData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Nav setCurrentComponent={setCurrentComponent} handleReservationClick={handleReservationClick} />
      {renderComponent()}
    </div>
  );
};

export default App;
