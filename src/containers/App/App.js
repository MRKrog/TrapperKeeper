import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { saveNote } from '../../actions/index';

import { Header } from '../../components/Header/Header';
import { NotesContainer } from '../NotesContainer/NotesContainer';


import { fetchData } from '../../utility/fetchData';


export class App extends Component {
  constructor() {
    super()
    this.state = {
      noteCards: [],
    }
  }


  componentDidMount() {
    // this.fetchCards()
  }

  handleFetchStart = (url) => {
    fetchData()
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
  notes: state.notes
})

export const mapDispatchToProps = (dispatch) => ({
  storeNote: (note) => dispatch(saveNote(note))
})


export default connect(mapStateToProps, mapDispatchToProps)(App)
