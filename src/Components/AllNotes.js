// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import Note from './Note';
import AllTags from './AllTags';

function AllNotes(props) {
  // console.log(props.data)

  return(
      <div className="notes">
        <ul className="notesList">
          { props.data.map((element, index) => (
            <Note key={ element } data={element} index={ index } update={props.update} deleteNote={ props.deleteNote }/>           
          ))}
        </ul>
        <AllTags tags={props.tags}/>
      </div>
  )
}

export default AllNotes