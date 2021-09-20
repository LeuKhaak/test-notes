import React, {useState} from 'react';
import checkForTags from '../Utils/CheckForTags';

function CreatorNotes(props) {    

// eslint-disable-next-line
const refCreator = React.useRef()
const [showCreator, setShowCreator] = useState('no')
const [value, setValue] = useState('')

const startCreate = () => { // opening the note creation editor
  setShowCreator('yes')
  setValue('')
}

const addNote = () => { // adding a created note
  setShowCreator('no')
  props.add(checkForTags(value, refCreator, props)); // checkForTags - checking words for matching tags
}

const handleChange = (event) => { // function to change the value when entering characters
  setValue(event.target.value)
}

  return(
      <div className="creatorNotes">        
        <button onClick={startCreate} style={showCreator === 'no' ? {display: 'block'} : {display: 'none'}} className="createButton">Create note</button>

        <div className="creatorWrapper"  style={showCreator === 'yes' ? {display: 'flex'} : {display: 'none'}}>
          <button onClick={addNote} className="createButton add">Add note</button>

          <textarea className="noteForm" ref={refCreator} name="noteContent" placeholder="Write your note" value={value} onChange={(event) => handleChange(event)}></textarea>          
        </div>        
      </div>
  )
}

export default CreatorNotes