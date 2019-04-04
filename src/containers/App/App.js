import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { saveNote, fetchNotes, hasError } from '../../actions/index';

import { Header } from '../../components/Header/Header';

import NotesContainer from '../NotesContainer/NotesContainer';
import { Note } from '../Note/Note';
import PropTypes from 'prop-types'

import { fetchData } from '../../utility/fetchData';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      noteCards: [],
    }
  }


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
            return <Note noteId={id} />
          }} />
          <Route path="/new-note" component={Note} />
        </main>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  note: state.note,
  allNotes: state.allNotes,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  storeNote: (note) => dispatch(saveNote(note)),
  fetchNotes: (allNotes) => dispatch(fetchNotes(allNotes)),
  hasError: (message) => dispatch(hasError(message))
})

App.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)