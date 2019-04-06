import React, { Component } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import shortid from 'shortid';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { hasError } from '../../actions/index';

import { fetchOptionsCreator } from '../../utility/fetchOptionsCreator'
import { fetchData } from '../../utility/fetchData';
import { fetchAllNotes } from '../../thunks/fetchAllNotes'

import { ListItem } from '../ListItem/ListItem';

export class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      list: [{
              id: shortid.generate(),
              isComplete: false,
              text: ""
            }],
      toHomePage: false,
      redirect: false
    }
  }
  
  componentDidMount = async () => {
    if(this.props.noteId) {
      await this.findNote(this.props.noteId)
    }
    document.addEventListener('keydown', this.handleKeydown)
  }

  handleKeydown = (event) => {
    if ( event.code === 'Enter' ) this.handleEnter(event);
    if ( event.code === 'Escape' ) this.handleEscape();
  }

  handleEnter = (event) => {
    if ( event.path[0].localName !== 'input' ) return null;

    const { id, value } =  event.path[0];
    const { list } = this.state;
    const matchItem = list.find(item => item.id === id);
    const lastItem = list.filter(item => item.isComplete === false).pop();

    if ( value.length > 0 && matchItem === lastItem ) this.addItem();
  }

  handleEscape = () => {
    console.log('esCaPAY');
    this.setState({redirect: true})
  }

  findNote = async (noteId) => {
    const url = `http://localhost:3001/api/v1/notes/${noteId}`
    try {
      const response = await fetchData(url)
      // console.log('response', response);
      this.setState({
        id: response.id,
        title: response.title,
        list: [...response.list]
      })
    } catch (error) {
      console.log(error.message);
    }
  }

  handleType = (e) => {
    e.preventDefault()
    if(this.props.type === "new-note") {
      this.handlePost()
    } else if(this.props.type === "existing-note") {
      this.handlePut()
    }
  }

  handlePost = async () => {
    const { title, list } = this.state;
    const url = 'http://localhost:3001/api/v1/notes';
    try {
      const options = await fetchOptionsCreator('POST', { title, list })
      await fetchData(url, options)
      this.props.fetchAllNotes('http://localhost:3001/api/v1/notes')
      this.setState({ toHomePage: true })
    } catch (error) {
      this.props.hasError(error.message)
    }
  }

  handlePut = async () => {
    const { title, list } = this.state;
    const url = `http://localhost:3001/api/v1/notes/${this.props.id}`;
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

  handleItemChange = (e, id, index) => {
    e.preventDefault();
    const foundItem = this.state.list.find(item => item.id === id);
    foundItem.text = e.target.value;
    this.setState({ list: this.state.list });
    this.generateNewListItem(e, foundItem);
  }

  generateNewListItem = (e, foundItem) => {
    const { value } = e.target;
    const lastItem = this.state.list.filter(item => item.isComplete === false).pop();

    if ( value.length === 1 && foundItem.id === lastItem.id ) this.addItem();
  }

  handleItemDelete = (e, index) => {
    e.preventDefault()
    this.state.list.splice(index, 1)
    this.setState({ list: this.state.list })
  }

  addItem = () => {
    // e.preventDefault()
    this.setState({ list: [...this.state.list, {
        id: shortid.generate(),
        isComplete: false,
        text: ""
       }
      ]
     })
  }

  deleteNote = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3001/api/v1/notes/${this.props.id}`;
    try {
      const options = await fetchOptionsCreator('DELETE', {})
      await fetchData(url, options)
      this.props.fetchAllNotes('http://localhost:3001/api/v1/notes')
      this.setState({ toHomePage: true })
    } catch (error) {
      this.props.hasError(error.message)
    }
  }

  toggleComplete = (id) => {
    const updatedList = this.state.list.map(item => {
      if(id === item.id) {
        item.isComplete = !item.isComplete
      }
      return item
    });
    this.setState({list: updatedList })
  }

  handleSeperate = () => {
    const { list } = this.state
    let completed = list.filter(item => item.isComplete)
    let uncompleted = list.filter(item => !item.isComplete)
    return {
      completed: {
        items: completed,
      },
      uncompleted: {
        items: uncompleted,
      }
    }
  }

  render() {
    if (this.state.redirect) return <Redirect to='/' />;

    const { toHomePage } = this.state
    if(toHomePage === true){
      return <Redirect to='/' />
    }
    let seperatedList = this.handleSeperate();
    return (
      <div className="Note">
        <section className="Note-Content">
          <NavLink to="/" className="Note-Close">
            <button><i className="fas fa-times"></i></button>
          </NavLink>
          <div className="Note-Form-Container">
            <div className="Note-Form">
              <input type="text"
                     onChange={this.handleTitleChange}
                     placeholder="Title"
                     value={this.state.title}
                     name="title"
                     className="Note-Title"
                     />
              <ul className="ListItems">
                {
                  seperatedList.uncompleted.items.map((item, index) => {
                    return (
                      <ListItem key={item.id} {...item} index={index} toggleComplete={this.toggleComplete} handleItemChange={this.handleItemChange} handleItemDelete={this.handleItemDelete} />
                    )
                  })
                }
              </ul>
              <ul className="ListItems Completed">
                {
                  seperatedList.completed.items.map((item, index) => {
                    return (
                      <ListItem key={item.id} {...item} index={index} toggleComplete={this.toggleComplete} handleItemChange={this.handleItemChange} handleItemDelete={this.handleItemDelete} />
                    )
                  })
                }
              </ul>
              <section className="Note-Options">
                <button className="Note-Save" onClick={this.handleType} type="submit">
                  <i className="fas fa-save"></i>
                </button>
                <button className="Note-Delete" onClick={this.deleteNote}>
                  <i className="fas fa-trash-alt"></i>
                </button>
              </section>
              <section className="Note-Error"><h2>{this.props.error && this.props.error}</h2></section>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  hasError: (message) => dispatch(hasError(message)),
  fetchAllNotes: (url) => dispatch(fetchAllNotes(url))
})

NoteForm.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
  toHomePage: PropTypes.bool,
  error: PropTypes.string,
  hasError: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
