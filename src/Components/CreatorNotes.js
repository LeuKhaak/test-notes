// eslint-disable-next-line
import React, {useState, useEffect} from 'react';

function CreatorNotes(props) {    

// eslint-disable-next-line
const refCreator = React.useRef()
const [showCreator, setShowCreator] = useState('no')
const [value, setValue] = useState('')

const startCreate = () => {
  setShowCreator('yes')
  setValue('')
}

const addNote = () => {
  setShowCreator('no')
  props.add(refCreator.current.value);
}

const handleChange = (event) => { 
  setValue(event.target.value)
}


  return(
      <div className="creatorNotes">        
        <button onClick={startCreate} style={showCreator === 'no' ? {display: 'block'} : {display: 'none'}} className="createButton">Create note</button>

        <div className="creatorWrapper"  style={showCreator === 'yes' ? {display: 'flex'} : {display: 'none'}}>
          <button onClick={addNote} className="createButton">Add note</button>

          <textarea className="noteForm" ref={refCreator} name="noteContent" placeholder="Write your note" value={value} onChange={(event) => handleChange(event)}></textarea>          
        </div>        
      </div>
  )
}

export default CreatorNotes