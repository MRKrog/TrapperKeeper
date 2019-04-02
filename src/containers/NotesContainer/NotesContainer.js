import React, { Component } from 'react';
import { Note } from '../Note/Note'

export class NotesContainer extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
      <div className="NotesContainer">
        <h2>NotesContainer</h2>
        <Note />
      </div>
    )
  }
}
