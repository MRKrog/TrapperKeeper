import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hasError } from '../../actions/index';
import { fetchOptionsCreator } from '../../utility/fetchOptionsCreator'
import { fetchData } from '../../utility/fetchData';
import { fetchAllNotes } from '../../thunks/fetchAllNotes'
import { ListItem } from '../../components/ListItem/ListItem';
import NoteOptions from '../../components/NoteOptions/NoteOptions';

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
      errorPage: false,
    }
  }

  //not tested ( eventListener )
  componentDidMount = () => {
    if(this.props.noteId) {
      this.findNote(this.props.noteId);
    }
    document.addEventListener('keydown', this.handleKeydown);
  }

  //not tested
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    if ( event.code === 'Enter' ) this.handleEnter(event);
    if ( event.code === 'Escape' ) this.handleEscape();
  }

  //not tested
  handleEnter = (event) => {
    if ( event.path[0].localName !== 'input' ) return null;

    // const { id, value } =  event.path[0];
    // const { list } = this.state;
    // const matchItem = list.find(item => item.id === id);
    // const lastItem = list.filter(item => item.isComplete === false).pop();
    // if ( value.length > 0 && matchItem === lastItem ) this.addItem();
  }

  handleEscape = () => {
    this.setState({ toHomePage: true})
  }

  findNote = async (noteId) => {
    const url = `http://localhost:3001/api/v1/notes/${noteId}`
    try {
      const response = await fetchData(url)
      this.setState({
        id: response.id,
        title: response.title,
        list: [...response.list]
      })
    } catch (error) {
      this.props.hasError(error.message)
      this.setState({errorPage: true})
    }
  }

  handleType = (e) => {
    e.preventDefault()
    if(this.props.type === "new-note") {
      this.handlePost();
    } else if(this.props.type === "existing-note") {
      this.handlePut();
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
      // this.props.fetchAllNotes('http://localhost:3001/api/v1/notes')
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

  handleItemChange = (e, id) => {
    e.preventDefault();
    const foundItem = this.state.list.find(item => item.id === id);
    foundItem.text = e.target.value;
    this.setState({ list: this.state.list });
    this.generateNewListItem(e, foundItem);
  }

  generateNewListItem = (e, foundItem) => {
    const { value } = e.target;
    const lastItem = this.state.list.filter(item => item.isComplete === false).pop();
    if (value.length === 1 && foundItem.id === lastItem.id) this.addItem();
  }

  handleItemDelete = (e, id) => {
    e.preventDefault();
    let foundIndex = this.state.list.findIndex(item => item.id == id)
    this.state.list.splice(foundIndex, 1)
    this.setState({ list: this.state.list })
  }

  addItem = () => {
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
      this.props.hasError(error.message);
      if(error.message === 'Note not found'){this.props.hasError('note can not be deleted')}
    }
  }

  toggleComplete = (id) => {
    const updatedList = this.state.list.map(item => {
      if(id === item.id) {
        item.isComplete = !item.isComplete
      }
      return item
    });
    this.setState({ list: updatedList })
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

  handleClose = () => {
    this.props.hasError('');
  }

  render() {
    const { toHomePage, errorPage } = this.state
    if(toHomePage === true){
      return <Redirect to='/' />
    } else if(errorPage === true) {
      return <Redirect to='/404' />
    }
    let seperatedList = this.handleSeperate();
    return (
      <div className="Note">
        <section className="Note-Content">
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
              {
                seperatedList.completed.items.length > 0 &&
                <div className="Completed-Message">
                  <p>{seperatedList.completed.items.length} Completed Items</p>
                </div>
              }
              <ul className="ListItems Completed">
                {
                  seperatedList.completed.items.map((item, index) => {
                    return (
                      <ListItem key={item.id} {...item} index={index} toggleComplete={this.toggleComplete} handleItemChange={this.handleItemChange} handleItemDelete={this.handleItemDelete} />
                    )
                  })
                }
              </ul>
              <NoteOptions handleType={this.handleType} deleteNote={this.deleteNote} handleClose={this.handleClose} />
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
  fetchAllNotes: PropTypes.func,
  hasError: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm)
