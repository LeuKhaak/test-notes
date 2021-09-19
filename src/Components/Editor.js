// eslint-disable-next-line
import React, {useState, useEffect} from 'react';


function Editor(props) {
    const refEditor = React.useRef()
    
    const [value, setValue] = useState(props.data)

    // useEffect(() => {  
    //     refNote.current.innerHTML = props.data[0]
    //     refTags.current.innerHTML = props.data[2] 
    // }, []) // eslint-disable-line

    const changeNote = () => {
        props.setShowEditor('no')
        props.update(props.index, refEditor.current.value)
        //console.log(refEditor.current.value)
    }

    const handleChange = (event) => { 
      setValue(event.target.value)
    }

  return( 
    <div style={props.showEditor === 'yes' ? {display: 'block'} : {display: 'none'}}>
        <textarea className="noteForm" ref={refEditor} name="noteContent" value={value} onChange={(event) => handleChange(event)}></textarea>

        <button onClick={changeNote}  className="createButton">Change note</button>
    </div>
  )
} // { props.data[1].split(' ').filter(element => element.includes("#")).map((element, index) => (
//   <span key={index}>{element}</span>            
// ))} onClick={addNote}  

export default Editor