import React, {useState, useEffect} from 'react';
import Editor from './Editor';


function Note(props) {
    const refNote = React.useRef()
    const refTags = React.useRef()
    
    const [showEditor, setShowEditor] = useState('no')

    useEffect(() => {  
        refNote.current.innerHTML = props.data[0]
        refTags.current.innerHTML = props.data[2].join(' * ').toLowerCase()
    }, []) // eslint-disable-line   

  return(      
    <li className="note">
        <div className="buttonWrapper">
          <button className="delete" onClick={() =>  props.deleteNote(props.index)}>&#10006;</button>
          <button className="edit" onClick={() =>  setShowEditor('yes')}>&#9998;</button>
        </div>

        <div className="noteWrapper">
          <p className={showEditor === "no" ? "noteText" : "noteText editing"} ref={refNote}></p>
          <p className="noteTags" ref={refTags}></p>
        </div>

        <Editor index={props.index} data={props.data[1]} tags={props.tags} showEditor={showEditor} setShowEditor={setShowEditor} update={props.update}/>    
    </li>
  )
}  

export default Note