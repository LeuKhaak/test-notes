// eslint-disable-next-line
import React, {useState, useEffect} from 'react';


function Note(props) {
    const refNote = React.useRef()
    const refTags = React.useRef()

    useEffect(() => {  
        refNote.current.innerHTML = props.data[0]
        refTags.current.innerHTML = selectTags() 
    }, []) // eslint-disable-line

    const deleteNote = () => {
      const oldData = JSON.parse(localStorage.getItem('notes'));
      const newData = oldData.filter(element => element !==  props.data);
      localStorage.setItem('notes', JSON.stringify(newData));
      props.update()      
    }

    const selectTags = () => {
      const words = props.data[1].split(' ')
      const tags = words.filter(element => element.includes("#"));
      console.log(tags)
      return tags
    }

  return(      
    <li className="note">
        <button className="delete" onClick={() => deleteNote()}>&#10006;</button>
        <p ref={refNote}></p>
        <p ref={refTags}></p>        
    </li>
  )
} // { props.data[1].split(' ').filter(element => element.includes("#")).map((element, index) => (
//   <span key={index}>{element}</span>            
// ))}

export default Note