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
      <div className="creater">        
        <button onClick={startCreate} style={showCreator === 'no' ? {display: 'block'} : {display: 'none'}} className="createNote">Create note</button>

        <div style={showCreator === 'yes' ? {display: 'block'} : {display: 'none'}} className="noteForm">
          <textarea ref={refCreator} name="noteContent" placeholder="Write your note" value={value} onChange={(event) => handleChange(event)}></textarea>

          <button onClick={addNote} className="addNote">Add note</button>
        </div>        
      </div>
  )
}

export default CreatorNotes