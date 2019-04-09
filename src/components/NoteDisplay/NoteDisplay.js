import React from 'react';

const NoteDisplay = (props) => {
  const titleMax = 20;
  const listMax = 30;
  return (
    <div className="NoteDisplay">
      <h3>
        {
          props.title.length > titleMax ?
          props.title.substring(0, titleMax) + '...' :
          props.title
        }
      </h3>
      <ul>
      {
        props.list.map(item => (
          <li key={item.id} className={item.isComplete ? 'completed' : ''}>
            {
              item.text.length > listMax ?
              item.text.substring(0, listMax) + '...' :
              item.text
            }
          </li>
        ))
      }
      </ul>
    </div>
  )

}

export default NoteDisplay;