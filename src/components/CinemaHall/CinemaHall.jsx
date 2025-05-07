import React, { useState, useEffect } from 'react';
import './CinemaHall.scss';

const CinemaHall = ({ movieId, onSeatsSelected }) => {
  const rows = 8;
  const seatsPerRow = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  useEffect(() => {
    // Mock booked seats data
    const mockBookedSeats = [
      { row: 1, seat: 3 },
      { row: 2, seat: 5 },
      { row: 4, seat: 7 }
    ];
    setBookedSeats(mockBookedSeats);
  }, [movieId]);

  const toggleSeatSelection = (row, seat) => {
    setSelectedSeats(prev => {
      const isSelected = prev.some(s => s.row === row && s.seat === seat);
      if (isSelected) {
        return prev.filter(s => !(s.row === row && s.seat === seat));
      } else {
        return [...prev, { row, seat }];
      }
    });
  };

  useEffect(() => {
    onSeatsSelected(selectedSeats);
  }, [selectedSeats, onSeatsSelected]);

  return (
    <div className="cinema-hall">
      <div className="screen">ЕКРАН</div>
      
      <div className="seats-container">
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            <div className="row-number">{rowIndex + 1}</div>
            {Array.from({ length: seatsPerRow }).map((_, seatIndex) => {
              const seatNum = seatIndex + 1;
              const isBooked = bookedSeats.some(s => s.row === rowIndex + 1 && s.seat === seatNum);
              const isSelected = selectedSeats.some(s => s.row === rowIndex + 1 && s.seat === seatNum);
              
              return (
                <button
                  key={seatIndex}
                  className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
                  onClick={() => !isBooked && toggleSeatSelection(rowIndex + 1, seatNum)}
                  disabled={isBooked}
                >
                  {seatNum}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      
      <div className="legend">
        <div className="legend-item">
          <div className="seat available"></div>
          <span>Вільні</span>
        </div>
        <div className="legend-item">
          <div className="seat selected"></div>
          <span>Обрані</span>
        </div>
        <div className="legend-item">
          <div className="seat booked"></div>
          <span>Заброньовані</span>
        </div>
      </div>
    </div>
  );
};

export default CinemaHall;