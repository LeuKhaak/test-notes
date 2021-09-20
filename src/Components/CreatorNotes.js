import React, {useState} from 'react';

function CreatorNotes(props) {    

// eslint-disable-next-line
const refCreator = React.useRef()
const [showCreator, setShowCreator] = useState('no')
const [value, setValue] = useState('')

const startCreate = () => {
  setShowCreator('yes')
  setValue('')
}

const checkForTags = () => {
  if (value === '') return ''
  const words = refCreator.current.value.split(' ')
  //const tags = props.tags.toString()

  const checkedWords = []
  words.forEach(element => {

    let Tag = element;
    
    props.tags.forEach((tag) => {
      if (tag.slice(1).toLowerCase() === element.toLowerCase() && element[0] !== '#') 
        Tag = '#' + element   
    })

    checkedWords.push(Tag)
    
    
  });
  const checkedNote = checkedWords.join(' ')
  return checkedNote;
}

const addNote = () => {
  setShowCreator('no')
  props.add(checkForTags());
}

const handleChange = (event) => { 
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