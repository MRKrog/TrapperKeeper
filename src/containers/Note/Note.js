import React, { Component } from 'react';
import { List } from '../List/List';
import { fetchOptionsCreator } from '../../utility/fetchOptionsCreator'
import { fetchData } from '../../utility/fetchData'

export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:3001/api/v1/notes';
    try {
      const options = fetchOptionsCreator('POST', this.state)
      const response = await fetchData(url, options)
    } catch (error) {
      this.props.hasError(error.message)
    }
  }

  render() {
    return (
        <div className="Note">
          <h4>{this.props.title}</h4>
          <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
            <input type="text" value={this.state.type} name="type" onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </form>
          <List />
        </div>
    )
  }
}
