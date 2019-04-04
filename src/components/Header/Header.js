import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../../media/icon-placeholder.png';

export const Header = () => {
  return (
    <div className="Header">
      <img alt="" src={icon}/>
      <h1>TrapperKeeper</h1>
      <Link to="/new-note">New Note</Link>
    </div>
  )
}
