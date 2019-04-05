import React, { Component } from 'react';

export class ListItem extends Component {

  render() {
    const { id, index, isComplete, text, handleItemChange, handleItemDelete, toggleComplete } = this.props
    return (
      <li key={index}>
        <label className="container">
          <input onClick={() => toggleComplete(id)} type="checkbox" className={isComplete ? 'checkbox checked' : 'checkbox not-checked'}/>
          <span className="checkmark"></span>
        </label>
        <input type="text"
                placeholder="List Item"
                value={text}
                name="ListItem"
                onChange={(e) => handleItemChange(e, index)}
                className="list-item-input"
          />
          <button className="delete-button" onClick={(e) => handleItemDelete(e, index)}>
            <i className="fas fa-times"></i>
          </button>
      </li>
    )
  }
}
