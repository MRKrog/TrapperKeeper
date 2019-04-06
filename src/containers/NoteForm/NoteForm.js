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
      errorPage: false
    }
  }

  componentDidMount = async () => {
    if(this.props.noteId) {
      await this.findNote(this.props.noteId)
    }
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
      console.log(error.message);
      if(error.message === 'Error'){this.setState({errorPage: true})}
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
                  seperatedList.uncompleted.items.map((item, index) => {
                    return (
                      <ListItem key={item.id} {...item} index={index} toggleComplete={this.toggleComplete} handleItemChange={this.handleItemChange} handleItemDelete={this.handleItemDelete} />
                    )
                  })
                }
              </ul>
              <div><p>Completed Items</p></div>
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
            </form>
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
