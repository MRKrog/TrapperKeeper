import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

const NoteOptions = ({ handleType, deleteNote, handleClose, type }) => {

  return (
    <div className="Note-Options">
      <button className="Note-Save" onClick={handleType} type="submit">
        <i className="fas fa-save"></i>
      </button>
      {
        type === "existing-note" &&
          <button className="Note-Delete" onClick={deleteNote}>
            <i className="fas fa-trash-alt"></i>
          </button>
      }
      <NavLink onClick={handleClose} to="/" className="Note-Close">
        <button>Close</button>
      </NavLink>
    </div>
  )
}

NoteOptions.propTypes = {
  handleType: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired
}

export default NoteOptions;