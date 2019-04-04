import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { saveNote, fetchNotes, hasError } from '../../actions/index';

import { Header } from '../../components/Header/Header';

import NotesContainer from '../NotesContainer/NotesContainer';
import Note from '../Note/Note';
import PropTypes from 'prop-types'

import { fetchData } from '../../utility/fetchData';

export class App extends Component {

  componentDidMount() {
    this.handleFetchStart()
  }

  handleFetchStart = async () => {
    const url = 'http://localhost:3001/api/v1/notes';
    try {
      const response = await fetchData(url)
      this.props.fetchNotes(response);
    } catch (error) {
      this.props.hasError(error.message)
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <main className="Content-Container">
          <Route path="/" render={() => {
            return <NotesContainer />
          }} />
          <Route path="/notes/:id" render={({match}) => {
            const { id } = match.params;
            const currentNote = this.props.allNotes.find(note => note.id == id)
            return <Note noteId={id} {...currentNote}/>
          }} />
          <Route path="/new-note" component={Note} />
        </main>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  allNotes: state.allNotes,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  storeNote: (note) => dispatch(saveNote(note)),
  fetchNotes: (allNotes) => dispatch(fetchNotes(allNotes)),
  hasError: (message) => dispatch(hasError(message))
})

App.propTypes = {
  allNotes: PropTypes.array.isRequired,
  error: PropTypes.string.isRequired,
  storeNote: PropTypes.func.isRequired,
  fetchNotes: PropTypes.func.isRequired,
  hasError: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
