import React, { Component } from 'react';
import { List } from '../List/List'

export class Note extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {

    return (
        <div className="Note">
          <h4>Note</h4>
          <List />
        </div>
    )
  }
}
