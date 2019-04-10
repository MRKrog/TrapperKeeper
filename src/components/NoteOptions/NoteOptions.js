import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types'

const NoteOptions = ({ handleType, deleteNote, handleClose, type, displayError, changeColor, title }) => {

  return (
    <div className="Note-Options">
      <div className="Color-Picker">
        <button className="Color Yellow" name="#FFE680" onClick={(e) => changeColor(e)}></button>
        <button className="Color Green" name="#D6FFB7" onClick={(e) => changeColor(e)}></button>
        <button className="Color Purple" name="#EEF5DB" onClick={(e) => changeColor(e)}></button>
      </div>
      <div className="Note-SubOptions">
      {
        title.length < 1 || !displayError &&
        <button className="Note-Save" onClick={handleType} type="submit">
          <i className="fas fa-save"></i>
        </button>
      }
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
    </div>
  )
}

NoteOptions.propTypes = {
  handleType: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  changeColor: PropTypes.func.isRequired
}

export default NoteOptions;
