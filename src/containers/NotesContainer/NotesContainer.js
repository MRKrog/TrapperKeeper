import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchData } from '../../utility/fetchData';
import { fetchNotes, hasError } from '../../actions'

export class NotesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  componentDidMount() {
    this.handleFetchStart()
  }

  handleFetchStart = async () => {
    const url = 'http://localhost:3001/api/v1/notes';
    try {
      const response = await fetchData(url)
      this.props.storeAllNotes(response);
    } catch (error) {
      this.props.showError(error.message)
    }
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
        { this.props.allNotes && this.generateNotes() }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allNotes: state.allNotes,
})

export const mapDispatchToProps = (dispatch) => ({
  storeAllNotes: (allNotes) => dispatch(fetchNotes(allNotes)),
  showError: (message) => dispatch(hasError(message))
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);