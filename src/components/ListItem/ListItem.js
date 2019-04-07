import React from 'react';
import checked from '../../media/checked.svg';
import unchecked from '../../media/unchecked.svg';

export const ListItem = (props) => {

  const { id, index, isComplete, text, handleItemChange, handleItemDelete, toggleComplete } = props;
  let listType = isComplete ? 'ItemComplete' : 'ItemIncomplete';

  return (
    <li key={index} className={listType} >
      <button className="CheckBox" onClick={() => toggleComplete(id)}>
        <img src={isComplete ? checked : unchecked} alt="Check Box" />
      </button>
      <input type="text"
             placeholder="List Item"
             value={text}
             autoComplete="off"
             name="ListItem"
             className="list-item-input"
             onChange={(e) => handleItemChange(e, id)}
             disabled={isComplete ? 'disabled' : null}
             id={id}
        />
        <button className="delete-button" onClick={(e) => handleItemDelete(e, id)}>
          <i className="fas fa-times"></i>
        </button>
    </li>
  )

}
