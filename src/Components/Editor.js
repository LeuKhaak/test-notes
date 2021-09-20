import React, {useState} from 'react';
import checkForTags from '../Utils/CheckForTags';

function Editor(props) {
    const refEditor = React.useRef()
    
    const [value, setValue] = useState(props.data) 

    const changeNote = () => { // closing the editing window (opening - with the help of props) and saving the edited note
        props.setShowEditor('no')
        props.update(props.index, checkForTags(value, refEditor, props)) // checking words for matching tags       
    }

    const handleChange = (event) => { // function to change the value when entering characters
      setValue(event.target.value)
    }

  return( 
    <div className="editor" style={props.showEditor === 'yes' ? {display: 'flex'} : {display: 'none'}}>

      <textarea className="noteForm" ref={refEditor} name="noteContent" value={value} onChange={(event) => handleChange(event)}></textarea>

      <button onClick={changeNote}  className="createButton change">Change note</button>
    </div>
  )
} 

export default Editor