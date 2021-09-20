import React, {useState} from 'react';

function Editor(props) {
    const refEditor = React.useRef()
    
    const [value, setValue] = useState(props.data)

    const checkForTags = () => {
      if (value === '') return ''
      const words = refEditor.current.value.split(' ')
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

    const changeNote = () => {
        props.setShowEditor('no')
        props.update(props.index, checkForTags())        
    }

    const handleChange = (event) => { 
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