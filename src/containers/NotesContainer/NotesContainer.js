import React, { Component } from 'react';
import { Note } from '../Note/Note';
// import { fetchNotes } from '../../actions/index';
import { connect } from 'react-redux';

export class NotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  generateNotes() {
    return this.props.allNotes.map(note => 
      <Note key={note.id} {...note}/>)
  }

  render() {
    return (
      <div className="NotesContainer">
        <h2>NotesContainer</h2>
        { this.props.allNotes && this.generateNotes() }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allNotes: state.allNotes,
})

export default connect(mapStateToProps, null)(NotesContainer);