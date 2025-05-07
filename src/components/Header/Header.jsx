import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">КІНОТЕАТР</Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Афіша</Link>
          <Link to="/" className="nav-link">Розклад</Link>
          <Link to="/" className="nav-link">Інформація</Link>
          <Link to="/" className="nav-link">Кабінет</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;