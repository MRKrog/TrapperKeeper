// import React from 'react';

// export const ListItem = (props) => {

//   const { id, index, isComplete, text, handleItemChange, handleItemDelete, toggleComplete } = props;

//   return (
//     <li key={index}>
//       <label className="container">
//         <input onClick={() => toggleComplete(id)} type="checkbox" className={isComplete ? 'checkbox checked' : 'checkbox not-checked'}/>
//         <span className="checkmark"></span>
//       </label>
//       <input type="text"
//               placeholder="List Item"
//               value={text}
//               name="ListItem"
//               className="list-item-input"
//               onChange={(e) => handleItemChange(e, id, index)}
//               disabled={isComplete ? 'disabled' : null}
//         />
//         <button className="delete-button" onClick={(e) => handleItemDelete(e, index)}>
//           <i className="fas fa-times"></i>
//         </button>
//     </li>
//   )

// }

import React, { Component } from 'react';

export class ListItem extends Component {
  
  render() {
    const { id, index, isComplete, text, handleItemChange, handleItemDelete, toggleComplete } = this.props;
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
                className="list-item-input"
                onChange={(e) => handleItemChange(e, id, index)}
                disabled={isComplete ? 'disabled' : null}
                id={id}
          />
          <button className="delete-button" onClick={(e) => handleItemDelete(e, index)}>
            <i className="fas fa-times"></i>
          </button>
      </li>
    )
  }
}