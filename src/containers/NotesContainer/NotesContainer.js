import React from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';

export const NotesContainer = (props) => {

  const generateNotes = () => {
    return props.allNotes.map(note => 
      <Link to={`/notes/${note.id}`} key={note.id} className='note-click'>
        <div>
          <h3>{note.title}</h3>
        </div>
      </Link>
    )
  }

  return (
    <div className="NotesContainer">
      { props.allNotes && generateNotes() }
    </div>
  )

}

export const mapStateToProps = (state) => ({
  allNotes: state.allNotes,
})

export default connect(mapStateToProps)(NotesContainer);