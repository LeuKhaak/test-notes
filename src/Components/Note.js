import React, {useState, useEffect} from 'react';
import Editor from './Editor';


function Note(props) {
    const refNote = React.useRef()
    const refTags = React.useRef()
    
    const [showEditor, setShowEditor] = useState('no')
    const [viewing, setViewing] = useState('no')

    useEffect(() => {  
        refNote.current.innerHTML = props.data[0]
        refTags.current.innerHTML = props.data[2].join(' * ').toLowerCase()
    }, []) // eslint-disable-line   

  return(      
    <li className={viewing === 'no' ? "noteBackground" : "viewingNoteBackground"}>
      <div className={viewing === 'no' ? "note" : "note viewingNote"}>
        
        <button style={viewing === 'no' ? {display: 'block'} : {display: 'none'}} onClick={() =>  setViewing('yes')} className="viewButton"><span className="view"></span></button>

        <button style={viewing === 'yes' ? {display: 'block'} : {display: 'none'}} onClick={() =>  setViewing('no')} className="viewButton"><span className="rollUp"><span></span></span></button>

        <div className="buttonWrapper">
          <button className="delete" onClick={() =>  props.deleteNote(props.index)}>&#10006;</button>

          <button className="edit" onClick={() =>  setShowEditor('yes')}>&#9998;</button>
        </div>

        <div className="noteWrapper">

          <p className={showEditor === "no" ? "noteText" : "noteText editing"} ref={refNote}></p>
            
          <p className="noteTags" ref={refTags}></p>
        </div>

        <Editor index={props.index} data={props.data[1]} tags={props.tags} showEditor={showEditor} setShowEditor={setShowEditor} update={props.update}/>
      </div>   
    </li>
  )
}  

export default Note