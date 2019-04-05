import React, { Component } from 'react';



export class ListItem extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    const { id, index, isComplete, text, handleItemChange, handleItemDelete, toggleComplete } = this.props
    console.log(id)
    return (
      <li key={ index }>
        <label className="container">
          <input onClick={() => toggleComplete(id)} type="checkbox" className={isComplete ? 'checked' : null}/>
          <span className="checkmark"></span>
        </label>
        <input type="text"
                placeholder="List Item"
                value={text}
                name="ListItem"
                onChange={(e) => handleItemChange(e, index)}
          />
          <button onClick={(e) => handleItemDelete(e, index)}>
            <i className="fas fa-times"></i>
          </button>
      </li>
    )
  }
}
