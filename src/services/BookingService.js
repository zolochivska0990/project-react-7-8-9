const BOOKINGS_KEY = 'cinema_bookings';

export const BookingService = {
  getAllBookings: () => {
    const bookings = localStorage.getItem(BOOKINGS_KEY);
    return bookings ? JSON.parse(bookings) : [];
  },

  getBookingsForMovie: (movieId) => {
    const allBookings = BookingService.getAllBookings();
    return allBookings.filter(booking => booking.movieId === movieId);
  },

  saveBooking: (bookingData) => {
    const allBookings = BookingService.getAllBookings();
    const newBooking = {
      ...bookingData,
      id: Date.now(),
      bookingDate: new Date().toISOString()
    };
    const updatedBookings = [...allBookings, newBooking];
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(updatedBookings));
    return newBooking;
  },

  getBookedSeatsForMovie: (movieId) => {
    const bookings = BookingService.getBookingsForMovie(movieId);
    return bookings.flatMap(booking => booking.seats);
  }
};