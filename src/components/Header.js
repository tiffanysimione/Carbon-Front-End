import React from 'react';

const Header = (props) => {

  return (
    <header className="header">
      <h1 className="header__title">What's Your FootPrint?</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="/" className="header__nav-link">Home</a>
          </li>
          <li className="header__nav-item">
            <a href="/" className="header__nav-link">Contact</a>
          </li>
          <li className="header__nav-item">
            <button onClick={props.addFootPrint} className="header__nav-link">Calculate Your Carbon Footprint</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;