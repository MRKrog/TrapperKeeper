import React, { Component } from 'react';
import NoteDisplay from '../../components/NoteDisplay/NoteDisplay';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Masonry from 'react-masonry-css'

export class NotesContainer extends Component {

  generateNotes = () => {
    return this.props.allNotes.map(note =>
      <Link to={`/notes/${note.id}`} key={note.id} className='note-click' style={{ backgroundColor: note.background }}>
        <NoteDisplay {...note} />
      </Link>
    )
  }

  render() {
    const { allNotes } = this.props;
    const loader = this.props.loading ? <div></div> : null
    let splashMessage = null;
    if (!loader && !allNotes.length) splashMessage = <h1 className="splash-message">Try Creating a New Note!</h1>;
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };
    return (
      <div className="NotesContainer">
        { loader }
        { splashMessage }
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          { this.props.allNotes && this.generateNotes() }
        </Masonry>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allNotes: state.allNotes,
  loading: state.loading
})

NotesContainer.propTypes = {
  allNotes: PropTypes.array,
  loading: PropTypes.bool,
}

export default connect(mapStateToProps)(NotesContainer);
