import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export class NotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  generateNotes() {
    return this.props.allNotes.map(note => 
      <Link to={`/notes/${note.id}`} key={note.id} className='note-click'>
        <div>
          <h3>{note.title}</h3>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <div className="NotesContainer">
        <h2>NotesContainer</h2>
        <Link to="/new-note">New Note</Link>
        { this.props.allNotes && this.generateNotes() }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allNotes: state.allNotes,
})

export default connect(mapStateToProps, null)(NotesContainer);