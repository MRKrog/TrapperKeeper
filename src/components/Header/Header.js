import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="Header">
      <section className="Header-Content">
        <section className="Logo">
          <h1>TrapperKeeper</h1>
        </section>
        <Link to="/new-note">New Note</Link>
      </section>
    </div>
  )
}
