import React, {useState} from 'react';

function CreatorTags(props) { 
  // eslint-disable-next-line
const refCreator = React.useRef()
const [showCreator, setShowCreator] = useState('no')
const [value, setValue] = useState('')

  const startCreate = () => {
    setShowCreator('yes')
    setValue('')
  }

  const addTag = () => {
    setShowCreator('no')
    props.addTag(refCreator.current.value.toLowerCase());
  }

  const handleChange = (event) => { 
    setValue(event.target.value)
  }

  return(
      <div className="creatorTags">
        <button onClick={startCreate} style={showCreator === 'no' ? {display: 'block'} : {display: 'none'}} className="createButton">Create tag</button>

        <div className="creatorTagsWrapper" style={showCreator === 'yes' ? {display: 'flex'} : {display: 'none'}} >
          <input className="tagInput"  ref={refCreator} name="tagContent" placeholder="Create tag starting with #" value={value} onChange={(event) => handleChange(event)}></input>

          <button onClick={addTag} className="createButton add">Add tag</button>
        </div>       
         
      </div>
  )
}

export default CreatorTags
