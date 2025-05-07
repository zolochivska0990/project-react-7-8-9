// src/pages/Booking/Booking.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CinemaHall from '../../components/CinemaHall/CinemaHall';
import BookingForm from '../../components/BookingForm/BookingForm';
import { movies } from '../../data/movies';
import './Booking.scss';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  if (!movie) {
    return <div>Фільм не знайдено</div>;
  }

  const handleSeatsSelected = (seats) => {
    setSelectedSeats(seats);
  };

  const handleBookSeats = () => {
    if (selectedSeats.length === 0) {
      alert('Будь ласка, оберіть хоча б одне місце');
      return;
    }
    setShowForm(true);
  };

  const handleSubmitBooking = (formData) => {
    // Тут буде логіка збереження бронювання
    console.log('Booking submitted:', {
      movie,
      seats: selectedSeats,
      customer: formData
    });
    alert('Бронювання успішно завершено!');
    navigate('/');
  };

  return (
    <div className="booking-page">
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <div className="meta">
          <span>{movie.genre}</span>
          <span>{movie.duration} хв</span>
          <span>{movie.rating}</span>
        </div>
      </div>
      
      {!showForm ? (
        <>
          <CinemaHall 
            movieId={movie.id} 
            onSeatsSelected={handleSeatsSelected} 
          />
          <div className="booking-actions">
            <button 
              onClick={() => navigate(-1)}
              className="back-btn"
            >
              Назад
            </button>
            <button 
              onClick={handleBookSeats}
              className="book-btn"
              disabled={selectedSeats.length === 0}
            >
              Забронювати ({selectedSeats.length})
            </button>
          </div>
        </>
      ) : (
        <BookingForm 
          movie={movie}
          selectedSeats={selectedSeats}
          onSubmit={handleSubmitBooking}
          onCancel={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default Booking;