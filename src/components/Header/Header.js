import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../media/icon-placeholder.png';

export const Header = () => {
  return (
    <div className="Header">
      <section className="Logo">
        <img alt="TrapperKeeper" src={icon}/>
        <h1>TrapperKeeper</h1>
      </section>
      <Link to="/new-note">New Note</Link>
    </div>
  )
}
