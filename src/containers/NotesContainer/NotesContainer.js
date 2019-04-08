import React, { Component } from 'react';
import NoteDisplay from '../../components/NoteDisplay/NoteDisplay';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

export class NotesContainer extends Component {

  generateNotes = () => {
    return this.props.allNotes.map(note =>
      <Link to={`/notes/${note.id}`} key={note.id} className='note-click'>
        <NoteDisplay {...note} />
      </Link>
    )
  }

  render() {
    let splashMessage = this.props.allNotes.length ? null : <h1 className="splash-message">Try Creating a New Note!</h1>
    return (
      <div className="NotesContainer">
        { splashMessage }
        { this.props.allNotes && this.generateNotes() }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allNotes: state.allNotes,
})

NotesContainer.propTypes = {
  allNotes: PropTypes.array
}

export default connect(mapStateToProps)(NotesContainer);
