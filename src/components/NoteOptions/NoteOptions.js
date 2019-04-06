import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'


const NoteOptions = ({ handleType, deleteNote }) => {

  return (
    <div className="Note-Options">
      <button className="Note-Save" onClick={handleType} type="submit">
        <i className="fas fa-save"></i>
      </button>
      <button className="Note-Delete" onClick={deleteNote}>
        <i className="fas fa-trash-alt"></i>
      </button>
      <NavLink to="/" className="Note-Close">
        <button>Close</button>
      </NavLink>
    </div>
  )
}


export default NoteOptions;
