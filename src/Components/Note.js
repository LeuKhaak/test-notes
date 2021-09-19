// eslint-disable-next-line
import React, {useState, useEffect} from 'react';
import Editor from './Editor';


function Note(props) {
    const refNote = React.useRef()
    const refTags = React.useRef()
    
    const [showEditor, setShowEditor] = useState('no')

    useEffect(() => {  
        refNote.current.innerHTML = props.data[0]
        refTags.current.innerHTML = props.data[2] 
    }, []) // eslint-disable-line

    // const deleteNote = (inx) => {
    //   // const oldData = JSON.parse(localStorage.getItem('notes'));
    //   // const newData = oldData.filter(element => JSON.stringify(element) !==  JSON.stringify(props.data));
    //   // localStorage.setItem('notes', JSON.stringify(newData));
    //   props.update()      
    // }

    // const selectTags = () => {
    //   const words = props.data[1].split(' ')
    //   const tags = words.filter(element => element.includes("#"));
    //   console.log(tags)
    //   return tags
    // }    

  return(      
    <li className="note">
        <button className="delete" onClick={() =>  props.deleteNote(props.index)}>&#10006;</button>
        <button className="edit" onClick={() =>  setShowEditor('yes')}>&#9998;</button>

        <div className="noteWrapper">
          <p className={showEditor === "no" ? "noteText" : "noteText editing"} ref={refNote}></p>
          <p className="noteTags" ref={refTags}></p>
        </div>

        <Editor index={props.index} data={props.data[1]} showEditor={showEditor} setShowEditor={setShowEditor} update={props.update}/>    
    </li>
  )
} // { props.data[1].split(' ').filter(element => element.includes("#")).map((element, index) => (
//   <span key={index}>{element}</span>            
// ))} onClick={addNote}  

export default Note