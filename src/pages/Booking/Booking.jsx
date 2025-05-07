// Оновлений код для src/pages/Booking/Booking.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CinemaHall from '../../components/CinemaHall/CinemaHall';
import BookingForm from '../../components/BookingForm/BookingForm';
import { movies } from '../../data/movies';
import { BookingService } from '../../services/BookingService';
import './Booking.scss';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m.id === parseInt(id));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    if (movie) {
      const booked = BookingService.getBookedSeatsForMovie(movie.id);
      setBookedSeats(booked);
    }
  }, [movie]);

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
    const bookingData = {
      movieId: movie.id,
      movieTitle: movie.title,
      seats: selectedSeats,
      customer: formData
    };
    
    BookingService.saveBooking(bookingData);
    alert('Бронювання успішно завершено!');
    navigate('/');
  };

  return (
    <div className="booking-page">
      {/* ... (решта коду залишається без змін) ... */}
    </div>
  );
};

export default Booking;