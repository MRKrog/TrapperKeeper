import React from 'react';
import { PropTypes } from 'prop-types';

import checked from '../../media/checked.svg';
import unchecked from '../../media/unchecked.svg';

const NoteDisplay = (props) => {
  const titleMax = 13;
  const listMax = 20;
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
          <li key={item.id} className={item.isComplete ? 'completed' : 'incompelete'}>
            <div className="checkBox"><img src={item.isComplete ? checked : unchecked} alt="Check Box" /></div>
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
