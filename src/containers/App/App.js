import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { saveNote, fetchNotes } from '../../actions/index';

import { Header } from '../../components/Header/Header';
import { NotesContainer } from '../NotesContainer/NotesContainer';

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
      console.log(response);
      this.props.fetchNotes(response);

    } catch (error) {
      console.log(error.message);
    }

  }


  render() {

    return (
      <div className="App">
        <Header />

        <main className="Content-Container">
          <Route exact path="/" render={() => {
            return <NotesContainer />
          }} />
        </main>


      </div>
    );
  }
}


export const mapStateToProps = (state) => ({
  note: state.note,
  allNotes: state.allNotes
})

export const mapDispatchToProps = (dispatch) => ({
  storeNote: (note) => dispatch(saveNote(note)),
  fetchNotes: (allNotes) => dispatch(fetchNotes(allNotes)),
})

App.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
