import React from 'react';
import { NavLink } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="Error-Message">
      <section className="Error-Content">
        <h1>sorry note was found</h1>
        <NavLink to="/">return</NavLink>
      </section>
    </div>
  )
}