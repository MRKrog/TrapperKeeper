import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { hasError, isLoading } from '../../actions/index';
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
      toHomePage: false,
      displayError: false,
      background: '#FFE680',
      list: [
        {
          id: shortid.generate(),
          isComplete: false,
          text: '',
        },
      ]
    }
  }

  componentDidMount = async () => {
    this.props.noteId && await this.findNote(this.props.noteId);
    document.addEventListener('keydown', this.handleKeydown);
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
    document.removeEventListener('mousedown', this.handleClick);
  }

  handleClick = (event) => {
    const noteClass = event.path.filter(road => road.className === 'Note');
    if (!noteClass.length) this.setState({toHomePage: true});
  }

  handleKeydown = (event) => {
    if ( event.code === 'Escape' ) this.setState({toHomePage: true});
  }

  findNote = async (noteId) => {
    this.props.isLoading(true);
    const url = `http://localhost:3001/api/v1/notes/${noteId}`;
    try {
      const response = await fetchData(url);
      const { id, title, list, background } = response;
      this.setState({
        id,
        background,
        title,
        list: [...list]
      })
    } catch(error) {
      if (error.message === 'Note was not found') {
        this.props.hasError(error.message);
        this.setState({displayError: true})
      }
    }
    this.props.isLoading(false);
  }

  handleSeparate = () => {
    const { list } = this.state;
    let completedItems = list.filter(item => item.isComplete);
    let incompletedItems = list.filter(item => !item.isComplete);
    return {
      completedItems,
      incompletedItems
    }
  }

  handleType = (e) => {
    e.preventDefault();
    const { type } = this.props;
    if (type === "new-note" || type === "existing-note") this.handlePostandPut(type)
  }

  handlePostandPut = async (type) => {
    const { title, list, background } = this.state;
    let path = type === 'new-note' ? 'POST' : 'PUT';
    let urlEnd = type === 'new-note' ? 'notes' : `notes/${this.props.id}`;
    const url = `http://localhost:3001/api/v1/${urlEnd}`;
    try {
      const options = await fetchOptionsCreator(path , { title, list, background });
      await fetchData(url, options);
      this.props.fetchAllNotes('http://localhost:3001/api/v1/notes');
      this.setState({toHomePage: true});
    } catch(error) {
      this.props.hasError('Note Cannot Be Saved');
      this.displayWindowAlert()
    }
  }

  handleTitleChange = (e) => {
    const { name, value } = e.target;
    if(value.length < 1) {
      this.setState({ displayError: true });
      this.setState({[name]: value});
    } else {
      this.setState({ displayError: false });
      this.setState({[name]: value});
    }
  }

  handleItemChange = (e, id) => {
    const { list } = this.state;
    const foundItem = list.find(item => item.id === id);
    foundItem.text = e.target.value;
    this.setState({ list });
    this.generateNewListItem(e, foundItem);
  }

  generateNewListItem = (e, foundItem) => {
    const { value } = e.target;
    const items = this.handleSeparate();
    const lastItem = items.incompletedItems.pop();
    if (value.length === 1 && foundItem.id === lastItem.id) this.addItem();
  }

  handleItemDelete = (e, id) => {
    e.preventDefault();
    const { list } = this.state;
    const foundIndex = list.findIndex(item => item.id === id);
    list.splice(foundIndex, 1);
    this.setState({ list });
  }

  addItem = () => {
    let defaultItem = {
      id: shortid.generate(),
      isComplete: false,
      text: ''
    };
    this.setState({list: [...this.state.list, defaultItem]});
  }

  deleteNote = async (e) => {
    e.preventDefault();
    const url = `http://localhost:3001/api/v1/notes`;
    try {
      const options = await fetchOptionsCreator('DELETE', {})
      await fetchData(`${url}/${this.props.id}`, options);
      this.props.fetchAllNotes(url);
      this.setState({ toHomePage: true });
    } catch (error) {
      this.props.hasError('Note Can Not Be Deleted');
      this.displayWindowAlert()
    }
  }

  displayWindowAlert = () => {
    window.alert(this.props.error + '\nInternal Server Error')
    this.setState({ toHomePage: true });
  }

  toggleComplete = (id) => {
    const { list } = this.state;
    const updatedList = list.map(item => {
      if (id === item.id) item.isComplete = !item.isComplete;
      return item;
    });
    this.setState({ list: updatedList });
  }

  changeColor = (e) => {
    const { name } = e.target;
    this.setState({ background: name })
  }

  handleClose = () => {
    this.props.hasError('');
  }

  render() {
    const separatedList = this.handleSeparate();
    const { completedItems, incompletedItems } = separatedList;
    const { toHomePage, displayError, background } = this.state;
    if (toHomePage) return <Redirect to='/' />;
    let completedMessage = completedItems.length ? `${completedItems.length} Completed Item(s)` : null;
    return (
      <div className="Note">
        {
          this.props.loading ?
            <div></div> :
            <div className="note-content" style={{backgroundColor: background}}>
              <input  type="text"
                className="note-title"
                placeholder="Enter A Title..."
                value={this.state.title}
                name="title"
                autoComplete="off"
                onChange={this.handleTitleChange} />
                <div className={displayError ? 'errorLabel Active' : 'errorLabel'}>
                  <i className="fas fa-exclamation-triangle"></i>
                  <p className="name-error">Please Enter A Title</p>
                </div>
              <ul className="ListItems">
                {
                  incompletedItems.map((item, index) =>
                    <ListItem key={item.id}
                              index={index}
                              toggleComplete={this.toggleComplete}
                              handleItemChange={this.handleItemChange}
                              handleItemDelete={this.handleItemDelete}
                              {...item} /> )
                }
              </ul>
              { completedMessage && <p className="Completed-Message">{completedMessage}</p> }
              <ul className="ListItems Completed">
                {
                  completedItems.map((item, index) =>
                    <ListItem key={item.id}
                              index={index}
                              toggleComplete={this.toggleComplete}
                              handleItemChange={this.handleItemChange}
                              handleItemDelete={this.handleItemDelete}
                              {...item} /> )
                }
              </ul>
              <NoteOptions  handleType={this.handleType}
                            deleteNote={this.deleteNote}
                            handleClose={this.handleClose}
                            type={this.props.type}
                            displayError={displayError}
                            changeColor={this.changeColor}
                            title={this.state.title}/>
            </div>
              }
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  error: state.error,
  loading: state.loading,
})

export const mapDispatchToProps = (dispatch) => ({
  hasError: (message) => dispatch(hasError(message)),
  fetchAllNotes: (url) => dispatch(fetchAllNotes(url)),
  isLoading: (value) => dispatch(isLoading(value)),
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
