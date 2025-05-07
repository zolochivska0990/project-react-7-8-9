import React, { useState } from 'react';
import './BookingForm.scss';

const BookingForm = ({ movie, selectedSeats, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Будь ласка, введіть ваше ім'я";
    if (!formData.phone.trim()) newErrors.phone = "Будь ласка, введіть ваш телефон";
    if (!formData.email.trim()) {
      newErrors.email = "Будь ласка, введіть ваш email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Будь ласка, введіть коректний email";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(formData);
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h3>Дані для бронювання</h3>
      
      <div className="form-group">
        <label>Ім'я</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={errors.name ? 'error' : ''}
          placeholder="Введіть ваше ім'я"
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email ? 'error' : ''}
          placeholder="Введіть ваш email"
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      
      <div className="form-group">
        <label>Телефон</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={errors.phone ? 'error' : ''}
          placeholder="Введіть ваш телефон"
        />
        {errors.phone && <span className="error-message">{errors.phone}</span>}
      </div>
      
      <div className="selected-seats">
        <h4>Обрані місця:</h4>
        <ul>
          {selectedSeats.map((seat, index) => (
            <li key={index}>Ряд {seat.row}, Місце {seat.seat}</li>
          ))}
        </ul>
      </div>
      
      <div className="form-actions">
        <button type="button" className="cancel-btn" onClick={onCancel}>
          Скасувати
        </button>
        <button type="submit" className="submit-btn">
          Підтвердити бронювання
        </button>
      </div>
    </form>
  );
};

export default BookingForm;