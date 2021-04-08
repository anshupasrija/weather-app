import React from 'react';

function Header(props) {
  return (
    <header className="header">
      <nav className="header__links header__links--left">
        <a href="/">Home</a> |<a href="/about">About</a> |
        <a href="/contact">Contact</a>
      </nav>
      <div className="header__logo">{props.logotext}</div>
      <div className="header__links header__links--right">
        <input className="search" placeholder="Search..." />
        <p className="lastPressed"></p>
      </div>
    </header>
  );
}

export default Header;
