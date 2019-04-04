import React, { Component } from 'react';
import { List } from '../List/List';
import { fetchOptionsCreator } from '../../utility/fetchOptionsCreator'
import { fetchData } from '../../utility/fetchData'
import shortid from 'shortid';
import { NavLink } from 'react-router-dom';

export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      title: '',
      list: []
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
    this.setState({ list: [...this.state.list, ""] })
  }

  render() {


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
              <button className="Note-Save" type="submit">Save Note</button>
            </form>
          </div>

        </section>
      </div>
    )
  }
}
