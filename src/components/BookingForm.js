import React, { useState } from 'react';

const BookingForm = ({ handleBooking }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [seatingType, setSeatingType] = useState('');
  const [diners, setDiners] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = { date, time, seatingType, diners };
    handleBooking(bookingData);
  };

  return (
    <form onSubmit={handleSubmit} className="bookingForm">
      <h1 className="formTitle">Reservations</h1>
      <fieldset className="seatingFieldset">
        <label className="seatingLabel">
          <input
            type='radio'
            value='indoor'
            name='seating'
            checked={seatingType === 'indoor'}
            onChange={(e) => setSeatingType(e.target.value)}
            className="seatingInput"
          />
          Indoor Seating
        </label>
        <label className="seatingLabel">
          <input
            type='radio'
            value='outdoor'
            name='seating'
            checked={seatingType === 'outdoor'}
            onChange={(e) => setSeatingType(e.target.value)}
            className="seatingInput"
          />
          Outdoor Seating
        </label>
      </fieldset>
      <fieldset className="dateAndDinersFieldset">
        <div className="dateDiv">
          <label className="dateLabel">Date</label>
          <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="dateInput"
          />
        </div>
        <div className="dinersDiv">
          <label className="dinersLabel">Number of Diners</label>
          <select
            value={diners}
            onChange={(e) => setDiners(e.target.value)}
            className="dinersSelect"
          >
            <option value="">Select Number of Diners</option>
            {Array.from({ length: 10 }, (_, i) => i + 1).map((option) => (
              <option key={option} value={option}>{option} diner{option > 1 ? 's' : ''}</option>
            ))}
          </select>
        </div>
      </fieldset>
      <button type="submit" className="submitButton">Reserve a Table</button>
    </form>
  );
};

export default BookingForm;