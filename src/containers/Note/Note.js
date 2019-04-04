import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { saveNote, fetchNotes, hasError } from '../../actions/index';

import { fetchOptionsCreator } from '../../utility/fetchOptionsCreator'
import { fetchData } from '../../utility/fetchData';

import { List } from '../List/List';


export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      list: [],
      toHomePage: false,
    }
  }

  componentDidMount() {
    if(this.props.noteId) {
      console.log('GET NOTE');
      this.findNote(this.props.noteId)
    } else {
      console.log('NEW NOTE');
      this.setState({
        // id: shortid.generate()
      })
    }
  }

  findNote = async (noteId) => {
    const url = `http://localhost:3001/api/v1/notes/${noteId}`
    try {
      const response = await fetchData(url)
      console.log('response', response);
      this.setState({
        id: response.id,
        title: response.title,
        list: [...response.list]
      })
      console.log('state', this.state);
    } catch (error) {
      console.log(error.message);
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:3001/api/v1/notes';
    try {
      const options = await fetchOptionsCreator('POST', this.state)
      await fetchData(url, options)
    } catch (error) {
      this.props.hasError(error.message)
    }
  }

  handlePut = async (e) => {
    e.preventDefault();
    const { title, list } = this.state;
    const url = `http://localhost:3001/api/v1/notes/${this.props.noteId}`;
    try {
      const options = await fetchOptionsCreator('PUT', { title, list })
      await fetchData(url, options)
      this.setState({ toHomePage: true })
    } catch (error) {
      this.props.hasError(error.message)
    }
  }

  handleTitleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleItemChange = (e, index) => {
    e.preventDefault()
    this.state.list[index].text = e.target.value;
    this.setState({ list: this.state.list })
  }

  handleItemDelete = (e, index) => {
    e.preventDefault()
    this.state.list.splice(index, 1)
    this.setState({ list: this.state.list })
  }

  addItem = (e) => {
    e.preventDefault()
    this.setState({ list: [...this.state.list, {
        id: shortid.generate(),
        isComplete: false,
        text: ""
       }
      ]
     })
  }

  render() {
    if(this.state.toHomePage === true){
      return <Redirect to='/' />
    }

    return (
      <div className="Note">
        <section className="Note-Content">

          <NavLink to="/" className="Note-Close">
            <button><i className="fas fa-times"></i></button>
          </NavLink>

          <div className="Note-Form-Container">
            <form className="Note-Form">
              <input type="text"
                     onChange={this.handleTitleChange}
                     placeholder="Title"
                     value={this.state.title}
                     name="title"
                     className="Note-Title"
                     />
              <ul className="ListItems">
                {
                  this.state.list.map((item, index) => {
                    return (
                      <li key={index}>
                        <label className="container">
                          <input type="checkbox" />
                          <span className="checkmark"></span>
                        </label>
                        <input type="text"
                                placeholder="List Item"
                                value={item.text}
                                name="ListItem"
                                onChange={(e) => this.handleItemChange(e, index)}
                          />
                          <button onClick={(e) => this.handleItemDelete(e, index)}>
                            <i className="fas fa-times"></i>
                          </button>
                      </li>
                    )
                  })
                }
              </ul>
              <button onClick={(e) => this.addItem(e)}>Add List</button>
              <button onClick={this.handlePut}
                      className="Note-Save"
                      type="submit">
                      Save Note
              </button>
              <h2>{this.props.error && this.props.error}</h2>
            </form>
          </div>
        </section>
      </div>
    )
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

Note.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Note)
