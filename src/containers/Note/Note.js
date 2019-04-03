import React, { Component } from 'react';
import { List } from '../List/List';

import { fetchData } from '../../utility/fetchData';


export class Note extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      type: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    // console.log(this.state);
    const url = 'http://localhost:3001/api/v1/notes'
    try {
      const response = await fetchData(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.state)
      })
      console.log(response);
      const data = await response.json()
      console.log('data' , data);
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {

    return (
        <div className="Note">
          <h4>Note</h4>
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
