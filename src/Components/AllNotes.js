// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import Note from './Note';

function AllNotes(props) {

  return(
      <div className="notes">
        <ul className="notesList">
          { props.data.map((element, index) => (
            <Note key={index} data={element} update={props.update}/>            
          ))}
        </ul>
      </div>
  )
}

export default AllNotes