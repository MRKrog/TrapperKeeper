import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types'

export class NotesContainer extends Component {

  generateNotes = () => {
    return this.props.allNotes.map(note =>
      <Link to={`/notes/${note.id}`} key={note.id} className='note-click'>
        <div>
          <h3>{note.title}</h3>
        </div>
      </Link>
    )
  }

  render() {
    const { allNotes } = this.props;
    const loader = this.props.loading ? <div></div> : null
    let splashMessage = null;
    if (!loader && !allNotes.length) splashMessage = <h1 className="splash-message">Try Creating a New Note!</h1>;
    return (
      <div className="NotesContainer">
        { loader }
        { splashMessage }
        { this.props.allNotes && this.generateNotes() }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allNotes: state.allNotes,
  loading: state.loading
})

NotesContainer.propTypes = {
  allNotes: PropTypes.array
}

export default connect(mapStateToProps)(NotesContainer);