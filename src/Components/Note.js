// eslint-disable-next-line
import React, {useState, useEffect} from 'react';


function Note(props) {
    const refNote = React.useRef()

    useEffect(() => {  
        refNote.current.innerHTML = props.data  
    }, []) // eslint-disable-line

    const deleteNote = () => {        
        
    }

  return(      
    <li className="note">
        <button className="delete" onClick={() => deleteNote()}>&#10006;</button>
        <p ref={refNote}></p>        
    </li>
  )
}

export default Note